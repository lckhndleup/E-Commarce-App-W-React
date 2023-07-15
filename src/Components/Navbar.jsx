import React, { useEffect, useState } from "react";
import { GrAmazon } from "react-icons/gr";
import { MdOutlineDarkMode } from "react-icons/md";
import { BsBasketFill } from "react-icons/bs";
import { MdDarkMode } from "react-icons/md";

const Navbar = () => {
  const [mode, setMode] = useState(false);
  console.log(mode);

useEffect(() => {
    const root = document.getElementById("root")
    if(mode){
        root.style.backgroundColor = "black"
        root.style.color = "white"
    }
    else{
        root.style.backgroundColor = "white"
        root.style.color = "black"
    }
})
  return (
    <div className="flex items-center justify-between px-3 bg-slate-300 h-28">
      <div>
        <GrAmazon className="cursor-pointer" size={50} />
      </div>
      <div className="flex items-center space-x-6">
        <input
          className="border outline-none px-7 py-2 text-left rounded-lg"
          type="text"
          placeholder="Search"
        />
        <div>
          {mode ? (
            <MdDarkMode
            onClick={() => setMode(!mode)}
            className="cursor-pointer"
            size={26}
          />
            
          ) : (
            <MdOutlineDarkMode
              onClick={() => setMode(!mode)}
              className="cursor-pointer"
              size={26}
            />
          )}
        </div>
        <div className="relative">
          <BsBasketFill size={32} className="cursor-pointer" />
          <span className="absolute top-0 -right-2 px-2 bg-red-600 text-white rounded-full text-sm">
            3
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
