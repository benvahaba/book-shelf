//scss imports
import "./search-page.scss";
import "../../sass/background--library.scss";
//hooks
import userNameContext from "../../hooks/context/userNameContext";
import React, { useState, useContext, useRef, useEffect } from "react";

//components
import SearchImput from "../SearchInput/SearchInput";
import ResaultContainer from "../ResaultContainer/ResaultContainer";
import H2 from "../H2/H2";
import SearchHeader from "../SearchHeader/SearchHeader";

//js classes
import * as model from "../../model";
import BooksListContainer from "../BooksListContainer/BooksListContainer";
import SearchBookCard from "../SearchBookCard/SearchBookCard";

function SearchPage() {
  const [userName] = useContext(userNameContext);
  const inputRef = useRef(null);
  const [booksList, setBooksList] = new useState([]);
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  function SearchResulthandle(event) {
    model.searchBook(event.target.value, _onResultsFetched);
  }
  function _onResultsFetched() {
    setBooksList(model.state.searchResults);
    console.log("booksList", booksList);
  }
  function getPagesFromArray(books, i, maxBooks) {
    const booksArray = [];
    console.log("books", books);
    for (i; i < maxBooks; i++) {
      // id,
      // title,
      // authors,
      // categories,
      // imageLinks,
      // publisher,
      // publishedDate,
      booksArray.push(
        <SearchBookCard
          key={books[i].id}
          title={books[i].title}
          authors={books[i].authors}
          imageLink={books[i].imageLinks.smallThumbnail}
        ></SearchBookCard>
      );
    }
    return booksArray;
  }

  const initialH2Classes = "center_text letter__spacing--small welcome_user";
  return (
    <div className="search-page">
      <SearchHeader>
        <SearchImput
          SearchResulthandle={SearchResulthandle}
          inputRef={inputRef}
        />
        <H2 classes={initialH2Classes}>Hi {userName}. search for some books</H2>
      </SearchHeader>
      <ResaultContainer>
        <BooksListContainer>
          {getPagesFromArray(booksList, 0, 5)}
        </BooksListContainer>
      </ResaultContainer>
    </div>
  );
}

export default SearchPage;
