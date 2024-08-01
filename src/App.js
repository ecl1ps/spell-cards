// @ts-check
import React, { useEffect, useState } from "react";
import "./App.css";
import "./Print.css";
import "./Icons.css";
import { Tools } from "./components/Sidebar";
import { Navigation } from "./components/Navigation";
import { Cards } from "./components/Cards";

function App() {
  const [spells, setSpells] = useState();
  useEffect(() => {
    fetch(process.env.PUBLIC_URL + "/spells.json").then(async (response) => {
      const spells = await response.json();

      setSpells(spells);
    });
  }, []);

  if (!spells) return "Loading...";

  return (
    <body className="color-2 cardmode">
      <Navigation />
      <Tools />
      <Cards spells={spells} />
    </body>
  );
}

export default App;
