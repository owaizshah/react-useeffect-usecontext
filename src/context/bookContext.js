import { createContext, useState } from "react";
import axios from "axios";

const booksContext = createContext();

function Provider({ children }) {
  const [books, setBooks] = useState([]);

  const fetchData = async () => {
    const response = await axios.get("http://localhost:3001/books");
    console.log("once only");
    setBooks(response.data);
  };

  const createBook = async (title) => {
    const response = await axios.post("http://localhost:3001/books", {
      bookName: title,
    });

    setBooks((prev) => {
      return [...prev, response.data];
    });
  };

  const deleteBooks = async function (id) {
    const response = await axios.delete(`http://localhost:3001/books/${id}`);

    const updatedlist = books.filter((book) => book.id !== id);

    setBooks(updatedlist);
  };

  const editBooks = async function (id, newTitle) {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      bookName: newTitle,
    });

    const updated = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data };
      }
      return book;
    });
    setBooks(updated);
  };

  const value = {
    books,
    createBook,
    deleteBooks,
    fetchData,
    editBooks,
  };

  return (
    <booksContext.Provider value={value}>{children}</booksContext.Provider>
  );
}
export { Provider };
export default booksContext;
