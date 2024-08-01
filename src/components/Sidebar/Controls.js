// @ts-check
import React from "react";
import "./Controls.css";

export function Controls() {
  return (
    <>
      <button className="print-button" onClick={() => window.print()}>
        Vygenerovat PDF
      </button>
      <button id="print-mode">Prepare for Selective Print</button>
    </>
  );
}
