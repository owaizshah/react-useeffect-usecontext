import produce from "immer";
import Button from "../components/Button";
import { useReducer, useRef, useEffect } from "react";
const INCREMENT_COUNT = "increment";
const DECREMENT_COUNT = "decrement";
const SET_VALUE_TO_ADD = "change_value";
const VALUE_TO_ADD = "add_Value_to_count";

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      // return { ...state, count: state.count + 1 };

      //USED IMMER CAN MODIFY STATE DIRECTLY!
      state.count = state.count + 1;
      return;

    case DECREMENT_COUNT:
      // return {
      //   ...state,
      //   count: state.count - 1,
      // };
      state.count = state.count - 1;
      return;

    case SET_VALUE_TO_ADD:
      // return { ...state, value: action.payload };
      state.value = action.payload;
      return;

    case VALUE_TO_ADD:
      // return { ...state, count: state.count + Number(state.value), value: "" };
      state.count = state.count + Number(state.value);
      state.value = 0;
      return;

    default:
      return state;
  }
};

function CounterPage({ initialState }) {
  // const [count, setCount] = useState(initialState);
  // const [value, setvalue] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const [state, dispatch] = useReducer(produce(reducer), {
    count: initialState,
    value: 0,
  });

  const increment = () => {
    // setCount(count + 1);
    dispatch({
      type: INCREMENT_COUNT,
    });
  };
  const decrement = () => {
    dispatch({ type: DECREMENT_COUNT });
  };

  const handleChange = (e) => {
    // e.preventDefault();
    // setvalue(e.target.value);
    dispatch({
      type: SET_VALUE_TO_ADD,
      payload: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // setCount(count + Number(value));
    // setvalue(0);

    dispatch({ type: VALUE_TO_ADD });
  };

  return (
    <div className="max-w-sm p-4 m-2 border border-gray-300">
      {state.count}
      <div className="flex mt-2 gap-2">
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
      </div>
      <form className="mt-5">
        <label className=" mx-2">Add a Lot</label>
        <input
          type="number"
          className="border border-gray-300 p-1"
          onChange={handleChange}
          value={state.value}
          ref={inputRef}
        />
        <Button onClick={handleSubmit}>Add</Button>
      </form>
    </div>
  );
}

export default CounterPage;
