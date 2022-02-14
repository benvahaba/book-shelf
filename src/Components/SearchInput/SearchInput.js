import React from "react";
import "./search_input.scss";

function SearchImput(props) {
  return (
    <input
      onChange={(event) => {
        props.SearchResaulthandle(event);
      }}
      className="search_input"
      type={"text"}
      ref={props.inputRef}
    >
      {props.children}
    </input>
  );
}

export default SearchImput;
