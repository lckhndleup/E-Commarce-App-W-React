import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { productsAction } from '../Redux/Actions/Products';
import ProductsCard from '../Components/ProductsCard';

function Home() {
  const {products} = useSelector(state => state.products);
  console.log("products",products);

  const dispatch = useDispatch();

  useEffect(() =>  {
    dispatch(productsAction())
  },[dispatch])

  return (
    <div className="flex flex-wrap gap-16" >
      {
        products && products.map((prdcts,index) => (
          <ProductsCard key={index} prdcts={prdcts} />
        ))
      }
    </div>
  )
}

export default Home