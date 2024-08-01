import { createContext, useContext, useState } from "react";

const ConfigurationContext = createContext();

/**
 * @returns {{
 *   icons: { top: string, mid: string, bot: string },
 *   setIcons: ({ top: string, mid: string, bot: string }) => void,
 *   className: string,
 *   setClassName: (string) => void,
 * }}
 */
export const useConfig = () => useContext(ConfigurationContext);

export function ConfigurationContextProvider({ initialClassName, initialIcons, children }) {
  const [className, setClassName] = useState(initialClassName);
  const [icons, setIcons] = useState(initialIcons);
  return (
    <ConfigurationContext.Provider
      value={{
        className,
        setClassName,
        icons,
        setIcons,
      }}
    >
      {children}
    </ConfigurationContext.Provider>
  );
}
