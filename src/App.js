import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary</header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          This project was coded by {""}
          <a href="https://farahalh.com/" target="_blank" rel="noreferrer">
            Farah Alhaddad
          </a>
          {""} and is open-sourced on {""}
          <a
            href="https://github.com/Farahalh"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
