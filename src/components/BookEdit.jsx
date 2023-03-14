import { useState, useContext } from "react";
import booksContext from "../context/bookContext";

function BookEdit({ book, handleForm }) {
  const [title, setTitle] = useState(book.bookName);

  const { editBooks } = useContext(booksContext);

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          editBooks(book.id, title);
          handleForm();
        }}
      >
        <label>Title</label>
        <input
          type="text"
          className="input"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <button className="button is-primary">Save</button>
      </form>
    </div>
  );
}

export default BookEdit;
