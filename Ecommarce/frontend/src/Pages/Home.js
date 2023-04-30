import React from 'react'
import { Col } from 'react-bootstrap';
import Categories from '../Components/Categories';
import Products from '../Components/Products';
import { useState } from 'react';







const  Home = (props) =>{
  const [product, setProduct] = useState((''));
  const [productById, setproductById] = useState('');
  
  
  return (
    
    <>
     
      <Col>
          <Categories product={product} setProduct={setProduct} productById={productById} setProductById={setproductById} />
      </Col>
      <Col>
          <Products productId={props.productId} setProductId={props.setProductId} products={Products} product={product} setProduct={setProduct} productById={props.productById} setProductById={props.setproductById}  />
      </Col>
      
    </>
  )
}

export default Home;