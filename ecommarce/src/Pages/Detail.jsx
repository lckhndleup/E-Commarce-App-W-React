import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { productsActionDetail } from "../Redux/Actions/Products";
import { addBasketToCard } from "../Redux/Actions/Card";
import { CgMathMinus, CgMathPlus } from "react-icons/cg";
import "./detail.css";

function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.product);

  const [count, setCount] = useState(0);

  const decreasement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const increasement = () => {
    if (count < product.stock) {
      setCount(count + 1);
    }
  };

  useEffect(() => {
    dispatch(productsActionDetail(id));
  }, [dispatch, id]);

  const addCard = () => {
    dispatch(addBasketToCard(id, count));
    dispatch({ type: "DRAWER", payload: true });
  };

  console.log("Product : ", product);
  return (
    <div className="container mx-auto sm:px-2 md:px-2 lg:px-2 xl:px-2 2xl:px-2 mt-20">
      <div className="ProductDetail grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-10 p-0 m-0">
        <div className="İmagePro md:col-span-1">
          <img className="h-full w-full object-contain" src={product?.images?.[1]} alt="" />
        </div>
        <div className="DescriptionPro md:col-span-2 h-full space-y-7">
          <div className="font-bold text-2xl">{product?.title}</div>
          <div className="opacity-70 text-xl">{product?.description}</div>
          <div>
            <span className="font-bold ">Rate : </span> {product?.rating} -{" "}
            <span className="font-bold">Stock</span> : {product?.stock}
          </div>
          <div>
            <span className="font-bold">Category :</span>
            {product?.category}
          </div>
          <div className="font-bold text-3xl">
            <span className="font-bold">Price : </span>
            {product?.price} <span className="opacity-60">$</span>
          </div>

          <div className="flex justify-between h-12 gap-5 w-40 items-center">
            <CgMathMinus
              onClick={decreasement}
              className="cursor-pointer border rounded-full"
              size={36}
            />
            <span className="text-2xl">{count}</span>
            <CgMathPlus
              onClick={increasement}
              className="cursor-pointer border rounded-full"
              size={34}
            />
          </div>
          <button
            onClick={addCard}
            className="p-3 w-full text-center rounded-lg text-white text-lg bg-indigo-600"
          >
            Sepete Ekle
          </button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
