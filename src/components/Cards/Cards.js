// @ts-check
import React from "react";
import { usePages } from "./usePages";
import { Page } from "../Page";
import { splitSpellsToCards } from "../../utils/splitSpellsToCards";
import { applyFilters } from "./applyFilters";

export function Cards({ spells }) {
  const filteredSpells = applyFilters(spells, { classes: ["čaroděj"], levels: [0, 1, 9] });
  const spellsByCard = splitSpellsToCards(filteredSpells);
  const pages = usePages(spellsByCard, 9);

  if (!pages) {
    return null;
  }

  return (
    <div id="myCanvas" className="container pages">
      <div className="cardlist">
        {pages.map((page, index) => (
          <Page key={index} spells={page} />
        ))}
      </div>
    </div>
  );
}
