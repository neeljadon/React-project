import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Iphone16.css';
import Footer from './Footer';

function Iphone16Page() {
  return (
    <>
      <div className="container mt-2 text-left">
        <button className="btn btn-outline-danger" onClick={goBack}>
          Go Back
        </button>
      </div>

      <div className="container mt-4 text-center slide-in-right">
        <h2 className="text-center fw-bold display-5 text-secondary font-oswald">
          iPhone 16
        </h2>
        <hr className="w-25 mx-auto border-secondary border-3" />
        <h4 className="text-center fw-bold display-6 text-danger font-oswald">
          Performance Redefined!
        </h4>
      </div>

      <div className="container mt-4 slide-in-left">
        <img
          src="iphone16-3.webp"
          alt="iPhone 16"
          className="img-fluid"
          style={{ maxWidth: '1000px' }}
        />
      </div>

      <div className="col-12 col-md-11 mx-auto mt-4">
        <a href="#" className="text-decoration-none text-dark">
          <div className="hover-card border p-3 h-100 d-flex flex-column justify-content-center align-items-center shadow">
            <h4 className="text-center">iPhone 16</h4>
            <p>Latest iPhone. Minimal Price.</p>
            <img
              src="iphone16-4.webp"
              alt="Big Product"
              className="img-fluid mb-3"
              style={{ maxHeight: '300px', objectFit: 'cover' }}
            />
          </div>
        </a>
      </div>

      <div className="container mt-4">
        <div className="row g-3">
          <div className="col-12 col-md-6">
            <a href="#" className="text-decoration-none text-dark hover-card">
              <div className="hover-card border p-4 h-100 d-flex flex-column justify-content-center align-items-center shadow">
                <h4 className="text-center">
                  The First iPhone designed for Apple Intelligence!
                </h4>
                <p className="text-secondary">Apple Intelligence</p>
                <img
                  src="iphone16-5.webp"
                  alt="Small Product 1"
                  className="img-fluid mb-2"
                  style={{ maxHeight: '130px', objectFit: 'cover' }}
                />
              </div>
            </a>
          </div>
          <div className="col-12 col-md-6">
            <a href="#" className="text-decoration-none text-dark hover-card">
              <div className="hover-card border p-4 h-100 d-flex flex-column justify-content-center align-items-center shadow">
                <h5 className="text-center">Camera Control.</h5>
                <p className="text-secondary">
                  Get the perfect photo while barely lifting a finger
                </p>
                <img
                  src="iphone16-6.webp"
                  alt="Small Product 2"
                  className="img-fluid mb-2"
                  style={{ maxHeight: '130px', objectFit: 'cover' }}
                />
              </div>
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

function goBack() {
  window.history.back();
}

export default Iphone16Page;
