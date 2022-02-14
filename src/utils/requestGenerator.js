export const API_KEY = "&key=AIzaSyCGYE7-_IjJBBtDKjMUUQfwPDkgiS8GrOQ";
export const REQUEST_PREFIX = "https://www.googleapis.com/books/v1/volumes?q=";

export const MAX_RESULTS = "&maxResults=20";

export function buildRequest(book) {
  return REQUEST_PREFIX + book + MAX_RESULTS + API_KEY;
}
