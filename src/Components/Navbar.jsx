import React, { useEffect, useState } from "react";
import { GrAmazon } from "react-icons/gr";
import { MdOutlineDarkMode } from "react-icons/md";
import { BsBasketFill } from "react-icons/bs";
import { MdDarkMode } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { searchAction } from "../Redux/Actions/Search";
import "./Navbar.css";

const Navbar = () => {
  const [mode, setMode] = useState(false);
  const dispatch = useDispatch();
  const { cardItems } = useSelector((state) => state.card);
  const [search, setSearch] = useState("");

  const searchPost = (event) => {
    if (event.key === "Enter") {
      dispatch(searchAction(search));
    }
  };

  useEffect(() => {
    const root = document.getElementById("root");
    if (mode) {
      root.style.backgroundColor = "black";
      root.style.color = "white";
    } else {
      root.style.backgroundColor = "white";
      root.style.color = "black";
    }
  });

  const navigate = useNavigate();
  return (
    <div className="container mx-auto px-4 sm:px-4 md:px-2 lg:px-2 xl:px-2 2xl:px-2">
      <div className="flex items-center justify-between px-3 bg-slate-300 h-28 w-full">
      <div className="w-1/5">
        <GrAmazon
          onClick={() => navigate("/")}
          className="cursor-pointer h-16 w-16"
        />
      </div>
      <div className="RightPlace flex items-center justify-between space-x-6 w-full">
        <div className="Rightside flex w-full">
          <input

            value={search}
            onChange={(event) => setSearch(event.target.value)}
            onKeyPress={searchPost}
            className="SearchBtn border w-5/6 outline-none px-7 py-2 text-left rounded-lg"
            type="text"
            placeholder="Search"
          />
        </div>
        <div className="Leftside w-1/6 p-2 flex gap-10 justify-center items-center">
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
          <div
            onClick={() => dispatch({ type: "DRAWER", payload: true })}
            className="relative"
          >
            <BsBasketFill size={32} className="cursor-pointer" />
            <span className="absolute top-0 -right-2 px-2 bg-red-600 text-white rounded-full text-sm">
              {cardItems?.length}
            </span>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
