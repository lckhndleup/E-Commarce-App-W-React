import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productsAction } from '../Redux/Actions/Products';
import ProductsCard from '../Components/ProductsCard';
import { searchAction } from '../Redux/Actions/Search';

function Home() {
  const { products } = useSelector(state => state.products);
  const { search } = useSelector(state => state.search);
  console.log("products", products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productsAction());
    dispatch(searchAction());
  }, [dispatch]);

  return (
    <div className="container mx-auto sm:px-2 md:px-2 lg:px-2 xl:px-2 2xl:px-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-4 gap-4">
        {search.length > 0
          ? search.map((prdcts, index) => <ProductsCard key={index} prdcts={prdcts} />)
          : products && products.map((prdcts, index) => <ProductsCard key={index} prdcts={prdcts} />)
        }
      </div>
    </div>
  );
}

export default Home;
