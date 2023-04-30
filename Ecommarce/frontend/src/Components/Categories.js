
import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Container, Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';


const Categories = (props) => {


  const [category, setCategory] = useState([]);
  useEffect(() => {
    axios("http://localhost:7999/api/Categories/GetAllCategory", {})
      .then((t) => { setCategory(t.data.data) });
  }, []);


  var cat = category.map(function (value) {
    return { value: value.categoryName };

  })

  var result = Array.from(props.product).map(function (value) {
    return { value: value.categoryId };

  })
  console.log(cat)
  console.log(result)
  
  return (

    <div>

      <Container>

        <Table align='middle'>
          <thead>
            <tr>
              <th scope="col" className='table-success'><p>Kategoriler</p></th>

            </tr>
          </thead>
          <tbody >
            {category.map((value, index) => {
              return (

                <tr key={index} className='d-flex align-items-center,table-bordered' >
                  <th>

                    <Button
                      key={value.id}

                      onClick={value.id}>{value.categoryName}
                    </Button>
                  </th>

                </tr>

              )
            })}
          </tbody>
        </Table>

      </Container>

    </div>

  )
}

export default Categories;





