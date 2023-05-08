import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faGooglePlay } from '@fortawesome/free-brands-svg-icons';


function Hero() {
  return (
  <div
    className="hero-img mb-5 p-5 text-center bg-image"
    style={{ backgroundImage: "url('/images/bread.jpg')", height: 500 }}
    >
      <div className="py-5 hero-mask d-flex flex-column justify-content-center gap">
        <h2 className="hero-title container">
          Unleash your inner Chef with our delicious & simple recipes.
        </h2>
        <div className="hero-subtitle container">
          <h5 className="mt-5">
            Download the app for free.
          </h5>
          <button
            type="button"
            class="btn btn-dark btn-md download-button me-2"
            >
            <FontAwesomeIcon icon={faGooglePlay} /> Download
          </button>
          <button
            type="button"
            class="btn btn-light btn-md download-button"
            >
            <FontAwesomeIcon icon={faApple} className="" /> Download
          </button>          
        </div>
      </div>
    </div>
  );
}

export default Hero;
