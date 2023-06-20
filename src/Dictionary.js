import React, { useState } from "react";
import Results from "./Results";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(null);
  let [results, setResults] = useState(null);

  function search(event) {
    event.preventDefault();
    //alert(`Searching for ${keyword} definition`);

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
   //console.log(apiUrl);
    axios.get(apiUrl).then(handleResponse);
  }

  function handleResponse(response) {
    //console.log(response.data[0]);
    setResults(response.data[0]);
  }

  function handleKeyWordChange(event) {
   //console.log(event.target.value);
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          autoFocus={true}
          onChange={handleKeyWordChange}
          className="Search-field"
        />
        <input type="submit" value="Search" className="Search-button" />
      </form>
      <Results results={results}/>
    </div>
  );
}
