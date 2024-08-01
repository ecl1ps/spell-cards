// @ts-check
import React from "react";
import { CardFront } from "./CardFront";
import { CardBack } from "./CardBack";

/**
 * @param {{ spells: import("../types").SpellCard[] }} spells
 */
export function Page({ spells }) {
  return (
    <>
      {spells.map((spell) => (
        <CardFront key={`${spell.name}-${spell.cardNumber}`} spell={spell} />
      ))}
      {/* @ts-ignore */}
      <br clear="all" />
      <div className="noprint separator nomobile"></div>
      {spells.map((spell) => (
        <CardBack key={`${spell.name}-${spell.cardNumber}-back`} spell={spell} />
      ))}
      {/* @ts-ignore */}
      <br clear="all" />
      <div className="noprint separator nomobile"></div>
    </>
  );
}
