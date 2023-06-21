import React from "react";
import books from "./books.jpg";
import "./BookShelf.css";

export default function BookShelf() {
  return (
    <div className="BookShelf">
      <img src={books} alt="bookshelf illustration" />
    </div>
  );
}
