import React from 'react';
import { Navbar, Container, Offcanvas, Nav, Carousel, Card, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Reseller.css';
import Footer from './Footer';

function ResellerPage() {
  return (
    <>
      <NavbarComponent />
      <div style={{ paddingTop: '70px' }}>
        <CarouselComponent />
        <div className="container mt-4">
          <ProductCards />
          <HighlightsSection />
        </div>
        <Footer />
      </div>
    </>
  );
}

function NavbarComponent() {
  return (
    <Navbar bg="dark" variant="dark" expand="xxl" fixed="top">
      <Container fluid>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Brand as={Link} to="/">
          <img src="apple-logo.png" alt="logo" height="40" />
        </Navbar.Brand>
        <Navbar.Offcanvas id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" placement="start" className="bg-dark text-white">
          <Offcanvas.Header closeButton closeVariant="white">
            <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="flex-column">
              <Nav.Link as={Link} to="/Iphone11">IPhone 11</Nav.Link>
              <Nav.Link as={Link} to="/Iphone12">IPhone 12</Nav.Link>
              <Nav.Link as={Link} to="/Iphone13">IPhone 13</Nav.Link>
              <Nav.Link as={Link} to="/Iphone14">IPhone 14</Nav.Link>
              <Nav.Link as={Link} to="/Iphone15">IPhone 15</Nav.Link>
              <Nav.Link as={Link} to="/Iphone16">IPhone 16</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

function CarouselComponent() {
  const items = [
    { src: 'iphone11.jpg', alt: 'iPhone 11', caption: 'IPhone 11' },
    { src: 'iphone12-3.jpg', alt: 'iPhone 12', caption: 'IPhone 12' },
    { src: 'iphone13.jpg', alt: 'iPhone 13', caption: 'IPhone 13' },
    { src: 'iphone14.webp', alt: 'iPhone 14', caption: 'IPhone 14' },
    { src: 'iphone15.jpg', alt: 'iPhone 15', caption: 'IPhone 15' },
    { src: 'iphone16.jpg', alt: 'iPhone 16', caption: 'IPhone 16' },
  ];

  return (
    <Carousel>
      {items.map(function (item, index) {
        const captionClass = item.alt === 'iPhone 14' ? 'caption-custom' : '';
        return (
          <Carousel.Item key={index} interval={4000}>
            <img
              className="d-block w-100"
              src={item.src}
              alt={item.alt}
              style={{ height: '500px', objectFit: 'cover' }}
            />
            <Carousel.Caption className={captionClass}>
              <h3>{item.caption}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

function ProductCards() {
  const products = [
    { to: '/Iphone11', img: 'iphone11-2.jpg', name: 'IPhone 11' },
    { to: '/Iphone12', img: 'iphone12-2.jpg', name: 'IPhone 12' },
    { to: '/Iphone13', img: 'iphone13-2.jpg', name: 'IPhone 13' },
    { to: '/Iphone14', img: 'iphone14-2.jpg', name: 'IPhone 14' },
    { to: '/Iphone15', img: 'iphone15-2.jpg', name: 'IPhone 15' },
    { to: '/Iphone16', img: 'iphone16-2.webp', name: 'IPhone 16' },
  ];

  return (
        <div className="mt-4 mb-5">
      <h3 className="text-center">Explore the wide range of Iphones!</h3>
      <br />
    <div className="d-flex overflow-auto py-3 justify-content-center">
      {products.map(function (product, index) {
        return (
          <Link
            to={product.to}
            key={index}
            className="text-decoration-none text-dark me-3"
          >
            <Card style={{ width: '150px' }} className="product-card">
              <Card.Img
                variant="top"
                src={product.img}
                style={{ height: '150px', objectFit: 'contain' }}
              />
              <Card.Body>
                <Card.Text className="text-center">{product.name}</Card.Text>
              </Card.Body>
            </Card>
          </Link>
        );
      })}
    </div>
    </div>
  );
}

function HighlightsSection() {
  return (
    <div className="mt-4 mb-5">
      <h3 className="text-center">See what's new</h3>
      <br />
      <Row className="g-3">
        <Col xs={12} md={6}>
          <Link to="/Iphone16" className="text-decoration-none text-dark">
            <Card className="hover-card border p-3 h-100 d-flex flex-column justify-content-center align-items-center shadow">
              <h4 className="text-center">iPhone 16</h4>
              <p>Latest iPhone. Greatest Price.</p>
              <Card.Img
                src="iphone16.jpg"
                alt="iPhone 16"
                className="img-fluid mb-3"
                style={{ maxHeight: '280px', objectFit: 'cover' }}
              />
            </Card>
          </Link>
        </Col>
        <Col xs={12} md={6} className="d-flex flex-column gap-3">
          <Link to="./Macbook" className="text-decoration-none text-dark hover-card">
            <Card className="border p-3 flex-fill d-flex flex-column justify-content-center align-items-center shadow">
              <h5 className="text-center">MacBook M4 Chip</h5>
              <p>Sky High Performance.</p>
              <Card.Img
                src="macbook.jpg"
                alt="MacBook M4"
                className="img-fluid mb-2"
                style={{ maxHeight: '130px', objectFit: 'contain' }}
              />
            </Card>
          </Link>
          <Link to="./Ipad" className="text-decoration-none text-dark hover-card">
            <Card className="border p-3 flex-fill d-flex flex-column justify-content-center align-items-center shadow">
              <h5 className="text-center">iPad Pro M4</h5>
              <p>Pro Like Performance.</p>
              <Card.Img
                src="ipad.jpg"
                alt="iPad Pro M4"
                className="img-fluid mb-2"
                style={{ maxHeight: '130px', objectFit: 'contain' }}
              />
            </Card>
          </Link>
        </Col>
      </Row>
    </div>
  );
}
<Footer/>

export default ResellerPage;