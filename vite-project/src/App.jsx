import { useState } from "react";
import "./App.css";
import Dictionary from "./Dictionary";
import defineIcon from "./Define1.png";

export default function App() {
  return (
    <div className="container">
      <header>
        <img src={defineIcon} alt="Dictionary Icon" className="App-icon" />
        <h1>Vocabulary Builder</h1>
      </header>
      <main>
        <Dictionary />
      </main>
      <footer className="App-footer">Coded by Jessica Kelly</footer>
    </div>
  );
}
