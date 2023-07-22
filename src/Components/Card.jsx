import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { removeCard } from "../Redux/Actions/Card";


const Card = () => {
  const dispatch = useDispatch();
  const { cardItems } = useSelector(state => state.card);
  console.log("cardItems", cardItems);

  const deleteCard = (id) => {
    dispatch(removeCard(id))
  }
  return (
    <div className="w-1/4 h-full border fixed top-0 right-0 z-50 bg-white p-3">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl">SEPETİM : </h1>
        <AiOutlineClose
          onClick={() => dispatch({ type: "DRAWER", payload: false })}
          className="cursor-pointer"
          size={25}
        />
      </div>

      {cardItems?.map((card, index) => (
        <div key={index} className="h-30 flex items-center justify-between border-b py-2">
          <img
            className="h-24"
            src={card.image}
            alt=""
          />
          <div className="w-44">
            <div className="font-bold text-sm">
              {card?.title} ({card?.qty})
            </div>
            <div className="opacity-70 text-xs">
              {card?.description}
            </div>
            <div>{card?.price}</div>
            <div onClick={()=> deleteCard(card.id)} className="bg-red-500 w-20 p-2 text-center text-white rounded-lg cursor-pointer">
              Sil
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
