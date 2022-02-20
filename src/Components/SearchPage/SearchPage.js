//scss imports
import "./search-page.scss";
import "../../sass/background--library.scss";
//hooks imports
import userNameContext from "../../hooks/context/userNameContext";
import React, { useState, useContext, useRef, useEffect } from "react";

//components
import SearchImput from "../SearchInput/SearchInput";
import ResaultContainer from "../ResaultContainer/ResaultContainer";
import H2 from "../H2/H2";
import Header from "../SearchHeader/SearchHeader";

//js classes
import * as model from "../../model";
import BooksListContainer from "../BooksListContainer/BooksListContainer";
import SearchBookCard from "../SearchBookCard/SearchBookCard";
import * as config from "../../utils/config"; //todo as Oz how to import some
import PaginationContainer from "../PaginationContainer/PaginationContainer";
import PageNumber from "../PageNumber/PageNumber";
import DialogBox from "../DialogBox/DialogBox";
import BookInfo from "../BookInfo/BookInfo";

function SearchPage() {
  //hooks declarations
  const [userName] = useContext(userNameContext);
  const inputRef = useRef(null);
  const [booksList, setBooksList] = new useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [numberOfResults, setNumberOfResults] = useState(0);
  const [numberOfPages, setNumberOfPages] = useState(1);

  const [openDialog, setOpenDialog] = useState(false);
  const [currentBook, setCurrentBook] = useState(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    setNumberOfResults(booksList.length);
  }, [booksList]);

  useEffect(() => {
    let pagesAmount = getNumberOfPages(
      numberOfResults,
      config.MAX_RESULTS_PER_PAGE
    );
    pagesAmount === 0 ? setNumberOfPages(0) : setNumberOfPages(pagesAmount);
  }, [numberOfResults]);

  useEffect(() => {
    if (currentBook !== null) setOpenDialog(true);
  }, [currentBook]);

  // varibles
  const initialH2Classes = "center_text letter__spacing--small welcome_user";

  //callbacks
  function SearchResulthandler(event) {
    setPageNum(1);
    model.searchBook(event.target.value, _onResultsFetched);
  }
  function _onResultsFetched() {
    setBooksList(model.state.searchResults);
  }
  function onBookClickedHandler(bookId) {
    setCurrentBook(bookId);
  }
  function onDialogBoxCloseHandler(e) {
    if (e.target.id === "dialog_box" || e.target.id === "close_button") {
      setCurrentBook(null);

      setOpenDialog(false);
    }
  }

  //functions
  function getNumberOfPages(numberOfResults, maxResults) {
    return Math.ceil(numberOfResults / maxResults);
  }

  function booksListToJSXList(books) {
    return books.map((book) => {
      return (
        <SearchBookCard
          key={book.id}
          id={book.id} // todo ask Oz if i can access the key from inside the component
          title={book.title}
          authors={book.authors}
          imageLink={
            typeof book.imageLinks != "undefined"
              ? book.imageLinks.smallThumbnail
              : undefined
          }
          onBookClickedHandler={onBookClickedHandler}
        ></SearchBookCard>
      );
    });
  }

  function _getBooksByPageNum(page = 1) {
    const start = (page - 1) * config.MAX_RESULTS_PER_PAGE;
    const end = page * config.MAX_RESULTS_PER_PAGE;
    return booksList.slice(start, end);
  }
  function pagePressedHandler(page) {
    setPageNum(page);
  }

  return (
    <div className="search-page">
      {openDialog ? (
        <DialogBox id={"dialog_box"} close={onDialogBoxCloseHandler}>
          <BookInfo
            close={onDialogBoxCloseHandler}
            book={booksList.find((book) => book.id === currentBook)}
          />
        </DialogBox>
      ) : (
        <></>
      )}
      <Header headerColor="background__color--primary">
        <SearchImput
          SearchResulthandler={SearchResulthandler}
          inputRef={inputRef}
        />
        <H2 classes={initialH2Classes}>Hi {userName}. search for some books</H2>
      </Header>
      <ResaultContainer>
        <BooksListContainer>
          {booksListToJSXList(_getBooksByPageNum(pageNum))}
        </BooksListContainer>
        <PaginationContainer>
          {Array.apply(null, { length: numberOfPages }).map((_, i) => {
            return (
              <PageNumber
                pressedPageNum={pageNum}
                pageIterator={i + 1}
                key={i + 1}
                pagePressedHandler={pagePressedHandler}
              ></PageNumber>
            );
          })}
        </PaginationContainer>
      </ResaultContainer>
    </div>
  );
}

export default SearchPage;
