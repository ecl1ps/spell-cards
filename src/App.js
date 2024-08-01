// @ts-check
import React, { useEffect, useState } from "react";
import "./App.css";
import "./Print.css";
import "./Icons.css";
import { Sidebar } from "./components/Sidebar";
import { Navigation } from "./components/Navigation";
import { Cards } from "./components/Cards";
import { ConfigurationContextProvider } from "./contexts/ConfigurationContext";
import { loadIcons } from "./storage/icons";

function App() {
  const [spells, setSpells] = useState();
  const initialIcons = { top: "1_01", mid: "1_01", bot: "1_01", ...loadIcons() };
  useEffect(() => {
    fetch(process.env.PUBLIC_URL + "/spells.json").then(async (response) => {
      const spells = await response.json();

      setSpells(spells);
    });
  }, []);

  if (!spells) return "Loading...";

  return (
    <ConfigurationContextProvider initialClassName={"kouzelník"} initialIcons={initialIcons}>
      <Navigation />
      <Sidebar />
      <Cards spells={spells} />
    </ConfigurationContextProvider>
  );
}

export default App;
