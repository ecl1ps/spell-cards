// https://dnd5esrd.d20.cz/grimoar/grimoar-moci.html

const spells = {};
const content = document.querySelector("main>div");

let currentSpellName = null;
let descriptionStarted = false;
for (const el of content.children) {
  if (el.tagName == "H1" || el.tagName == "H2" || el.tagName == "H3") {
    continue;
  }
  if (el.tagName == "H4") {
    descriptionStarted = false;
    currentSpellName = el.childNodes[1].textContent.trim().toLowerCase();
    // they have duplicates in the page
    if (spells[currentSpellName]) {
      currentSpellName = null;
    }
  }

  if (currentSpellName && descriptionStarted) {
    spells[currentSpellName] = [
      ...(spells[currentSpellName] ?? []),
      el.outerHTML,
    ];
  }

  if (el.textContent.startsWith("Povolání:")) {
    descriptionStarted = true;
  }
}
spells;
