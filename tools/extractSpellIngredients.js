// https://dnd5esrd.d20.cz/grimoar/grimoar-moci.html

const ingredients = {};
const content = document.querySelector("main>div");
let currentSpellName = null;
for (const el of content.children) {
  if (el.tagName == "H4") {
    currentSpellName = el.childNodes[1].textContent.trim().toLowerCase();
    // they have duplicates in the page
    if (ingredients[currentSpellName]) {
      currentSpellName = null;
    }
  }

  if (currentSpellName && /Složky:.*\((.+)\)/.test(el.textContent)) {
    const allItems = el.textContent;
    const ingredient = allItems.replace(/.*\((.+)\)/, "$1");
    if (ingredient) {
      ingredients[currentSpellName] = ingredient;
    }
  }
}
ingredients;
