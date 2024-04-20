// @ts-check
const { test, expect } = require("@playwright/test");
const { writeFile } = require("node:fs/promises");

test("extract czech spell data", async ({ page }) => {
  await page.goto("https://dnd5esrd.d20.cz/grimoar/grimoar-moci.html");

  await page.waitForLoadState();

  const data = await page.locator("main > div").evaluate((content) => {
    const SCHOOL_FIX = {
      Zaklínací: "Zaklínání",
      Transmutační: "Transmutace",
      Iluzorní: "Iluze",
      Vyvolávací: "Vyvolávání",
      Vyvolávácí: "Vyvolávání", // TYPO IN DATA
      Nekromantický: "Nekromancie",
      Očarovací: "Očarování",
      Vymítací: "Vymítání",
      Věštecký: "Věštění",
    };
    /**
     * @param {{ name: string | undefined }} spell
     * @param {Element[]} spellElements
     */
    function extractSpellData(spell, spellElements) {
      let offset = 0;
      const rawOriginalName = spellElements[0].querySelector("strong") ? null : spellElements[0].textContent;
      if (!rawOriginalName) offset = -1; // JaD (and some spells due to a human error) doesn't have original english names so everything is messed up and moved up one level
      // TYPO IN DATA - Vedení is missing english name

      const rawSourceBook = spellElements[offset + 1].textContent;
      if (!rawSourceBook) throw new Error(`rawSourceBook undefined for ${spell.name}`);
      const rawSchoolAndLevel = spellElements[offset + 2].textContent;
      if (!rawSchoolAndLevel) throw new Error(`rawSchoolLevel undefined for ${spell.name}`);
      const rawCastTime = spellElements.find((el) => el.textContent?.startsWith("Vyvolání"))?.textContent;
      if (!rawCastTime) throw new Error(`rawCastTime undefined for ${spell.name}`);
      const rawRange = spellElements.find((el) => el.textContent?.startsWith("Dosah"))?.textContent;
      if (!rawRange) throw new Error(`rawRange undefined for ${spell.name}`);
      const rawComponents = spellElements.find((el) => el.textContent?.startsWith("Složky") || el.textContent?.startsWith("Slozky"))?.textContent; // TYPO IN DATA
      if (!rawComponents) throw new Error(`rawComponents undefined for ${spell.name}`);
      const rawDuration = spellElements.find((el) => el.textContent?.startsWith("Trvání") || el.textContent?.startsWith("Trváni"))?.textContent; // TYPO IN DATA
      if (!rawDuration) throw new Error(`rawDuration undefined for ${spell.name}`);
      const rawClasses = spellElements.find((el) => el.textContent?.startsWith("Povolání"))?.textContent;
      if (!rawClasses) throw new Error(`rawClasses undefined for ${spell.name}`);

      const level = rawSchoolAndLevel?.includes("trik") ? 0 : parseInt(/(\d)\./.exec(rawSchoolAndLevel)?.[1] ?? "-1");
      if (level == null) {
        console.log(`level undefined for ${spell.name}`);
      }

      const school = /^[ěščřžýáíéóúůďťňĎŇŤŠČŘŽÝÁÍÉÚŮĚÓa-zA-Z]+/.exec(rawSchoolAndLevel)?.[0];
      if (!school) {
        console.log(`school undefined for ${spell.name}`);
      }

      const range = /^Dosah:? (.+)/.exec(rawRange)?.[1]; // TYPO IN DATA
      if (!range) {
        console.log(`range undefined for ${spell.name}`);
      }

      const components = /^Slo(z|ž)ky:?\s?([VPS,\s]+)/ // TYPO IN DATA
        .exec(rawComponents)?.[2]
        ?.split(",")
        .map((component) => component.trim());
      if (!components) {
        console.log(`components undefined for ${spell.name}`);
      }

      const castTime = /^Vyvolání:? (.+)/.exec(rawCastTime)?.[1]; // TYPO IN DATA
      if (!castTime) {
        console.log(`castTime undefined for ${spell.name}`);
      }

      const ingredients = /^Slo(ž|z)ky:?.*\((.+)\)/.exec(rawComponents)?.[2]; // TYPO IN DATA

      const duration = /^Trván(í|i):? (.+)/.exec(rawDuration)?.[2]; // TYPO IN DATA
      if (!duration) {
        console.log(`duration undefined for ${spell.name}`);
      }

      // TODO: only one spell has Divutepec in its class list
      const classes = /^Povolání:? (.+)/ // TYPO IN DATA
        .exec(rawClasses)?.[1]
        ?.split(",")
        .map((clazz) => clazz.trim().toLowerCase());
      if (!classes) {
        console.log(`classes undefined for ${spell.name}`);
      }

      return {
        ...spell,
        originalName: rawOriginalName?.trim(),
        sourceBook: rawSourceBook.trim(),
        level,
        school: SCHOOL_FIX[school] ?? school,
        castTime,
        range,
        components,
        ingredients,
        duration,
        classes,
        description: spellElements.slice(offset + 8).map((el) => el.outerHTML),
      };
    }

    const elements = content.children;
    const spells = [];

    let spell = null;
    let spellElements = [];
    for (const el of elements) {
      if (["H1", "H2", "H3"].includes(el.tagName)) {
        continue;
      }

      if (el.tagName == "H4") {
        if (spell) {
          spells.push(extractSpellData(spell, spellElements));
        }

        spell = {
          name: el.textContent?.replace("#", "").trim(),
        };
        spellElements = [];
        continue;
      }

      spellElements?.push(el);
    }

    if (spell) {
      spells.push(extractSpellData(spell, spellElements));
    }

    return spells;
  });

  await writeFile("./public/spells.json", JSON.stringify(data, null, 2));

  console.log(`Scraped ${data.length} spells`);

  expect(data.length).toBeGreaterThan(0);
});
