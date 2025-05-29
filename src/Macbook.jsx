import React from 'react';
import './Macbook.css';
import Footer from './Footer';

function Macbook() {
  return (
    <>
      <div className="container mt-2 text-start">
        <button className="btn btn-outline-danger" onClick={() => window.history.back()}>
          Go Back
        </button>
      </div>

      <div className="container mt-4 text-center slide-in-right">
        <h2 className="fw-bold display-5 text-secondary oswald-font">
          Macbook Air
        </h2>
        <hr className="w-25 mx-auto border-secondary border-3" />
        <h4 className="fw-bold display-6 text-secondary oswald-font">
          M4 Chip | Speed Redefined!
        </h4>
        <br></br>
      </div>

      <div className="container mt-1 slide-in-left text-center">
        <img
          src="macbook-2.webp"
          alt="Macbook Air"
          style={{ width: '1100px' }}
          className="me-2"
        />
      </div>

        <Footer/>
    </>
  );
}

export default Macbook;