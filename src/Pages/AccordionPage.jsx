import { useState } from "react";
import Accordion from "../components/Accordion";

function AccordionPage() {
  const [items, setItems] = useState([
    {
      id: "123d",
      label: "can i use react in my project?",
      content:
        "yes you can use that langauge yes you can use that langauge yes you can use that langauge",
    },
    {
      id: "12333d",
      label: "can i use java script in my project?",
      content:
        "yes you can use that langauge yes you can use that langauge yes you can use that langauge",
    },

    {
      id: "123dcc",
      label: "can i use Css in my project?",
      content:
        "yes you can use that langauge yes you can use that langauge yes you can use that langauge",
    },
  ]);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <Accordion items={items} />
    </div>
  );
}

export default AccordionPage;
