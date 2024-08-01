// @ts-check
import React from "react";
import "./CardBack.css";

export function CardBack({ spell }) {
  return (
    <div className="card cardBlock card-right flip class-2">
      <div className="backface">
        <div className="body">
          <div className="line">
            <i className="b-lt"></i>
            <i className="b-rt"></i>
            <i className="b-lb"></i>
            <i className="b-rb"></i>
            <b className="level-1">{spell.level === 0 ? "T" : spell.level}</b>
            <b className="level-2">{spell.level === 0 ? "T" : spell.level}</b>
            <i className="icon-top rpg-Icon1_41"></i>
            <i className="icon rpg-Icon1_59" title="1_59"></i>
            <i className="icon-bot rpg-Icon1_65"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
