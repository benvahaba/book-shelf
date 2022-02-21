import React from "react";

import "./search_header.scss";
import "../../sass/base/_base.scss";

function SearchHeader(props) {
  const classes = ["search_header"];
  classes.push(props.headerColor);
  return <div className={classes.join(" ")}>{props.children}</div>;
}

export default SearchHeader;
