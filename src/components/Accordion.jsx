import { useState } from "react";
import { HiChevronRight, HiChevronDown } from "react-icons/hi";
function Accordion({ items }) {
  const [isExpanded, setisExpanded] = useState(-1);

  const rendered = items.map((item, i) => {
    return (
      <div
        key={item.id}
        onClick={() => setisExpanded(i)}
        className=" cursor-pointer  "
      >
        <div className="flex items-center justify-between border-b border-black p-3 bg-gray-100">
          <h1 className="font-bold capitalize">{item.label}</h1>
          {isExpanded === i ? <HiChevronDown /> : <HiChevronRight />}
        </div>
        <div className="px-3">
          {isExpanded === i && <p className="">{item.content}</p>}
        </div>
      </div>
    );
  });

  return <div className="w-6/12 p-7">{rendered}</div>;
}

export default Accordion;
