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
  const { cardItems } = useSelector(state => state.card);
  const [search,setSearch] =useState('')

  const searchPost = (event)=>{
    if(event.key === 'Enter'){
      dispatch(searchAction(search))
    }
  }

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

const navigate = useNavigate();
  return (
    <div className="flex items-center justify-between px-3 bg-slate-300 h-28 w-full">
      <div className="w-1/5">
        <GrAmazon onClick={() => navigate("/")} className="cursor-pointer h-16 w-16"/>
      </div>
      <div className="RightPlace flex items-center space-x-6 w-4/5 bg-yellow-600">
        <input
          value={search}
          onChange={event => setSearch(event.target.value)}
          onKeyPress={searchPost}
          className="SearchBtn border outline-none px-7 py-2 text-left rounded-lg"
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
        <div onClick={() => dispatch({type : "DRAWER" , payload :true })} className="relative">
          <BsBasketFill size={32} className="cursor-pointer" />
          <span className="absolute top-0 -right-2 px-2 bg-red-600 text-white rounded-full text-sm">
            {cardItems?.length}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
