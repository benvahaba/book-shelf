import "./books_list_container.scss";
import React from "react";

function BooksListContainer(props) {
  return <div className="books_list_container">{props.children}</div>;
}

export default BooksListContainer;
