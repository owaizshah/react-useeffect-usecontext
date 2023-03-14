import { useState, useContext } from "react";
import booksContext from "../context/bookContext";
import BookEdit from "./BookEdit";

function BookShow({ book }) {
  const [showEdit, setShowEdit] = useState(false);
  const { deleteBooks } = useContext(booksContext);

  const handleForm = function () {
    setShowEdit(!showEdit);
  };

  let content = <h3>{book.bookName}</h3>;

  if (showEdit) {
    content = <BookEdit book={book} handleForm={handleForm} />;
  }

  return (
    <div className="book-show">
      <div className="action">
        <button className="edit" onClick={() => setShowEdit(!showEdit)}>
          Edit
        </button>
        <button className="delete" onClick={() => deleteBooks(book.id)}>
          Delete
        </button>
      </div>
      <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt="random" />
      {content}
    </div>
  );
}

export default BookShow;
