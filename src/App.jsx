import { useContext, useEffect } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import booksContext from "./context/bookContext";

function App() {
  const { fetchData } = useContext(booksContext);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookCreate />
      <BookList />
    </div>
  );
}

export default App;
