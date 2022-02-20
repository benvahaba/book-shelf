import * as requestGenerator from "./utils/requestGenerator";

export const state = {
  searchResults: [],
  bookmarkedBooks: new Map(),
};

export function checkIfBookmarked(id) {
  return state.bookmarkedBooks.has(id);
}
export function addToBookmark(id) {
  state.bookmarkedBooks.set(
    id,
    state.searchResults.find((book) => book.id === id)
  );
}
export function removeFromBookmark(id) {
  state.bookmarkedBooks.delete(id);
}

export async function searchBook(text, onFinished) {
  //if the search is empty. empty the list and avoid 400 from server

  try {
    if (!text.length) {
      state.searchResults = [];
      return;
    }

    const data = await fetch(requestGenerator.buildRequest(text));
    const parsedData = await data.json();
    _rawDataToBooksList(parsedData);
  } catch (e) {
    console.log(e);
  } finally {
    onFinished();
  }
  function _rawDataToBooksList(rawBooksArray) {
    if (rawBooksArray.length === 0) console.log("no books");
    console.log("model", rawBooksArray);

    state.searchResults = state.searchResults = rawBooksArray.items.map(
      (book) => {
        const {
          id,
          volumeInfo: {
            title,
            authors,
            categories,
            imageLinks,
            publisher,
            publishedDate,
          },
        } = book;

        return {
          id,
          title,
          authors,
          categories,
          imageLinks,
          publisher,
          publishedDate,
        };
      }
    );
  }
}
