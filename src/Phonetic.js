import React from "react";

export default function Phonetic(props) {
  console.log(props.phonetic);
  return (
    <div className="Phonetics">
      <a href={props.phonetic.audio} target="_blank">
        Play
      </a>
      <br />
      {props.phonetic.text}
    </div>
  );
}
