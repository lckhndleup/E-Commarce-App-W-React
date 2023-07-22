import React from 'react'
import {AiOutlineClose} from "react-icons/ai"
import { useDispatch, useSelector } from 'react-redux'

const Card = () => {
    const dispatch = useDispatch()
    const {cardItems} = useSelector( state  => state.cardItems);
    console.log("cardItems",cardItems);
  return (
    
    <div className='w-1/4 h-full border fixed top-0 right-0 z-50 bg-white p-3'>
        <div className='flex items-center justify-between'>
            <h1 className='text-2xl'>SEPETİM : </h1>
            <AiOutlineClose onClick={() => dispatch({type : "DRAWER" , payload : false})} className='cursor-pointer' size={25}/>
        </div>
        <div className='h-30 flex items-center justify-between border-b py-2'>
          <img className='h-24' src="https://cdn05.e-bebek.com/mnresize/1600/1600/media/p/basic-sort-erkek-bebek_8682766469417_01.jpg" alt="" />
          <div className='w-44'>
            <div className='font-bold text-sm'>
              Mens Casual Premium Slim Fit T-Shirts
            </div>
            <div className='opacity-70 text-xs'>
              Mens Casual Premium Slim Fit T-Shirts Mens Casual Premium Slim Fit T-Shirts
            </div>
            <div>199.99 TL</div>
            <div className='bg-red-500 w-20 p-2 text-center text-white rounded-lg cursor-pointer'>Sil</div>
          </div>
        </div>
        <div className='h-30 flex items-center justify-between border-b py-2'>
          <img className='h-24' src="https://cdn05.e-bebek.com/mnresize/1600/1600/media/p/basic-sort-erkek-bebek_8682766469417_01.jpg" alt="" />
          <div className='w-44'>
            <div className='font-bold text-sm'>
              Mens Casual Premium Slim Fit T-Shirts
            </div>
            <div className='opacity-70 text-xs'>
              Mens Casual Premium Slim Fit T-Shirts Mens Casual Premium Slim Fit T-Shirts
            </div>
            <div>199.99 TL</div>
            <div className='bg-red-500 w-20 p-2 text-center text-white rounded-lg cursor-pointer'>Sil</div>
          </div>
        </div>
        <div className='h-30 flex items-center justify-between border-b py-2'>
          <img className='h-24' src="https://cdn05.e-bebek.com/mnresize/1600/1600/media/p/basic-sort-erkek-bebek_8682766469417_01.jpg" alt="" />
          <div className='w-44'>
            <div className='font-bold text-sm'>
              Mens Casual Premium Slim Fit T-Shirts
            </div>
            <div className='opacity-70 text-xs'>
              Mens Casual Premium Slim Fit T-Shirts Mens Casual Premium Slim Fit T-Shirts
            </div>
            <div>199.99 TL</div>
            <div className='bg-red-500 w-20 p-2 text-center text-white rounded-lg cursor-pointer'>Sil</div>
          </div>
        </div>
        <div className='h-30 flex items-center justify-between border-b py-2'>
          <img className='h-24' src="https://cdn05.e-bebek.com/mnresize/1600/1600/media/p/basic-sort-erkek-bebek_8682766469417_01.jpg" alt="" />
          <div className='w-44'>
            <div className='font-bold text-sm'>
              Mens Casual Premium Slim Fit T-Shirts
            </div>
            <div className='opacity-70 text-xs'>
              Mens Casual Premium Slim Fit T-Shirts Mens Casual Premium Slim Fit T-Shirts
            </div>
            <div>199.99 TL</div>
            <div className='bg-red-500 w-20 p-2 text-center text-white rounded-lg cursor-pointer'>Sil</div>
          </div>
        </div>
    </div>
  )
}

export default Card