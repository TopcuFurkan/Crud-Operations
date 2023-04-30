import React, { useState } from 'react';
import {Form } from 'semantic-ui-react'
import axios from 'axios';
import Button from 'react-bootstrap/Button';

const AddProducts = () => {
    const [productName, setproductName] = useState('');
    const [brand, setbrand] = useState('');
    const [stock, setstock] = useState('');
    const [categoryId, setcategoryId] = useState('');
    const [unitPrice, setunitPrice] = useState('');

    const postData = (e) => {
        e.preventDefault();
        
        axios.post('http://localhost:7999/api/Products/AddProduct', {
            "productName" : productName,
            "brand":brand,
            "stock":stock,
            "categoryId":categoryId,
            "unitPrice" : unitPrice,

        }).then(res => { console.log('Data Gönderildi', res); alert("İşlem başarılı") })
        .catch(err => console.log(err))
    console.log(productName)

    }
    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label> Ürün Ekle </label>
                    <br />
                    <input placeholder='Ürün adını yazınız ' onChange={(e) => setproductName(e.target.value)}
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
                <Button variant="primary" onClick={postData} type='submit'>Kaydet</Button>{''}

            </Form>
        </div>
    )
}

export default AddProducts;