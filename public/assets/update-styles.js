(async () => {
  async function applyStyles() {
    const className = location.pathname.split("/").at(-1).split(".").at(0);

    const colors = await (await fetch("./data/classColors.json")).json();

    const classColors = colors[className];

    const style = document.createElement("style");
    style.id = "style-override";
    style.innerHTML = `
    :root {
        --color-background: ${classColors.background};
        --color-header: ${classColors.header};
        --color-backface: ${classColors.backface};
        --color-backface-border: ${classColors.backfaceBorder ?? classColors.backface};
        --color-backface-symbols: ${classColors.backSymbols};
        --color-separator: ${classColors.separator};
    }
    `;

    document.getElementById("style-override")?.remove();
    document.body.appendChild(style);
  }

  await applyStyles();
})();
