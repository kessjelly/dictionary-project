import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState({});

  function handleResponse(response) {
    setResults(response.data);
  }

  function search(event) {
    event.preventDefault();

    const apiKey = "3b0e0f1639296410oabf7a45tcd4001b";
    const apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search} className="SearchArea">
        <input
          type="search"
          className="input-form"
          value={keyword}
          onChange={handleKeywordChange}
        />
        <input type="submit" className="submit-button" />
        <p className="hint">
          Try searching for: sunset, yoga, wine, coding...
        </p>
      </form>

      <Results results={results} />
    </div>
  );
}
