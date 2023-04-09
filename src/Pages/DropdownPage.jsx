import DropDown from "../components/DropDown";
import { useState } from "react";

function DropdownPage() {
  const [value, setValue] = useState(null);

  const options = [
    { label: "Red", value: "Red", id: "1243" },
    { label: "Blue", value: "Blue", id: "1221" },
    { label: "Green", value: "Green", id: "443" },
  ];

  const handleClick = (label) => {
    setValue(label);
  };

  return (
    <div className="flex">
      <DropDown options={options} onChange={handleClick} value={value} />
    </div>
  );
}

export default DropdownPage;
