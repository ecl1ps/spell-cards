// @ts-check
import React from "react";
import { Controls } from "./Controls";
import { Design } from "./Design";
import "./Sidebar.css";

export function Sidebar() {
  return (
    <div className="sidebar">
      <div className="tools">
        <Controls />
        <Design />
      </div>
    </div>
  );
}
