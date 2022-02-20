import React, { useState } from "react";
import BooksListContainer from "../BooksListContainer/BooksListContainer";
import ResaultContainer from "../ResaultContainer/ResaultContainer";
import "./wishlist-page.scss";
import SearchBookCard from "../SearchBookCard/SearchBookCard";

import * as model from "../../model";

function WishlistPage() {
  const [wishlist] = useState(model.state.bookmarkedBooks);

  return (
    <div className="wishlist-page">
      <ResaultContainer>
        <BooksListContainer>{booksListToJSXList(wishlist)}</BooksListContainer>
      </ResaultContainer>
    </div>
  );
  function booksListToJSXList(books) {
    return Array.from(books).map((book) => {
      return (
        <SearchBookCard
          key={book[1].id}
          id={book[1].id}
          title={book[1].title}
          authors={book[1].authors}
          imageLink={
            typeof book[1].imageLinks != "undefined"
              ? book[1].imageLinks.smallThumbnail
              : undefined
          }
        ></SearchBookCard>
      );
    });
  }
}

export default WishlistPage;
