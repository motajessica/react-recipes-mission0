import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Hero() {
  return (
    <div
      className="img-hero mb-5 p-5 text-center bg-image"
      style={{ backgroundImage: "url('/images/cooking-1.jpg')", height: 400 }}>
      
      <div className="row">
        <div className="col-lg-6 mb-5">
          <h2 className="text-white mb-3">
            Unleash your inner chef with our delicious recipes.
          </h2>
          <button
            type="button"
            class="btn btn-dark btn-lg download-button mb-3"
          >
            <i class="fab fa-apple me-1"></i>Download
          </button>
          <button
            type="button"
            class="btn btn-outline-light btn-lg download-button mb-3"
          >
            <i class="fab fa-google-play me-1"></i>Download
          </button>
        </div>

        <div className="col-lg-6 position-relative"></div>

        <div className="search mb-5">
          <input
            className="mb-2 mx-2 mr-sm-2 "
            type="search"
            placeholder="Search"
            onChange={() => {}}
          />
          <button type="submit" className="btn my-2 my-sm-0 btn-sm btn-warning">
            Ok
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
