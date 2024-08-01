// @ts-check
import React, { useCallback, useState } from "react";
import "./Design.css";
import { saveIcons } from "../../storage/icons";
import { useConfig } from "../../contexts";

const iconIds = Array.from(Array(9).keys())
  .map((mainKey) => Array.from(Array(101).keys()).map((subkey) => `${mainKey}_${subkey < 10 ? `0${subkey}` : subkey}`))
  .flat();

export function Design() {
  const { icons, setIcons } = useConfig();
  const [iconsSelectionPositionOpened, setIconsSelectionPositionOpened] = useState(null);
  const onIconChoosing = useCallback(
    (iconPosition) => () => {
      setIconsSelectionPositionOpened(iconPosition);
    },
    []
  );
  const onIconSelected = useCallback(
    (iconId) => () => {
      const newIcons = { ...icons, [String(iconsSelectionPositionOpened)]: iconId };
      saveIcons(newIcons);
      setIcons(newIcons);
      setIconsSelectionPositionOpened(null);
    },
    [iconsSelectionPositionOpened]
  );

  return (
    <>
      <b>Backside Icons</b>
      <div className="icons">
        <i className={`icon rpg-Icon${icons.top}`} title={`Icon ${icons.top}`} onClick={onIconChoosing("top")}></i>
        <i className={`icon rpg-Icon${icons.mid}`} title={`Icon ${icons.mid}`} onClick={onIconChoosing("mid")}></i>
        <i className={`icon rpg-Icon${icons.bot}`} title={`Icon ${icons.bot}`} onClick={onIconChoosing("bot")}></i>
      </div>

      {iconsSelectionPositionOpened && (
        <div className="icons-selection">
          <div className="icons">
            {iconIds.map((iconId) => (
              <i key={iconId} onClick={onIconSelected(iconId)} className={`icon rpg-Icon${iconId}`} title={`Icon ${iconId}`}></i>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
