const DAMAGE_TO_CLASS = {
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

const HIGHLIGHT_RULES = [
  [
    /(hromové|kyselinové|ohnivé|psychické|bleskové|jedové|ledové|chladné|silové|zářivé|nekrotické|sečné|bodné|drtivé) zranění( \d{1,2}k\d{1,2}( \+ \d+)?)?/g,
    (matcher, text) =>
      text.replaceAll(matcher, (phrase, damageType) => wrapWithElement(phrase, "span", `class="damage ${DAMAGE_TO_CLASS[damageType]}"`)),
  ],
  [
    /\d{1,2}k\d{1,2}( \+ \d+)? (hromového|kyselinového|ohnivého|psychického|bleskového|jedového|ledového|chladného|silového|zářivého|nekrotického|sečného|bodného|drtivého) zranění/g,
    (matcher, text) =>
      text.replaceAll(matcher, (phrase, _, damageType) => wrapWithElement(phrase, "span", `class="damage ${DAMAGE_TO_CLASS[damageType]}"`)),
  ],
  [/\d{1,2}k\s?\d{1,2}/g, "strong"],
  [/\d\. či vyšší úrovně/g, "strong"],
  [/(útok na dálku|útok zbraní na blízko|dotknout|útok na blízko kouzlem)/g, "strong"],
  [/(záchranném hodu|záchranný hod) na (Sílu|Obratnost|Odolnost|Inteligenci|Moudrost|Charismu)/g, "strong"],
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
