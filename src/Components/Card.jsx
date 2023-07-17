import React from 'react'
import {AiOutlineClose} from "react-icons/ai"
import { useDispatch } from 'react-redux'

const Card = () => {
    const dispatch = useDispatch()
  return (
    
    <div className='w-1/4 h-full border fixed top-0 right-0 z-50 bg-white p-3'>
        <div className='flex items-center justify-between'>
            <h1 className='text-2xl'>SEPETİM : </h1>
            <AiOutlineClose onClick={() => dispatch({type : "DRAWER" , payload : false})} className='cursor-pointer' size={25}/>
        </div>
    </div>
  )
}

export default Card