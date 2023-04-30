import axios from 'axios';
import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';






const Products = (props) => {
  
  useEffect(() => {
    axios("http://localhost:7999/api/Products/GetAllProducts")
      .then((t) => { props.setProduct(t.data.data) });

  }, []);

   
  
  
  
  const deleteById = (pid) => {

    axios.delete('http://localhost:7999/api/Products/DeleteById', {
      data: {
        "productId": pid
      }
    }).then(res => { console.log('Data Gönderildi', res); alert("İşlem başarılı") })
      .catch(err => console.log(err))
    alert(pid)
  }
  

  return (
   
    <div>
       
      <Container>
        <Table align='middle' striped bordered hover>
          <thead>

            <tr>
              <th scope="col" className='table-success'>ProductName</th>
              <th scope="col" className='table-success'>Brand</th>
              <th scope="col" className='table-success'>Stock</th>
              <th scope="col" className='table-success'>CategoryId</th>
              <th scope="col" className='table-success'>UnitPrice</th>
              <th scope="col" className='table-success'>Options</th>
            </tr>

          </thead>
          <tbody >
            {Array.from(props.product).map((value, index) => {

              return (
                <tr key={index}  >
                  <th key={value.id}>{value.productName}</th>
                  <th key={value.id}>{value.brand}</th>
                  <th key={value.id}>{value.stock}</th>
                  <th key={value.id}>{value.categoryId}</th>
                  <th key={value.id}>{value.unitPrice}</th>
                  

                  <th>
                    <Button variant="success" href={"/UpdateProducts/" + value._id }   onClick={() => {
                      props.setProductId(value._id);
                      console.log("Product sayfası güncellenecek id : " + props.productId);

                    } } >Update </Button>
                    <Button onClick={() => { deleteById(value._id) }} variant="danger">Delete</Button>
                    
                  </th>

                </tr>
              )
              
            })}
             
          </tbody>
        </Table>
      </Container>
    </div >
  )
}
export default Products;