import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Hero() {
  return (
    <div
      className="img-hero mb-5 p-5 text-center bg-image"
      style={{ backgroundImage: "url('/images/bread-1.jpg')", height: 500 }}
    >
      <div className="row py-5">
        <div className="col-lg-6 mb-5">
          <h2 className="text-white mb-3">
            Unleash your inner chef with our amazing & simple recipes.
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

      </div>
    </div>
  );
}

export default Hero;
