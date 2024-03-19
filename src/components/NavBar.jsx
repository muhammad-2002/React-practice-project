import { useState } from "react";
import { HiOutlineBars3 } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import DisplayNav from "./DisplayNav/DisplayNav";
const NavBar = () => {
  const navbarLinks = [
    { id: 1, text: "Home", path: "/" },
    { id: 2, text: "About", path: "/about" },
    { id: 3, text: "Contact", path: "/contact" },
    { id: 4, text: "Services", path: "/services" },
    { id: 5, text: "Portfolio", path: "/portfolio" },
    { id: 6, text: "Blog", path: "/blog" },
  ];

  const [open, setOpen] = useState(false);
  return (
    <div className="flex justify-between items-center text-white  bg-gray-500">
      <div className="flex  items-center  ">
        <div
          className="cursor-pointer transition-transform block md:hidden text-3xl"
          onClick={() => setOpen(!open)}
        >
          {open === true ? <HiOutlineBars3 /> : <RxCross2 />}
        </div>
        <h1
          className={`md:flex block  top-6 ${
            open ? "-left-48" : "-left-3"
          } w-[180px] md:static transition-all duration-1000   md:text-white absolute gap-6 md:w-full bg-gray-500 p-5 font-bold`}
        >
          {navbarLinks.map((nav) => (
            <DisplayNav key={nav.id} nav={nav}></DisplayNav>
          ))}
        </h1>
      </div>
      <h1 className="pr-6">Demo</h1>
    </div>
  );
};

export default NavBar;
