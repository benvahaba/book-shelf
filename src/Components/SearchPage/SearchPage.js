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

  const initialH2Classes = "center_text letter__spacing--small welcome_user";
  return (
    <div className="search-page background--library">
      <SearchHeader>
        <SearchImput
          SearchResulthandle={SearchResulthandle}
          inputRef={inputRef}
        />
        <H2 classes={initialH2Classes}>Hi {userName}. search for some books</H2>
      </SearchHeader>
      <ResaultContainer>
        <BooksListContainer>
          {booksList.map((book) => {
            // id,
            // title,
            // authors,
            // categories,
            // imageLinks,
            // publisher,
            // publishedDate,
            console.log("image", book.imageLinks[0]);
            console.log("book", book);
            return (
              <SearchBookCard
                key={book.id}
                title={book.title}
                authors={book.authors}
                imageLink={book.imageLinks.smallThumbnail}
              ></SearchBookCard>
            );
          })}
        </BooksListContainer>
      </ResaultContainer>
    </div>
  );
}

export default SearchPage;
