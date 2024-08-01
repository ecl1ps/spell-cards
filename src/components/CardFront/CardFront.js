// @ts-check
import React from "react";
import { spellSchools } from "../spellSchools";
import "./CardFront.css";
import "./TextFormat.css";

const componentMap = { V: "Verb.", S: "Sur.", P: "Poh." };

/**
 * @param {{ spell: import("../../types").SpellCard }} spell
 */
export function CardFront({ spell }) {
  return (
    <div id="c6da94" className="card card-left cardBlock">
      <div className="front">
        <div className="body">
          <div className={`name lined srname${!spell.originalName ? " no-second-name" : ""}`}>
            <div className="name-level">
              <span className="level">{spell.level === 0 ? "T" : spell.level}</span>
              <span className="attributes">
                {spell.concentration ? "K" : ""}
                {spell.ritual ? "R" : ""}
              </span>
            </div>
            <div className={`name-first${spell.name.length > 20 ? " small" : ""}`}>{spell.name}</div>
            {spell.originalName && (
              <>
                <hr className="name-separator" />
                <div className={`name-second${spell.originalName.length > 30 ? " small" : ""}`}>{spell.originalName}</div>
              </>
            )}
            <div className="name-suffix">{spell.cardMax > 1 ? `[${spell.cardNumber}/${spell.cardMax}]` : ""}</div>
          </div>
          <ul className="status lined">
            <li>
              <em>vyvolání</em>
              {spell.ritual ? "Rituál / " : ""}
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
              {spell.components.map((c) => componentMap[c]).join(", ")}
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

          {spell.ingredients ? <b className="need">{spell.ingredients}</b> : null}
          <p className="text" dangerouslySetInnerHTML={{ __html: spell.formattedDescription }}></p>
        </div>
        <b className="class srclass">{spell.classes.join(", ")}</b>
        <b className="type srtype">
          {spell.school}
          {/* / {spellSchools[spell.school]} */}
        </b>
      </div>
    </div>
  );
}
