import React, { useState } from "react";
import Results from "./Results";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    //console.log(apiUrl);
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    //alert(`Searching for ${keyword} definition`);
    search();
  }

  function handleResponse(response) {
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
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
