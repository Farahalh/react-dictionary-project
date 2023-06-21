import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    //console.log(apiUrl);
    axios.get(apiUrl).then(handleDictionaryResponse);

    const shecodesApiKey = "980ta46f70b3b386c063344ca8aof7b9";
    let shecodesApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${shecodesApiKey}`;
    axios.get(shecodesApiUrl).then(handleShecodesResponse);
  }

  function handleShecodesResponse(response) {
    //console.log(response.data);
    setPhotos(response.data.photos);
  }

  function handleSubmit(event) {
    event.preventDefault();
    //alert(`Searching for ${keyword} definition`);
    search();
  }

  function handleDictionaryResponse(response) {
    //console.log(response.data[0]);
    setResults(response.data[0]);
  }

  function handleKeyWordChange(event) {
    //console.log(event.target.value);
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h1>What word do you want to look up?</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              onChange={handleKeyWordChange}
              defaultValue={props.defaultKeyword}
            />
          </form>
          <div className="hint">Suggested words: sunset, bike, book...</div>
        </section>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
