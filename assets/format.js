﻿const DAMAGE_TO_CLASS = {
  hromové: "thunder",
  kyselinové: "acid",
  ohnivé: "fire",
  psychické: "psychic",
  bleskové: "lightning",
  jedové: "poison",
  ledové: "frost",
  chladné: "frost",
  silové: "force",
  zářivé: "radiant",
  nekrotické: "necrotic",
  sečné: "slashing",
  bodné: "piercing",
  drtivé: "bludgeoning",
  hromového: "thunder",
  kyselinového: "acid",
  ohnivého: "fire",
  psychického: "psychic",
  bleskového: "lightning",
  jedového: "poison",
  ledového: "frost",
  chladného: "frost",
  silového: "force",
  zářivého: "radiant",
  nekrotického: "necrotic",
  sečného: "slashing",
  bodného: "piercing",
  drtivého: "bludgeoning",
};

const ABILITY_TO_CLASS = {
  Sílu: "strength",
  Síly: "strength",
  Obratnost: "dexterity",
  Obratnosti: "dexterity",
  Odolnost: "constitution",
  Odolnosti: "constitution",
  Inteligenci: "intelligence",
  Inteligence: "intelligence",
  Moudrost: "wisdom",
  Moudrosti: "wisdom",
  Charisma: "charisma",
  Charismu: "charisma",
  Charismatu: "charisma",
};

const HIGHLIGHT_RULES = [
  [
    /(hromové|kyselinové|ohnivé|psychické|bleskové|jedové|ledové|chladné|silové|zářivé|nekrotické|sečné|bodné|drtivé) zranění( \d{1,2}k\d{1,2}( \+ \d+)?)?/g,
    (matcher, text) =>
      text.replaceAll(matcher, (phrase, damageType) => wrapWithElement(phrase, "strong", `class="damage ${DAMAGE_TO_CLASS[damageType]}"`)),
  ],
  [
    /\d{1,2}k\d{1,2}( \+ \d+)? (hromového|kyselinového|ohnivého|psychického|bleskového|jedového|ledového|chladného|silového|zářivého|nekrotického|sečného|bodného|drtivého) zranění/g,
    (matcher, text) =>
      text.replaceAll(matcher, (phrase, _, damageType) => wrapWithElement(phrase, "strong", `class="damage ${DAMAGE_TO_CLASS[damageType]}"`)),
  ],
  [
    /nevýhodou|nevýhodu|výhodou|výhodu/g,
    (matcher, text) =>
      text.replaceAll(matcher, (phrase) => wrapWithElement(phrase, "strong", `class="${phrase.startsWith("ne") ? "disadvantage" : "advantage"}"`)),
  ],
  [/\d{1,2}k\s?\d{1,2}/g, "strong"],
  [/útok na dálku|útok zbraní na blízko|dotknout|útok na blízko kouzlem|utrpí/g, "strong"],
  [/(záchranném hodu|záchranný hod) na (Sílu|Obratnost|Odolnost|Inteligenci|Moudrost|Charismu|Charisma)/g, "strong"],
  [/(ověření|ověřením)( tvého)? (Síly|Obratnosti|Odolnosti|Inteligence|Moudrosti|Charismatu)/g, "strong"],
  [
    /Zranění( tohoto)?( kouzla)?(, způsobené kouzlem,)? se zvýší .+\.$/,
    (matcher, text) =>
      text.replace(
        matcher,
        (sentence) =>
          `<br>${wrapWithElement(
            sentence.replaceAll(/\d{1,2}\.( úrovně| úrovni)?/g, (level) => wrapWithElement(level, "strong")),
            "em"
          )}`
      ),
  ],
  [
    /Síly|Sílu|Obratnosti|Obratnost|Odolnosti|Odolnost|Inteligence|Inteligenci|Moudrosti|Moudrost|Charismatu|Charisma|Charismu/g,
    (matcher, text) => text.replaceAll(matcher, (ability) => wrapWithElement(ability, "strong", `class="ability ${ABILITY_TO_CLASS[ability]}"`)),
  ],
];

function wrapWithElement(text, tag, attributes) {
  return `<${tag}${attributes ? ` ${attributes}` : ""}>${text}</${tag}>`;
}

function highlightText(text) {
  let formattedText = text;

  for (const [matcher, formatter] of HIGHLIGHT_RULES) {
    formattedText =
      typeof formatter === "string"
        ? formattedText.replaceAll(matcher, (match) => wrapWithElement(match, formatter))
        : formatter(matcher, formattedText);
  }

  return formattedText;
}
