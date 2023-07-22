import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { productsAction } from '../Redux/Actions/Products';
import ProductsCard from '../Components/ProductsCard';
import { searchAction } from '../Redux/Actions/Search';

function Home() {
  const {products} = useSelector(state => state.products);
  const {search} = useSelector(state => state.search);
  console.log("products",products);

  const dispatch = useDispatch();

  useEffect(() =>  {
    dispatch(productsAction())
    dispatch(searchAction())
  },[dispatch])

  return (
    <div className="flex flex-wrap gap-8 sm:gap-12 md:gap-8 lg:gap-16  xl:gap-16" >
      {
        search.length > 0 ?
        search.map((prdcts,index) => (
          <ProductsCard key={index} prdcts={prdcts}/>
        )):
        products && products.map((prdcts,index) => (
          <ProductsCard key={index} prdcts={prdcts} />
        ))
      }
    </div>
  )
}

export default Home