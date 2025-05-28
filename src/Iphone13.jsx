import React from 'react';
import './Iphone13.css';
import Footer from './Footer';

function Iphone13() {
  return (
    <>
      <div className="container mt-2 text-start">
        <button className="btn btn-outline-danger" onClick={() => window.history.back()}>
          Go Back
        </button>
      </div>

      <div className="container mt-4 text-center slide-in-right">
        <h2 className="fw-bold display-5 text-secondary oswald-font">
          Iphone 13
        </h2>
        <hr className="w-25 mx-auto border-secondary border-3" />
        <h4 className="fw-bold display-6 text-danger oswald-font">
          Iphone Meets Power!
        </h4>
      </div>

      <div className="container mt-1 slide-in-left text-center">
        <img
          src="iphone13-3.jpg"
          alt="Iphone 13"
          style={{ width: '1100px' }}
          className="me-2"
        />
      </div>

      <div className="col-12 col-md-11 mx-auto mt-4">
        <a href="#" className="text-decoration-none text-dark">
          <div className="hover-card border p-3 h-100 d-flex flex-column justify-content-center align-items-center shadow">
            <h4 className="text-center">Iphone 13</h4>
            <p>Latest Iphone. Better Performance.</p>
            <img
              src="iphone13-4.jpg"
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
                <h4 className="text-center">A15 bionic, Better Performance!</h4>
                <p className="text-secondary">Performance like never before!</p>
                <img
                  src="iphone13-5.jpg"
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
                <h5 className="text-center">Lesser Bezzels.</h5>
                <p className="text-secondary">Get the perfect Display with less Bezzels!</p>
                <img
                  src="iphone13-6.jpg"
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

export default Iphone13;
