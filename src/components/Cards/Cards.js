// @ts-check
import React from "react";
import { usePages } from "./usePages";
import { Page } from "../Page";

export function Cards({ spells }) {
  const pages = usePages(spells, 9);

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
