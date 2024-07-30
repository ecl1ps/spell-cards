// @ts-check
import React from "react";

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
 * @param {{ spell: Spell }} spell
 */
export function CardFront({ spell }) {
  return (
    <div id="c6da94" className="card card-left cardBlock class-2">
      <div className="front">
        <div className="body">
          <h3 className="name lined srname">
            <div className="name-level">
              <span className="level">{spell.level === 0 ? "T" : spell.level}</span>
              <span className="attributes">
                {spell.concentration ? "K" : ""}
                {spell.ritual ? "R" : ""}
              </span>
            </div>
            <div className="name-first">{spell.name}</div>
            <hr className="name-separator" />
            <div className="name-second">{spell.originalName}</div>
            <div className="name-suffix"></div>
          </h3>
          <ul className="status lined">
            <li>
              <em>vyvolání</em>
              {spell.castTime}
            </li>
            <li className="second">
              <em>dosah</em>
              {spell.range}
            </li>
            <br
              // @ts-ignore
              clear="all"
            />
          </ul>

          <ul className="status lined">
            <li>
              <em>komponenty</em>
              {spell.components.join(", ")}
            </li>
            <li className="second small">
              <em>trvání</em>
              {spell.duration}
            </li>
            <br
              // @ts-ignore
              clear="all"
            />
          </ul>

          <b className="need">{spell.ingredients}</b>
          <p className="text">description</p>
        </div>
        <b className="class srclass">{spell.classes.join(", ")}</b>
        <b className="type srtype">{spell.school}</b>
      </div>
    </div>
  );
}
