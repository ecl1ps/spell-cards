// @ts-check
import React from "react";
import classColorDefs from "./classColorDefs.json";

export function ClassSelector() {
  const className = "wizard"; //location.pathname.split("/").at(-1).split(".").at(0);
  const classColors = classColorDefs[className];

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
        :root {
            --color-background: ${classColors.background};
            --color-header: ${classColors.header};
            --color-backface: ${classColors.backface};
            --color-backface-border: ${classColors.backfaceBorder ?? classColors.backface};
            --color-backface-symbols: ${classColors.backSymbols};
            --color-separator: ${classColors.separator};
        }
        `,
      }}
    ></style>
  );
}
