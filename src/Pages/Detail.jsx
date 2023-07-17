import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { productsActionDetail } from '../Redux/Actions/Products'
import {CgMathMinus,CgMathPlus} from "react-icons/cg"

function Detail() {
  const {id} = useParams();
  const dispatch = useDispatch();
  const {product} = useSelector(state => state.product) ;
  
  const [count,setCount] = useState(0)

  const decreasement = () => {
    if(count > 0){
      setCount(count-1)
    }
  }

  const increasement = () => {
    if( count < product.rating.count){
      setCount(count + 1)
    }
  }

  useEffect(() => {
    dispatch(productsActionDetail(id))
  },[dispatch,id])

  console.log("product",product)
  return (
    <div className='w-full flex justify-center space-x-10'>
      <img className='w-1/3' src={product?.image} alt="" />
      <div className='w-2/3 space-y-7 mt-20'>
        <div className='font-bold text-2xl'>{product?.title}</div>
        <div className='opacity-70 text-xl'>{product?.description}</div>
        <div><span className='font-bold '>Rate : </span> {product?.rating?.rate} - <span className='font-bold'>Stock</span> : {product?.rating?.count}</div>
        <div><span className='font-bold '>Category :</span>{product?.category}</div>
        <div className='font-bold text-3xl'><span className='font-bold'>Price : </span>{product?.price} <span className='opacity-60'>$</span></div>
        
        <div className='flex justify-between h-12  gap-5 w-40 items-center'>
          <CgMathMinus onClick={decreasement} className='cursor-pointer border rounded-full' size={36}/>
          <span className='text-2xl'>{count}</span>
          <CgMathPlus onClick={increasement} className='cursor-pointer border rounded-full' size={34}/>
        </div>
        <button className='p-3 w-full text-center rounded-lg text-white text-lg bg-indigo-600'>Sepete Ekle</button>
      </div>
    </div>
  )
}

export default Detail