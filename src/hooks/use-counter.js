import { useState, useEffect } from "react";

function useCounter(initialState) {
  const [count, setCounter] = useState(initialState);

  useEffect(() => {
    console.log(count);
  }, [count]);

  const increment = () => setCounter(count + 1);

  return {
    count,
    increment,
  };
}

export default useCounter;
