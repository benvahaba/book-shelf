import React from "react";

import "./search_header.scss";

function SearchHeader(props) {
  return <div className="search_header">{props.children}</div>;
}

export default SearchHeader;
