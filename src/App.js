import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Dictionary from "./Dictionary";
import "./App.css";
import BookShelf from "./BookShelf";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <BookShelf />
        </header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="App-footer">
          <div>
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
          </div>
          <div>
            <a
              href="https://www.freepik.com/free-vector/flat-colorful-books-plants-stand-bookshelf_37476481.htm#page=2&query=book%20shelf&position=9&from_view=keyword&track=ais"
              target="_blank"
              rel="noreferrer"
            >
              Top page image by redgreystock
            </a>{" "}
            on Freepik
          </div>
        </footer>
      </div>
    </div>
  );
}
