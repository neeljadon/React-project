import React from 'react';
import './Iphone12.css';
import Footer from './Footer';

function Iphone12() {
  return (
    <>
      <div className="container mt-2 text-start">
        <button className="btn btn-outline-danger" onClick={() => window.history.back()}>
          Go Back
        </button>
      </div>

      <div className="container mt-4 text-center slide-in-right">
        <h2 className="fw-bold display-5 text-secondary oswald-font">
          Iphone 12
        </h2>
        <hr className="w-25 mx-auto border-secondary border-3" />
        <h4 className="fw-bold display-6 text-danger oswald-font">
          Design Redefined!
        </h4>
      </div>

      <div className="container mt-1 slide-in-left text-center">
        <img
          src="iphone12-3.jpg"
          alt="Iphone 12"
          style={{ width: '1100px' }}
          className="me-2"
        />
      </div>

      <div className="col-12 col-md-11 mx-auto mt-4">
        <a href="#" className="text-decoration-none text-dark">
          <div className="hover-card border p-3 h-100 d-flex flex-column justify-content-center align-items-center shadow">
            <h4 className="text-center">Iphone 12</h4>
            <p>Latest Iphone. Bigger Display.</p>
            <img
              src="iphone12-4.jpg"
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
                <h4 className="text-center">Less Bezzels, More Display!</h4>
                <p className="text-secondary">Bigger Display</p>
                <img
                  src="iphone12-5.jpg"
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
                <h5 className="text-center">Sleek Design.</h5>
                <p className="text-secondary">
                  Get the perfect Phone while barely getting any Weight.
                </p>
                <img
                  src="iphone12-6.jpg"
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

export default Iphone12;
