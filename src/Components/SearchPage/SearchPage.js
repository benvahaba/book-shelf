import React, { useContext, useRef, useEffect } from "react";
import "./search-page.scss";
import "../../sass/background--library.scss";
import userNameContext from "../../hooks/context/userNameContext";

import SearchImput from "../SearchInput/SearchInput";
import ResaultContainer from "../ResaultContainer/ResaultContainer";
import H2 from "../H2/H2";
import SearchHeader from "../SearchHeader/SearchHeader";
import * as model from "../../model";

function SearchPage() {
  const [userName] = useContext(userNameContext);
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  function SearchResaulthandle(event) {
    // console.log("handleSearchResault", event.target.value);
    model.searchBook(event.target.value);
  }

  const initialH2Classes = "center_text letter__spacing--small welcome_user";
  return (
    <div className="search-page background--library">
      <SearchHeader>
        <SearchImput
          SearchResaulthandle={SearchResaulthandle}
          inputRef={inputRef}
        />
        <H2 classes={initialH2Classes}>Hi {userName}. search for some books</H2>
      </SearchHeader>
      <ResaultContainer>
        <div className="books_container background_opacity_05">books</div>
        <div className="book_container background_opacity_05">book</div>
      </ResaultContainer>
    </div>
  );
}

export default SearchPage;
