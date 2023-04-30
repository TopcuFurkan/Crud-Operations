import React, { useState } from 'react'
import { Container, Row } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import AddCategory from './AddCategory';
import AddProduct from './AddProduct';
import UpdateProducts from './UpdateProducts';

const Main = (props) => {
  const [productId, setProductId] = useState("");
  
  return (
    <div>
      <Container>
        <Row>
          <Header />
        </Row>
        <Row>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home productId={productId} setProductId={setProductId}  />} />
              <Route path="/AddCategory" element={<AddCategory />} />
              <Route path="/AddProduct" element={<AddProduct />} />
              <Route path="/UpdateProducts/:id" element={<UpdateProducts productId={productId} setProductId={setProductId} />} />
            </Routes>
          </BrowserRouter>
        </Row>
        <Row>
          <Footer />
        </Row>
      </Container>
    </div>

  )
}

export default Main;