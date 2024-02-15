const run = async () => {
  const className = location.pathname.split("/").at(-1).split(".").at(0);

  const colors = await (await fetch("./data/classColors.json")).json();

  const classColors = colors[className];

  const style = document.createElement("style");
  style.id = "style-override";
  style.innerHTML = `
    /*.card-left { display: none;} .card-right { display: block; }*/
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
    .card.cardBlock, .card.cardBlock .need, .card.class-9, .card.class-9 .need {
        background-color: ${classColors.background} !important;
    }
    /*.card.cardBlock {
        border: 2px solid ${classColors.border};
    }*/
    .card .name.srname {
        background-color: ${classColors.header};
    }
    .card.cardBlock .lined, .card.cardBlock .status li.second {
        border-color: ${classColors.background} !important;
    }
    .card.cardBlock .status li em {
        color: black !important;
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
    .card.cardBlock .backface .line, .card.cardBlock .b-lt, .card.cardBlock .b-rt, .card.cardBlock .b-lb, .card.cardBlock .b-rb, .cardBlock .body .b-lt:after, .cardBlock .body .b-rt:after, .cardBlock .body .b-lb:after, .cardBlock .body .b-rb:after, .cardBlock .body .b-lt:before, .cardBlock .body .b-rt:before, .cardBlock .body .b-lb:before, .cardBlock .body .b-rb:before {
        color: ${classColors.backface} !important;
        border-color: ${classColors.backface} !important;
    }
    .card.cardBlock .level-1, .card.cardBlock .level-2, .card.cardBlock .icon, .card.cardBlock .icon-bot, .card.cardBlock .icon-top {
        color: ${classColors.backSymbols} !important;
        border-color: ${classColors.backSymbols} !important;
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

  const spellNames = {
    ...(await (await fetch("./data/spellNamesCzGrimoire.json")).json()),
    ...(await (await fetch("./data/spellNamesCzOverrides.json")).json()),
  };
  const spellDescriptions = await (
    await fetch("./data/spellDescriptionsCzGrimoire.json")
  ).json();
  const spellIngredients = await (
    await fetch("./data/spellIngredientsCzGrimoire.json")
  ).json();

  const spellNameEnFix = {
    "geas [obligation or prohibition]": "geas",
  };

  const translations = await (
    await fetch("./data/miscTranslationsCz.json")
  ).json();

  const schools = {
    Illusion: "Iluze",
    Necromancy: "Nekromancie",
    Conjuration: "Vyvolávání",
    Enchantment: "Očarování",
    Transmutation: "Transmutace",
    Divination: "Věštění",
    Abjuration: "Vymítání",
    Evocation: "Zaklínání",
  };

  const translationRegexes = [
    {
      regex: /^\d+ feet$/,
      replacer: (text) =>
        text.replace(/(\d+) feet/, (matched, feet) => {
          const yards = feet / 5;
          return `${yards} ${yards == 1 ? "sáh" : yards < 5 ? "sáhy" : "sáhů"}`;
        }),
    },
    {
      regex: /^\w+\s+cantrip\s*$/,
      replacer: (text) =>
        text.replace(/^(\w+)\s+cantrip/, (matched, school) => {
          return `${schools[school]} / ${school}`;
        }),
    },
    {
      regex: /^\d\w{2}[-\s]level \w+\s*$/,
      replacer: (text) =>
        text.replace(/^(\d)\w{2} level (\w+)/, (matched, level, school) => {
          return `${schools[school]} / ${school}`;
        }),
    },
    {
      regex: /^Artificer \(.+\)$/,
      replacer: (text) =>
        text.replace(/^Artificer \((.+)\)$/, (matched, datadisc) => {
          return `Divutepec (${datadisc})`;
        }),
    },
    {
      regex: /^Wizard \(.+\)$/,
      replacer: (text) =>
        text.replace(/^Wizard \((.+)\)$/, (matched, datadisc) => {
          return `Kouzelník (${datadisc})`;
        }),
    },
  ];

  const getTextNodes = (node) =>
    [...node.childNodes].filter((child) => child.nodeType === Node.TEXT_NODE);

  const translate = (node) => {
    if (node.textContent && translations[node.textContent]) {
      node.textContent = translations[node.textContent];
    } else {
      translationRegexes
        .filter(({ regex }) => regex.test(node.textContent))
        .forEach(
          ({ replacer }) => (node.textContent = replacer(node.textContent))
        );
    }
  };
  [
    ...document.querySelector(".cardlist").querySelectorAll(".name.srname"),
  ].forEach((el) => {
    const isRitual = el.textContent.toLowerCase().includes(" (ritual)");
    const isConcentration =
      el.parentElement.textContent.includes("Concentration");
    const multipleCardsSuffix = / \[\d\/\d\]/.test(el.textContent)
      ? el.textContent.replace(/.+(\[\d\/\d\])/, "$1")
      : "";
    const rawSpellName = el.textContent
      .toLowerCase()
      .replace(" (ritual)", "")
      .replace(/ \[\d\/\d\]/, "")
      .trim();
    const spellName = spellNameEnFix[rawSpellName] ?? rawSpellName;
    if (!spellNames[spellName]) {
      console.log("No translation for spell name: " + rawSpellName);
    }
    const translatedSpellName = spellNames[spellName] || spellName;
    const typeText =
      el.parentElement.parentElement.querySelector(".srtype").textContent;
    const level = typeText.includes("cantrip") ? "T" : typeText.substring(0, 1);

    el.innerHTML = `
            <div class="name-level">
                <span class="level">${level}</span>
                <span class="attributes">${isRitual ? "R" : ""}${
      isConcentration ? "K" : ""
    }</span>
            </div>
            <div class="name-first${
              translatedSpellName.length > 20 ? " small" : ""
            }">${translatedSpellName}</div>
            <hr  class="name-separator">
            <div class="name-second${
              spellName.length > 30 ? " small" : ""
            }">${spellName}</div>
            <div class="name-suffix">${multipleCardsSuffix}</div>`;

    if (isRitual) {
      const castTimeElement =
        el.parentElement.querySelector(".status.lined > li").childNodes[1];
      castTimeElement.textContent = `Rituál / ${castTimeElement.textContent}`;
    }
  });

  [...document.querySelector(".cardlist").querySelectorAll("*")].forEach(
    (el) => {
      getTextNodes(el).forEach((node) => translate(node));
    }
  );

  [...document.querySelectorAll(".front")].forEach((card) => {
    const spellName = card.querySelector(".name-first").textContent;
    const ingredients = spellIngredients[spellName];
    if (!ingredients) {
      return;
    }
    card.querySelector(".need").textContent = ingredients;
  });

  const cardsPerSpell = [...document.querySelectorAll(".front")].reduce(
    (acc, card) => {
      const spellName = card.querySelector(".name-first").textContent;
      acc[spellName] = [...(acc[spellName] ?? []), card];
      return acc;
    },
    {}
  );

  function splitter(str, l) {
    var strs = [];
    while (str.length > l) {
      var pos = str.substring(0, l).lastIndexOf(" ");
      pos = pos <= 0 ? l : pos;
      strs.push(str.substring(0, pos));
      var i = str.indexOf(" ", pos) + 1;
      if (i < pos || i > pos + l) i = pos;
      str = str.substring(i);
    }
    strs.push(str);
    return strs;
  }

  const prefferedTextPerCard = 750;

  Object.entries(cardsPerSpell).forEach(([spellName, cards]) => {
    const translatedContentItems = spellDescriptions[spellName];
    if (!translatedContentItems) {
      console.log("No description translation for: " + spellName);
      return;
    }

    const description = translatedContentItems
      .map((item) =>
        item
          .replace(/<li>/g, "&nbsp;• ")
          .replace(/<\/li>/g, "<br>")
          .replace(/<\/?(p|ul|em)>/g, "")
          .replace(
            /<strong>Na vyšších úrovních/g,
            "<br><strong>Na vyšších úrovních"
          )
      )
      .join("<br>");

    const maxTextLength =
      description.length > prefferedTextPerCard * cards.length
        ? Math.ceil(description.length / cards.length)
        : prefferedTextPerCard;

    const texts = splitter(description, maxTextLength);
    if (texts.length > cards.length) {
      texts[texts.length - 2] += " " + texts[texts.length - 1];
    }

    for (let i = 0; i < cards.length; i++) {
      const textElement = cards[i].querySelector(".text");
      const needElement = cards[i].querySelector(".need");
      if (needElement) {
        textElement.style.height =
          192 -
          parseInt(window.getComputedStyle(needElement).height, 10) +
          "px";
      }

      textElement.innerHTML = texts[i]; //description.substring(i * maxTextLength, (i + 1) * maxTextLength);
      textElement.classList.remove("smtext");
      textFit(textElement, { maxFontSize: 10 });
    }
  });

  const cardsLeft = [...document.querySelectorAll(".card.card-left")];
  const cardsRight = [...document.querySelectorAll(".card.card-right")];
  if (cardsLeft.length !== cardsRight.length) {
    throw new Error(
      "There is no same number of fronts to the backs of the cards!"
    );
  }

  const onLeftCardClick = (event) => {
    event.currentTarget.classList.toggle("select");
    document
      .querySelector(`#${event.currentTarget.id}-back`)
      .classList.toggle("select");

    document.body.classList.add("editing");

    if (!document.querySelectorAll(".select").length) {
      document.body.classList.remove("editing");
      return false;
    }
  };

  cardsLeft.forEach((left, index) => {
    left.addEventListener("click", onLeftCardClick);
    cardsRight[index].id = `${left.id}-back`;
  });
};

run();
