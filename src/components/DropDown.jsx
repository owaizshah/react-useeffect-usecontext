import { useState, useEffect, useRef } from "react";
import { GoChevronDown } from "react-icons/go";

function DropDown({ options, onChange, value }) {
  const [isOpen, setIsOpen] = useState(false);

  const el = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (!el.current) return;

      if (!el.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handler, true);

    return () => {
      document.removeEventListener("click", handler, true);
    };
  }, []);

  const handleSubmitClick = (label) => {
    onChange(label);
    setIsOpen(false);
  };

  const rendered = options.map((option) => {
    return (
      <li
        className="border p-1 w-full hover:bg-teal-100 flex items-center justify-center"
        key={option.id}
        onClick={() => handleSubmitClick(option)}
      >
        {option.label}
      </li>
    );
  });

  return (
    <div ref={el} className="w-32 border rounded cursor-pointer shadow">
      <div
        className="pb-1 border p-2 flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-md font-semibold 	">
          {" "}
          {value?.label || "Selected.."}
        </h2>
        <GoChevronDown />
      </div>
      <ul className="">{isOpen ? rendered : null}</ul>
    </div>
  );
}

export default DropDown;
