import React from "react";
import Meanings from "./Meanings";

export default function Results(props) {
  //console.log(props.results);
  if (props.results) {
    return (
      <div className="Results">
        <h2>
          <em>{props.results.word}</em>
        </h2>
        {props.results.meanings.map(function (meanings, index) {
          return (
            <div key={index}>
              <Meanings meanings={meanings} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
