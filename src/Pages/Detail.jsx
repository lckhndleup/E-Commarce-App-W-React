import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { productsActionDetail } from '../Redux/Actions/Products'

function Detail() {
  const {id} = useParams()
  


  const {product} = useSelector(state => state.product) ;
  const dispatch = useDispatch()
  console.log(dispatch);
  useEffect(() => {
    dispatch(productsActionDetail(id ))
  },[dispatch])

  console.log("product",product)
  return (
    <div>Details Page</div>
  )
}

export default Detail