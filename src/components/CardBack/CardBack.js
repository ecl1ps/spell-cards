// @ts-check
import React from "react";
import "./CardBack.css";
import { useConfig } from "../../contexts";

/**
 * @param {{ spell: import("../../types").SpellCard }} spell
 */
export function CardBack({ spell }) {
  const { icons } = useConfig();

  return (
    <div className="card cardBlock card-right flip">
      <div className="backface">
        <div className="body">
          <div className="line">
            <i className="b-lt"></i>
            <i className="b-rt"></i>
            <i className="b-lb"></i>
            <i className="b-rb"></i>
            <b className="level-1">{spell.level === 0 ? "T" : spell.level}</b>
            <b className="level-2">{spell.level === 0 ? "T" : spell.level}</b>
            <i className={`icon-top rpg-Icon${icons.top}`}></i>
            <i className={`icon rpg-Icon${icons.mid}`}></i>
            <i className={`icon-bot rpg-Icon${icons.bot}`}></i>
          </div>
        </div>
      </div>
    </div>
  );
}
