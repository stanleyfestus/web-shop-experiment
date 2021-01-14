import React from 'react';
import { Link } from 'react-router-dom';
import ProductWrapper from './FeaturedProducts';
import { useProductsContext } from '../../context/product_context';

const FeaturedProducts = () => {
  console.log(useProductsContext())
  // const { 
  //   featured_products: featured
  // } = useProductsContext();

  return (
  <ProductWrapper className="section">
    <div className="title">
      <h2>featured products</h2>
      <div className="underline"></div>
      </div>
      <div className="section-center featured">
        products
      </div>
      <Link 
        to="/products"
        className="btn">
          all products
      </Link>
   </ProductWrapper>
  )
}

export default FeaturedProducts;