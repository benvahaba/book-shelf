export const state = {};

export async function searchBook(text) {
  const data = await fetch(
    "https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor"
  );
  const parsedData = await JSON.parse(data);
  console.log("data", parsedData);
}
