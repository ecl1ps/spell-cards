export {};

/**
 * @typedef {{
 *    name: string,
 *    originalName: string | undefined,
 *    sourceBook: string,
 *    level: number,
 *    school: string,
 *    castTime: string,
 *    concentration: boolean,
 *    ritual: boolean,
 *    range: string,
 *    components: ["V"| "P"|"S"],
 *    ingredients: string[],
 *    duration: string,
 *    classes: string[],
 *    description: string[],
 *  }} Spell
 */

/**
 * @typedef {Spell & {
 *    formattedDescription: string,
 *    cardMax: number,
 *    cardNumber: number,
 *  }} SpellCard
 */
