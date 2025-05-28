import React from 'react';
import './Iphone15.css';
import Footer from './Footer';

function Iphone15() {
  return (
    <>
      <div className="container mt-2 text-start">
        <button className="btn btn-outline-danger" onClick={() => window.history.back()}>
          Go Back
        </button>
      </div>

      <div className="container mt-4 text-center slide-in-right">
        <h2 className="fw-bold display-5 text-secondary oswald-font">
          Iphone 15
        </h2>
        <hr className="w-25 mx-auto border-secondary border-3" />
        <h4 className="fw-bold display-6 text-danger oswald-font">
          Titanium Iphone!
        </h4>
      </div>

      <div className="container mt-1 slide-in-left text-center">
        <img
          src="iphone15-3.webp"
          alt="Iphone 15"
          style={{ width: '1100px' }}
          className="me-2"
        />
      </div>

      <div className="col-12 col-md-11 mx-auto mt-4">
        <a href="#" className="text-decoration-none text-dark">
          <div className="hover-card border p-3 h-100 d-flex flex-column justify-content-center align-items-center shadow">
            <h4 className="text-center">Iphone 15</h4>
            <p>Looks Redefined! Class like never before!</p>
            <img
              src="iphone15-2.jpg"
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
                <h4 className="text-center">Titanium Body, Classy Looks!</h4>
                <p className="text-secondary">Looks are great!</p>
                <img
                  src="iphone15-4.jpg"
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
                <h5 className="text-center">Action Button!</h5>
                <p className="text-secondary">Do more with Action Button!</p>
                <img
                  src="iphone15-5.webp"
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

export default Iphone15;
