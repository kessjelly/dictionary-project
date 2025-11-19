import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState({});
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data);
  }

  function handlePhotoResponse(response) {
    setPhotos(response.data.photos);
  }

  function search(event) {
    event.preventDefault();

    const apiKey = "3b0e0f1639296410oabf7a45tcd4001b";
    const apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    const photoApiKey = "3b0e0f1639296410oabf7a45tcd4001b";
    const photoApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${photoApiKey}`;
    axios.get(photoApiUrl).then(handlePhotoResponse);

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
          placeholder="Type your word here..."
        />
        <input type="submit" className="submit-button" />
        <p className="hint">
          Try searching for: sunset, yoga, wine, coding...
        </p>
      </form>

      <Results results={results} />
      <Photos photos={photos}/>
    </div>
  );
}
