// @ts-check
import React from "react";
import { ClassSelector } from "./ClassSelector/ClassSelector";

export function Navigation() {
  return (
    <>
      <ClassSelector />
      <div className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <a href="./" className="navbar-brand">
              Home
            </a>

            <input
              type="text"
              id="searchSpell"
              className="form-control"
              placeholder="Search"
              onkeyup="searchSpell(event);"
              data-container="body"
              data-toggle="popover"
              data-trigger="focus"
              data-placement="bottom"
              data-content="You can search by Name, School, Level or Class.
               You can use + for more options (example: Necr+Burn, 1+3+4)
               "
            />

            <button className="navbar-toggle" type="button" data-toggle="collapse" data-target="#navbar-main">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <button id="toolsbar" className="navbar-toggle" type="button" data-toggle="collapse" data-target="#tools">
              <span className="icon-bar icon-bar-2"></span>
              <span className="icon-bar icon-bar-2"></span>
              <span className="icon-bar icon-bar-2"></span>
            </button>
          </div>
          <div className="navbar-collapse collapse" id="navbar-main">
            <ul className="nav navbar-nav">
              <li className="dropdown active">
                <a href="./bard.html#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
                  Bard <span className="caret"></span>
                </a>
                <ul className="dropdown-menu" role="menu">
                  <li>
                    <a href="./artificer.html">Artificer</a>
                  </li>
                  <li>
                    <a href="./wizard.html">Wizard</a>
                  </li>
                  <li>
                    <a href="./sorcerer.html">Sorcerer</a>
                  </li>
                  <li className="active">
                    <a href="./bard.html">Bard</a>
                  </li>
                  <li>
                    <a href="./cleric.html">Cleric</a>
                  </li>
                  <li>
                    <a href="./druid.html">Druid</a>
                  </li>
                  <li>
                    <a href="./paladin.html">Paladin</a>
                  </li>
                  <li>
                    <a href="./ranger.html">Ranger</a>
                  </li>
                  <li>
                    <a href="./warlock.html">Warlock</a>
                  </li>
                </ul>
              </li>
            </ul>

            <ul className="nav navbar-nav navbar-right">
              <button className="print-button" onClick={() => window.print()}>
                Download/Print PDF
              </button>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
