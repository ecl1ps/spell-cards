// @ts-check
import React from "react";
import { CardFront } from "./CardFront";
import { CardBack } from "./CardBack";

export function Page({ spells }) {
  return (
    <>
      {spells.map((spell) => (
        <CardFront key={spell.name} spell={spell} />
      ))}
      {/* @ts-ignore */}
      <br clear="all" />
      <div className="noprint separator nomobile"></div>
      {spells.map((spell) => (
        <CardBack key={`${spell.name}-back`} spell={spell} />
      ))}
      {/* @ts-ignore */}
      <br clear="all" />
      <div className="noprint separator nomobile"></div>
    </>
  );
}
