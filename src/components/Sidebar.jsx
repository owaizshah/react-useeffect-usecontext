import Link from "./Link";
import useNavigation from "../hooks/use-navigation";
import { useState } from "react";

function Sidebar() {
  const links = [
    {
      label: "Dropdown",
      path: "/",
    },
    {
      label: "Button",
      path: "/Button",
    },
    {
      label: "Accordion",
      path: "/Accordion",
    },
    {
      label: "Modal",
      path: "/Modal",
    },
    {
      label: "Table",
      path: "/Table",
    },
    {
      label: "Counter",
      path: "/Counter",
    },
  ];

  const rendered = links.map((link) => {
    return (
      <Link key={link.label} to={link.path}>
        {link.label}
      </Link>
    );
  });
  return (
    <div className="flex flex-col gap-3 ml-4 overflow-x-auto">{rendered}</div>
  );
}

export default Sidebar;
