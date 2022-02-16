import "./pagination_container.scss";
import React from "react";

function PaginationContainer(props) {
  return <div className="pagination_container">{props.children}</div>;
}

export default PaginationContainer;
