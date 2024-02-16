(async () => {
  const spellNameEnFix = {
    "geas [obligation or prohibition]": "geas",
  };

  const spellNameCzFix = {
    'slovo moci „bolest"': 'slovo moci "bolest"',
    'slovo moci „ochrom "': 'slovo moci "ochrom"',
    'slovo moci „uzdrav "': 'slovo moci "uzdrav"',
    'slovo moci „zabij "': 'slovo moci "zabij"',
  };

  const spellNames = Object.fromEntries(
    Object.entries({
      ...(await (await fetch("./data/spellNamesCzGrimoire.json")).json()),
      ...(await (await fetch("./data/spellNamesCzOverrides.json")).json()),
    }).map(([en, cz]) => [en, spellNameCzFix[cz] ?? cz])
  );
  const spellDescriptions = Object.entries(spellNameCzFix).reduce((acc, [bad, good]) => {
    acc[good] = acc[bad];
    return acc;
  }, await (await fetch("./data/spellDescriptionsCzGrimoire.json")).json());

  const spellIngredients = Object.entries(spellNameCzFix).reduce((acc, [bad, good]) => {
    acc[good] = acc[bad];
    return acc;
  }, await (await fetch("./data/spellIngredientsCzGrimoire.json")).json());

  const translations = await (await fetch("./data/miscTranslationsCz.json")).json();

  const schools = {
    Illusion: "Iluze",
    Necromancy: "Nekromancie",
    Conjuration: "Vyvolávání",
    Enchantment: "Očarování",
    Transmutation: "Transmutace",
    Divination: "Věštění",
    Abjuration: "Vymítání",
    Evocation: "Zaklínání",
  };

  const translationRegexes = [
    {
      regex: /^\d+ feet$/,
      replacer: (text) =>
        text.replace(/(\d+) feet/, (matched, feet) => {
          const yards = feet / 5;
          return `${yards} ${yards == 1 ? "sáh" : yards < 5 ? "sáhy" : "sáhů"}`;
        }),
    },
    {
      regex: /^\w+\s+cantrip\s*$/,
      replacer: (text) =>
        text.replace(/^(\w+)\s+cantrip/, (matched, school) => {
          return `${schools[school]} / ${school}`;
        }),
    },
    {
      regex: /^\d\w{2}[-\s]level \w+\s*$/,
      replacer: (text) =>
        text.replace(/^(\d)\w{2} level (\w+)/, (matched, level, school) => {
          return `${schools[school]} / ${school}`;
        }),
    },
    {
      regex: /^(Artificer|Cleric|Ranger|Sorcerer|Warlock|Wizard)\s+(\((\w+)\)\s+)?\(.+\)$/,
      replacer: (text) =>
        text.replace(/^(Artificer|Cleric|Ranger|Sorcerer|Warlock|Wizard)\s+(\((\w+)\)\s+)?\((.+)\)$/, (matched, clazz, _, subclass, expansion) => {
          if (subclass) {
            return `${translations[clazz]} (${translations[subclass] ?? subclass}) (${translations[expansion] ?? expansion})`;
          }
          return `${translations[clazz]} (${translations[expansion] ?? expansion})`;
        }),
    },
  ];

  function translateMiscTexts() {
    const getTextNodes = (node) => [...node.childNodes].filter((child) => child.nodeType === Node.TEXT_NODE);

    const translate = (node) => {
      if (node.textContent && translations[node.textContent.trim()]) {
        node.textContent = translations[node.textContent.trim()];
      } else {
        translationRegexes
          .filter(({ regex }) => regex.test(node.textContent))
          .forEach(({ replacer }) => (node.textContent = replacer(node.textContent)));
      }
    };

    [...document.querySelector(".cardlist").querySelectorAll("*")].forEach((el) => {
      getTextNodes(el).forEach((node) => translate(node));
    });
  }

  function translateNameAndRebuildHeader() {
    [...document.querySelector(".cardlist").querySelectorAll(".name.srname")].forEach((el) => {
      const isRitual = el.textContent.toLowerCase().includes(" (ritual)");
      const isConcentration = el.parentElement.textContent.includes("Concentration");
      const multipleCardsSuffix = / \[\d\/\d\]/.test(el.textContent) ? el.textContent.replace(/.+(\[\d\/\d\])/, "$1") : "";
      const rawSpellName = el.textContent
        .toLowerCase()
        .replace(" (ritual)", "")
        .replace(/ \[\d\/\d\]/, "")
        .trim();
      const spellName = spellNameEnFix[rawSpellName] ?? rawSpellName;
      if (!spellNames[spellName]) {
        console.log("No translation for spell name: " + rawSpellName);
      }
      const translatedSpellName = spellNames[spellName] || spellName;
      const typeText = el.parentElement.parentElement.querySelector(".srtype").textContent;
      const level = typeText.includes("cantrip") ? "T" : typeText.substring(0, 1);

      el.innerHTML = `
            <div class="name-level">
                <span class="level">${level}</span>
                <span class="attributes">${isRitual ? "R" : ""}${isConcentration ? "K" : ""}</span>
            </div>
            <div class="name-first${translatedSpellName.length > 20 ? " small" : ""}">${translatedSpellName}</div>
            <hr  class="name-separator">
            <div class="name-second${spellName.length > 30 ? " small" : ""}">${spellName}</div>
            <div class="name-suffix">${multipleCardsSuffix}</div>`;

      if (isRitual) {
        const castTimeElement = el.parentElement.querySelector(".status.lined > li").childNodes[1];
        castTimeElement.textContent = `Rituál / ${castTimeElement.textContent}`;
      }
    });
  }

  function translatedIngredients() {
    [...document.querySelectorAll(".front")].forEach((card) => {
      const spellName = card.querySelector(".name-first").textContent;
      const ingredients = spellIngredients[spellName];
      if (!ingredients) {
        return;
      }
      if (card.querySelector(".need")) {
        card.querySelector(".need").textContent = ingredients;
      } else {
        const needElement = document.createElement("b");
        needElement.classList.add("need");
        needElement.textContent = ingredients;
        card.querySelector(".body").insertBefore(needElement, card.querySelector(".text"));
      }
    });
  }

  function translatedDescriptionAndResize() {
    function splitter(str, l) {
      var strs = [];
      while (str.length > l) {
        var pos = str.substring(0, l).lastIndexOf(" ");
        pos = pos <= 0 ? l : pos;
        strs.push(str.substring(0, pos));
        var i = str.indexOf(" ", pos) + 1;
        if (i < pos || i > pos + l) i = pos;
        str = str.substring(i);
      }
      strs.push(str);
      return strs;
    }

    const prefferedTextPerCard = 750;

    const cardsPerSpell = [...document.querySelectorAll(".front")].reduce((acc, card) => {
      const spellName = card.querySelector(".name-first").textContent;
      acc[spellName] = [...(acc[spellName] ?? []), card];
      return acc;
    }, {});

    Object.entries(cardsPerSpell).forEach(([spellName, cards]) => {
      const translatedContentItems = spellDescriptions[spellName];
      if (!translatedContentItems) {
        console.log("No description translation for: " + spellName);
        return;
      }

      const description = translatedContentItems
        .map((item) =>
          item
            .replace(/<li>/g, "&nbsp;• ")
            .replace(/<\/li>/g, "<br>")
            .replace(/<\/?(p|ul|em)>/g, "")
            .replace(/<strong>Na vyšších úrovních/g, "<br><strong>Na vyšších úrovních")
        )
        .join("<br>");

      let texts = [];
      if (cards.every((card) => card.querySelector(".name-suffix").textContent)) {
        const maxTextLength =
          description.length > prefferedTextPerCard * cards.length ? Math.ceil(description.length / cards.length) : prefferedTextPerCard;

        texts = splitter(description, maxTextLength);
      } else {
        texts = cards.map((card) => description);
      }
      if (texts.length > cards.length) {
        texts[texts.length - 2] += " " + texts[texts.length - 1];
      }

      for (let i = 0; i < cards.length; i++) {
        const textElement = cards[i].querySelector(".text");
        const needElement = cards[i].querySelector(".need");
        if (needElement) {
          textElement.style.height = 192 - parseInt(window.getComputedStyle(needElement).height, 10) + "px";
        }

        textElement.innerHTML = texts[i] ?? "";
        textElement.classList.remove("smtext");
        textFit(textElement, { maxFontSize: 10 });
      }
    });
  }

  function fixBackSidesWhenSelectingSpecific() {
    const cardsLeft = [...document.querySelectorAll(".card.card-left")];
    const cardsRight = [...document.querySelectorAll(".card.card-right")];
    if (cardsLeft.length !== cardsRight.length) {
      throw new Error("There is no same number of fronts to the backs of the cards!");
    }

    const onLeftCardClick = (event) => {
      event.currentTarget.classList.toggle("select");
      document.querySelector(`#${event.currentTarget.id}-back`).classList.toggle("select");

      document.body.classList.add("editing");

      if (!document.querySelectorAll(".select").length) {
        document.body.classList.remove("editing");
        return false;
      }
    };

    cardsLeft.forEach((left, index) => {
      left.addEventListener("click", onLeftCardClick);
      cardsRight[index].id = `${left.id}-back`;
    });
  }

  translateNameAndRebuildHeader();
  translateMiscTexts();
  translatedIngredients();
  translatedDescriptionAndResize();
  fixBackSidesWhenSelectingSpecific();
})();
