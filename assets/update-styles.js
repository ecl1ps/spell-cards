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
    }
    #print-mode {
        margin: 16px 0;
        font-size: small;
    }

    /*.card-left { display: none;} 
    .card-right { display: block; }*/
    .print-button {
        margin: 16px;
        font-size: small;
    }
    .card .name {
        font-size: 13px;
        display: grid;
        align-content: center;
        align-items: center;
        grid-template:
            "level name1 empty"
            "level separator empty"
            "level name2 count";
        height: 41px;
    }
    .type.srtype {
        font-size: 9px;
    }
    .card.cardBlock, .card.cardBlock .need, .card, .card .need {
        background-color: var(--color-background);
    }
    .card .name.srname {
        background-color: var(--color-header);
    }
    .card.cardBlock .lined, .card.cardBlock .status li.second {
        border-color: var(--color-background);
    }
    @media print {
        .card.card-left, .card.card-right {
            box-shadow: var(--color-background) 0 3px 0px 3px !important
        }
    }
    .card.cardBlock .backface .line, .card.cardBlock .b-lt, .card.cardBlock .b-rt, .card.cardBlock .b-lb, .card.cardBlock .b-rb, .cardBlock .body .b-lt:after, .cardBlock .body .b-rt:after, .cardBlock .body .b-lb:after, .cardBlock .body .b-rb:after, .cardBlock .body .b-lt:before, .cardBlock .body .b-rt:before, .cardBlock .body .b-lb:before, .cardBlock .body .b-rb:before {
        color: var(--color-backface) !important;
        border-color: var(--color-backface-border) !important;
    }
    .card.cardBlock .level-1, .card.cardBlock .level-2, .card.cardBlock .icon, .card.cardBlock .icon-bot, .card.cardBlock .icon-top {
        color: var(--color-backface-symbols) !important;
        border-color: var(--color-backface-symbols) !important;
    }    
    .card.cardBlock .status li em {
        color: black !important;
    }
    .card .class.srclass {
        background-color: var(--color-background);
        z-index: 1;
        padding-right: 3px;
    }
    .name-first {
        grid-area: name1;
        font-size: 14px;
    }
    .name-first.small {
        font-size: 13px;
    }
    .name-second {
        grid-area: name2;
        font-size: 9px;
    }
    .name-second.small {
        font-size: 8px;
    }
    .name-suffix {
        grid-area: count;
        font-size: 7px;
        min-width: 18px;
        align-self: end;
    }
    .name-separator {
        grid-area: separator;
        margin: auto;
        width: 50%;
        border-color: ${classColors.separator};
    }
    .name-level {
        grid-area: level;
    }
    .name-level .level {
        font-size: 18px;
    }
    .name-level .attributes {
        font-size: 8px;
    }
    .status.lined em {
        font-size: 9px;
    }
    .card .text > p {
        padding: 0;
        margin: 0;
    }
    .card .need {
        font-style: normal;
    }
    .card .text {
        line-height: 1em;
        display: block;
        width: 220px;
        height: 192px;
    }
    .card .text * {
        font-size: unset;
    }
    `;

    document.getElementById("style-override")?.remove();
    document.body.appendChild(style);
  }

  await applyStyles();
})();
