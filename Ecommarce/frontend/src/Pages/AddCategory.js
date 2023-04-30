import React, { useState } from 'react';
import { Form } from 'semantic-ui-react'
import axios from 'axios';
import Button from 'react-bootstrap/Button';

const AddCategory = () => {
    const [categoryName, setcategoryName] = useState('');

    const postData = (e) => {
        e.preventDefault();

        axios.post('http://localhost:7999/api/Categories/AddCategory', {
            "categoryName": categoryName
        }).then(res => { console.log('Data Gönderildi', res); alert("İşlem başarılı") })
            .catch(err => console.log(err))
        console.log(categoryName)
    }




    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label> Kategori ekle </label>
                    <br />
                    <input placeholder='Kategori adını yazınız ' onChange={(e) => setcategoryName(e.target.value)}
                        value={categoryName} />
                </Form.Field>
                <Button variant="primary" onClick={postData} type='submit'  >Kaydet</Button> {' '}

            </Form>
        </div>
    )
}

export default AddCategory;

