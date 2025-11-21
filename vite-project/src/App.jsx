import { useState } from "react";
import "./App.css";
import Dictionary from "./Dictionary";
import defineIcon from "./Define1.png";

export default function App() {
  return (
    <div className="container">
      <header>
        <a href="./index.html">
          <img src={defineIcon} alt="Dictionary Icon" className="App-icon" />
        </a>
        <h1>Vocabulary Builder</h1>
      </header>
      <main>
        <Dictionary />
      </main>
      <footer className="App-footer mb-5 ">
        Website designed and coded by{" "}
        <a href="https://github.com/kessjelly">Jessica Kelly Studios</a>.
      </footer>
    </div>
  );
}
