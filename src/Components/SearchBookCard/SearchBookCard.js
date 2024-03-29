import "./search_book_card.scss";
import "../../sass/base/_base.scss";
import React from "react";

function SearchBookCard(props) {
  return (
    <div
      className="search_book_card"
      onClick={() => {
        props.onBookClickedHandler(props.id);
      }}
    >
      {props.imageLink !== undefined ? (
        <img
          className="image_style"
          src={props.imageLink}
          alt="props.title"
        ></img>
      ) : (
        <></>
      )}

      {props.title.length > 20 ? (
        <h3 className=" p--bold card--info">
          {props.title.slice(0, 20) + "..."}
        </h3>
      ) : (
        <h3 className="p--bold card--info">{props.title}</h3>
      )}
      <p className="p--wight500 card--info">{props.authors}</p>
    </div>
  );
}

export default SearchBookCard;
