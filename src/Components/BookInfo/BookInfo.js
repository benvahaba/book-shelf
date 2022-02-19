import "./book-info.scss";
import React from "react";
import "../../sass/_base.scss";

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

  return (
    <div className="book-info">
      <div className="book-info__header">
        <div className="close_button">x</div>
      </div>
      <div className="upper_box">
        <img
          className=" books--image"
          src={imageLinks.thumbnail}
          alt="title"
        ></img>
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
