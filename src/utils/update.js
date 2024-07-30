(async () => {
  function translatedDescriptionAndResize() {
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

    const cardsPerSpell = [...document.querySelectorAll(".front")].reduce((acc, card) => {
      const spellName = card.querySelector(".name-first").textContent;
      acc[spellName] = [...(acc[spellName] ?? []), card];
      return acc;
    }, {});

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
            .replace(/<strong>Na vyšších úrovních/g, "<br><strong>Na vyšších úrovních")
        )
        .join("<br>");

      let texts = [];
      if (cards.every((card) => card.querySelector(".name-suffix").textContent)) {
        const maxTextLength =
          description.length > prefferedTextPerCard * cards.length ? Math.ceil(description.length / cards.length) : prefferedTextPerCard;

        texts = splitter(description, maxTextLength);
      } else {
        texts = cards.map((card) => description);
      }
      if (texts.length > cards.length) {
        texts[texts.length - 2] += " " + texts[texts.length - 1];
      }

      texts = texts.map(highlightText);

      for (let i = 0; i < cards.length; i++) {
        const textElement = cards[i].querySelector(".text");
        const needElement = cards[i].querySelector(".need");
        if (needElement) {
          textElement.style.height = 192 - parseInt(window.getComputedStyle(needElement).height, 10) + "px";
        }

        textElement.innerHTML = texts[i] ?? "";
        textElement.classList.remove("smtext");
        textFit(textElement, { maxFontSize: 10 });
      }
    });
  }

  function fixBackSidesWhenSelectingSpecific() {
    const cardsLeft = [...document.querySelectorAll(".card.card-left")];
    const cardsRight = [...document.querySelectorAll(".card.card-right")];
    if (cardsLeft.length !== cardsRight.length) {
      throw new Error("There is no same number of fronts to the backs of the cards!");
    }

    const onLeftCardClick = (event) => {
      event.currentTarget.classList.toggle("select");
      document.querySelector(`#${event.currentTarget.id}-back`).classList.toggle("select");

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
  }

  function togglePrintPreview() {
    const cardList = document.querySelector(".cardlist");

    const br = document.querySelector(".cardlist > br");
    const separator = document.querySelector(".cardlist > .separator");
    document.querySelectorAll(".cardlist > br, .cardlist > .separator, .card:not(.select)").forEach((e) => e.remove());

    const selectedCardsLeft = [...document.querySelectorAll(".card.card-left.select")];
    const selectedCardsRight = [...document.querySelectorAll(".card.card-right.select")];

    document.querySelectorAll(".card.select").forEach((e) => e.remove());

    const pageCount = Math.ceil(selectedCardsLeft.length / 9);

    for (let pageIndex = 0; pageIndex < pageCount; pageIndex++) {
      const maxCardIndexOnPage = Math.min((pageIndex + 1) * 9, selectedCardsLeft.length);
      const isLastPage = pageIndex + 1 == pageCount;

      for (let cardIndex = pageIndex * 9; cardIndex < maxCardIndexOnPage; cardIndex++) {
        cardList.insertAdjacentElement("beforeend", selectedCardsLeft[cardIndex]);
      }

      cardList.insertAdjacentElement("beforeend", br.cloneNode());
      cardList.insertAdjacentElement("beforeend", separator.cloneNode(true));

      for (let cardIndex = pageIndex * 9; cardIndex < maxCardIndexOnPage; cardIndex++) {
        cardList.insertAdjacentElement("beforeend", selectedCardsRight[cardIndex]);
      }
      cardList.insertAdjacentElement("beforeend", br.cloneNode());
      if (!isLastPage) {
        cardList.insertAdjacentElement("beforeend", separator.cloneNode(true));
      }
    }
  }

  function addPrintPreview() {
    document.querySelector("#print-mode").addEventListener("click", togglePrintPreview);
  }

  translatedDescriptionAndResize();
  fixBackSidesWhenSelectingSpecific();
  addPrintPreview();
})();
