import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Hero() {
  return (
    <div className="bg-warning">

      <div class="container p-5 mb-5">
        <div class="row">
          <div class="col-12 col-md-6">
              <div class="text-white text-center mb-5">

                <div className="py-3">
                  <h2>Unleash your chef inner with our delicious recipes!</h2>
                </div>

                <div>
                  <button type="button" class="btn btn-dark btn-lg download-button mb-3">
                    <i class="fab fa-apple me-1"></i>Download
                  </button>
                  <button type="button" class="btn btn-outline-light btn-lg download-button mx-2 mb-3">
                      <i class="fab fa-google-play me-1"></i>Download
                  </button>
                </div>  

              </div>
          </div>
      
          <div className="col-12 col-md-6" >
            <div class="text-center">
              <img class="hero-img" src="images/pancakes.jpg" alt="..."></img>
            </div>
          </div>
        </div>

        <div>
         
      </div>

        </div>

    </div>
    
  );
}

export default Hero;
