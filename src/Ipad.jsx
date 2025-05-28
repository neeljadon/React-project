import React from 'react';
import './Ipad.css';
import Footer from './Footer';

function Ipad() {
  return (
    <>
      <div className="container mt-2 text-start">
        <button className="btn btn-outline-danger" onClick={() => window.history.back()}>
          Go Back
        </button>
      </div>

      <div className="container mt-4 text-center slide-in-right">
        <h2 className="fw-bold display-5 text-secondary oswald-font">
          Ipad Pro!
        </h2>
        <hr className="w-25 mx-auto border-secondary border-3" />
        <h4 className="fw-bold display-6 text-danger oswald-font">
          Pro Grade Features!
        </h4>
      </div>

      <div className="container mt-1 slide-in-left text-center">
        <img
          src="ipad-2.webp"
          alt="Ipad"
          style={{ width: '1100px' }}
          className="me-2"
        />
      </div>

      <div className="col-12 col-md-11 mx-auto mt-4">
        <a href="#" className="text-decoration-none text-dark">
          <div className="hover-card border p-3 h-100 d-flex flex-column justify-content-center align-items-center shadow">
            <h4 className="text-center">Ipad Pro</h4>
            <p>The pro you want in your life!</p>
            <img
              src="ipad-3.webp"
              alt="Big Product"
              className="img-fluid mb-3"
              style={{ maxHeight: '280px', objectFit: 'cover' }}
            />
          </div>
        </a>
      </div>

      <div className="container mt-4">
        <div className="row g-3">
          <div className="col-12 col-md-6">
            <a href="#" className="text-decoration-none text-dark hover-card">
              <div className="hover-card border p-4 h-100 d-flex flex-column justify-content-center align-items-center shadow">
                <h4 className="text-center">The daily Machine you need in your life!</h4>
                <p className="text-secondary">Portable</p>
                <img
                  src="ipad-4.webp"
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
                <h5 className="text-center">Expert support</h5>
                <p className="text-secondary">Enhance Performance</p>
                <img
                  src="ipad-5.webp"
                  alt="Small Product 2"
                  className="img-fluid mb-2"
                  style={{ maxHeight: '130px', objectFit: 'cover' }}
                />
              </div>
            </a>
          </div>
        </div>
      </div>

    <Footer/>
    </>
  );
}

export default Ipad;
