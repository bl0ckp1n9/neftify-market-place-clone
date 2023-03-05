import Link from "next/link";
import Button from "../button";
import { Bars3Icon, MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { useContext, useEffect, useState } from "react";
import { ThemeDispatchContext, ThemeStateContext } from "@/reducer/theme";
import { useTheme } from "next-themes";

// Menu List
type MenuInterface = {
  direction: "row" | "col";
};

function Menu({ direction }: MenuInterface) {
  const directionVariants: { [key: string]: string } = {
    row: "flex-row space-x-3",
    col: "flex-col w-full  ",
  };
  const menuList: Array<{ title: string; path: string }> = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Explore",
      path: "/explre",
    },
    {
      title: "Items",
      path: "/items",
    },
  ];
  return (
    <ul className={`flex text-gray-500 ${directionVariants[direction]}`}>
      {menuList.map((menuItem, index) => (
        <li
          key={index}
          className={`${direction == "col" ? "border-b-2 py-2 " : undefined}`}
        >
          <Link href={menuItem.path}>{menuItem.title}</Link>
        </li>
      ))}
    </ul>
  );
}

// Menu Accordion
type MenuAccordionInterface = {
  show: boolean;
};
function MenuAccordion({ show }: MenuAccordionInterface) {
  return (
    <div
      className={`container absolute flex justify-center z-40 bg-white py-8 ${
        show ? null : "hidden"
      }`}
    >
      <div className="row w-full flex justify-center">
        <Menu direction="col" />
      </div>
    </div>
  );
}

// Main
export default function Navbar() {
  const [accordionShow, setAccordionShow] = useState(false);
  const { theme, setTheme } = useTheme();
  const onHandlingTheme = () => {
    if (setTheme) {
      const mode = theme === "light" ? "dark" : "light";
      setTheme(mode);
    }
  };
  const onHandleAccordion = () => {
    setAccordionShow(!accordionShow);
  };
  return (
    <header className="shadow-md shadow-gray-200 relative">
      <div className="container flex items-center h-[80px]">
        <div className="w-[180px]">
          <h4>Netify</h4>
        </div>
        <div className="flex-1  flex items-center justify-end md:justify-center">
          <button
            onClick={onHandleAccordion}
            className=" border-[1px] justify-self-end  px-2 py-1 rounded-md mr-8 md:hidden"
          >
            <Bars3Icon className="h-10 w-10 text-blue-500" />
          </button>
          <div className="hidden md:inline">
            <Menu direction="row" />
          </div>
        </div>
        <div className="flex items-center w-[180px] ">
          <button onClick={onHandlingTheme} className="w-8 h-8 mr-5">
            {theme === "dark" ? <MoonIcon /> : <SunIcon />}
          </button>
          <Button color="primary" className="py-2 px-4 text-white">
            Connect
          </Button>
        </div>
      </div>
      <MenuAccordion show={accordionShow} />
    </header>
  );
}
