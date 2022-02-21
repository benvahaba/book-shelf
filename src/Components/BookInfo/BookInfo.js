import "./book-info.scss";
import React, { useState } from "react";
import "../../sass/base/_base.scss";
import CloseButton from "../CloseButton/CloseButton";
import bookmarkImage from "../../assets/images/bookmarked.png";
import notBookmarkImage from "../../assets/images/not_bookmarked.png";
import * as model from "../../model";

function BookInfo(props) {
  const {
    id,
    title,
    authors,
    categories,
    imageLinks,
    publisher,
    publishedDate,
  } = props.book;
  const [isBookmarked, setIsBookmarked] = useState(model.checkIfBookmarked(id));

  function bookmarkHandler() {
    if (isBookmarked) {
      model.removeFromBookmark(id);
    } else {
      model.addToBookmark(id);
    }
    setIsBookmarked(!isBookmarked);
  }
  return (
    <div className="book-info">
      <div className="book-info__header">
        <img
          onClick={bookmarkHandler}
          className="bookmark"
          src={isBookmarked ? bookmarkImage : notBookmarkImage}
          alt="bookmark"
        ></img>
        <CloseButton close={props.close} id="close_button" />
      </div>
      <div className="upper_box">
        {imageLinks !== undefined && imageLinks.thumbnail !== undefined ? (
          <img
            className=" books--image"
            src={imageLinks.thumbnail}
            alt="title"
          ></img>
        ) : (
          <></>
        )}

        <div className="upper_box__right">
          <p className=" font_size">
            <span className="title">{title}</span>
          </p>
          {authors ? (
            <p className="authors font_size">
              Authors <span>{authors}</span>
            </p>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="lower_box">
        <div className="lower_box__left">
          {publisher ? (
            <p>
              publisher <span>{publisher}</span>
            </p>
          ) : (
            <></>
          )}
          {publishedDate ? (
            <p className="font_size ">
              published at <span>{publishedDate}</span>
            </p>
          ) : (
            <></>
          )}
        </div>
        <div className="lower_box__right">
          {categories ? (
            <p>
              categories <span>{categories}</span>
            </p>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}

export default BookInfo;

// id,
// title,
// authors,
// categories,
// imageLinks,
// publisher,
// publishedDate
