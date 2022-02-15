import * as requestGenerator from "./utils/requestGenerator";

export const state = { searchResults: [] };

export async function searchBook(text, onFinished) {
  try {
    const data = await fetch(requestGenerator.buildRequest(text));
    const parsedData = await data.json();
    _rawDataToBooksList(parsedData);
    console.log("data", state.searchResults);
    onFinished();
  } catch (e) {
    console.log(e);
  }
  function _rawDataToBooksList(rawBooksArray) {
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
