// @ts-check

/**
 * @param {import("../CardFront/CardFront").Spell[]} spells
 * @param {{ classes?: string[], levels?: number[]}} arg1
 */
export function applyFilters(spells, { classes, levels }) {
  let filterdSpells = spells;

  if (classes && classes.length > 0) {
    filterdSpells = filterdSpells.filter((spell) => spell.classes.some((clazz) => classes.includes(clazz)));
  }

  if (levels && levels.length > 0) {
    filterdSpells = filterdSpells.filter((spell) => levels.includes(spell.level));
  }

  return filterdSpells;
}
