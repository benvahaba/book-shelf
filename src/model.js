import * as requestGenerator from "./utils/requestGenerator";

export const state = { searchResults: [] };

export async function searchBook(text) {
  try {
    const data = await fetch(requestGenerator.buildRequest(text));
    const parsedData = await data.json();
    _rawDataToBooksList(parsedData);
    // console.log("data", parsedData);
  } catch (e) {
    console.log(e);
  }
  function _rawDataToBooksList(rawBooksArray) {
    state.searchResults = rawBooksArray.items.map((book) => {
      const { id, volumeInfo.title } = book;
      console.log(id, volumeInfo);
    });
  }
}
