import { useState } from "react";
import { useContext } from "react";
import booksContext from "../context/bookContext";

function BookCreate() {
  const [title, setTitle] = useState();
  const { createBook } = useContext(booksContext);

  const handleChange = (e) => {
    e.preventDefault();

    setTitle(e.target.value);
  };

  return (
    <div className="book-create">
      <h3>Add a Book</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createBook(title);
          setTitle("");
        }}
      >
        <label>Title:</label>
        <input
          type="text"
          onChange={handleChange}
          value={title}
          className="input"
        />
        <button className="button">Create</button>
      </form>
    </div>
  );
}

export default BookCreate;
