// @ts-check

import { highlightText } from "./highlightText";

const prefferedTextPerCard = 750;

export function splitSpellsToCards(spells) {
  const cardsData = [];
  for (const spell of spells) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(spell.description.join(""), "text/html").documentElement;

    const description = spell.description
      .map((item) =>
        item
          .replace(/<li>/g, "&nbsp;• ")
          .replace(/<\/li>/g, "<br>")
          .replace(/<\/?(p|ul|em)>/g, "")
          .replace(/<strong>Na vyšších úrovních/g, "<br><strong>Na vyšších úrovních")
      )
      .join("<br>");

    const numCards = Math.ceil(description.length / prefferedTextPerCard);
    let texts = [];
    if (numCards > 1) {
      const maxTextLength = description.length > prefferedTextPerCard * numCards ? Math.ceil(description.length / numCards) : prefferedTextPerCard;

      texts = splitter(description, maxTextLength);
    } else {
      texts = [description];
    }

    texts.map(highlightText).forEach((desc, index) =>
      cardsData.push({
        ...spell,
        formattedDescription: desc,
        cardNumber: index + 1,
        cardMax: texts.length,
      })
    );

    /*for (let i = 0; i < cards.length; i++) {
      const textElement = cards[i].querySelector(".text");
      const needElement = cards[i].querySelector(".need");
      if (needElement) {
        textElement.style.height = 192 - parseInt(window.getComputedStyle(needElement).height, 10) + "px";
      }

      textElement.innerHTML = texts[i] ?? "";
      textElement.classList.remove("smtext");
      //textFit(textElement, { maxFontSize: 10 });
    }
  }*/
  }

  return cardsData;
}

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
