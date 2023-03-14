import BookShow from "./BookShow";
import { useContext } from "react";
import booksContext from "../context/bookContext";

function BookList() {
  const { books } = useContext(booksContext);

  return (
    <div className="book-list">
      {books.map((book) => (
        <BookShow key={book.id} book={book} />
      ))}
    </div>
  );
}

export default BookList;
