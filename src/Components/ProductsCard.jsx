import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const ProductsCard = ({ prdcts }) => {
  const navigate = useNavigate();
  return (
    <div className="hover:border-indigo-500 w-1/5 h-[350px] border rounded-lg m-2 flex flex-col items-center p-3 space-y-2">
      <img
        onClick={() => navigate(`detail/${prdcts.id}`)}
        className="h-32 object-cover"
        src={prdcts.image}
        alt=""
      />
      <div className="font-bold h-16">{(prdcts?.title).substring(0, 45)}</div>
      <div className="text-center opacity-70 text-sm">
        {(prdcts?.description).substring(0, 45)}...
      </div>
      <div className="font-bold text-lg">{prdcts?.price} TL</div>
      <button className="bg-indigo-600 w-full p-2 rounded-lg text-white">
        SEPETE EKLE
      </button>
    </div>
  );
};

export default ProductsCard;
