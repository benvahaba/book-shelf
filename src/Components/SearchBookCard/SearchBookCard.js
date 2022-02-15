import "./search_book_card.scss";
import "../../sass/_base.scss";
import React from "react";

function SearchBookCard(props) {
  return (
    <div className="search_book_card">
      <img className="image_style" src={props.imageLink} alt="book image"></img>
      <h3 className="p--medium p--bold card--info">{props.title}</h3>
      <p className="p--small p--wight500 card--info">{props.authors}</p>
    </div>
  );
}

export default SearchBookCard;
