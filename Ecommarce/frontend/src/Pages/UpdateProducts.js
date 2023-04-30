import React, { useState, useEffect } from 'react';
import { Form } from 'semantic-ui-react'
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { useParams } from "react-router-dom";

const UpdateProducts = (props) => {
  const { id } = useParams();

  const [productName, setproductName] = useState('');
  const [brand, setbrand] = useState('');
  const [stock, setstock] = useState('');
  const [categoryId, setcategoryId] = useState('');
  const [unitPrice, setunitPrice] = useState('');

  var Product = {};

  console.log("Product : " +Product);
  useEffect(() => {

    axios.post('http://localhost:7999/api/Products/FindById', {
      "productId": id
    }).then(result => {
      Product = result.data.data;
    }).catch(err => { console.log("Hata : " + err) });

  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:7999/api/Products/UpdateProduct`, {
      productId: id,
      productName,
      brand,
      stock,
      categoryId,
      unitPrice,
    })
      .then((res) => {
        console.log('Product updated successfully', res);

      })
      .catch((err) => {

      });
  };
  console.log("Product : " +Product);

 
  return (
    <>
    <h1>Marka : {Product.brand}</h1>
      <Form className="create-form">
        <Form.Field>
          <label> Ürün Güncelle </label>
          <br />
          <input placeholder='Product Name' onChange={(e) => setproductName(e.target.value)}
            value={productName} />
          <br />
          <input placeholder='Marka adını yazınız ' onChange={(e) => setbrand(e.target.value)}
            value={brand} />
          <br />
          <input placeholder='Stok durumunu giriniz ' onChange={(e) => setstock(e.target.value)}
            value={stock} />
          <br />
          <input placeholder='Kategori Idsini giriniz ' onChange={(e) => setcategoryId(e.target.value)}
            value={categoryId} />
          <br />
          <input placeholder='İndirim tutarını giriniz ' onChange={(e) => setunitPrice(e.target.value)}
            value={unitPrice} />
          <br />
        </Form.Field>
        <Button onClick={handleSubmit} href='/' variant="primary" type='submit'>Güncelle</Button>{''}
      </Form>
    </>
  );
};

export default UpdateProducts;