import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function Card ({imageSource}) {
  return (
    <div className="card m-2">
      <img src={`/images/${imageSource}.jpg`} alt='...' className="card-img-top"/>
      <div class="card-body">
        <h5 class="card-title">Recipe Title</h5>
        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
        <a href="/" className="card-link">Go to recipe</a>
      </div>
    </div>
  )
}
export default Card;
