import { useState } from "react";
import "./App.css";
import Dictionary from "./Dictionary";
import defineIcon from "./Define.png";

export default function App() {
  return (
    <div className="container">
      <header>
        <img src={defineIcon} className="img-fluid" />
      </header>
      <main>
        <Dictionary />
      </main>
      <footer className="App-footer">Coded by Jessica Kelly</footer>
    </div>
  );
}
