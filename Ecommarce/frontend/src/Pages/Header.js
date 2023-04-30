import React from 'react'
import { Navbar, Container,Nav } from 'react-bootstrap';



const Header = () => {

  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="/">Ana Sayfa</Nav.Link>
            <Nav.Link href="/AddCategory">Kategori Ekle </Nav.Link>
            <Nav.Link href="/AddProduct">Ürün Ekle</Nav.Link>
            <Nav.Link href="/UpdateProducts">Ürün Güncelle</Nav.Link>
            <Nav.Link href="/UpdateCategory">Kategori Güncelle</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    
    </>
  )
}

export default Header;