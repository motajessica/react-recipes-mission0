import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer py-3 my-4">
    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
      <li className="nav-item">
        <a href='#' className="nav-link px-2 text-muted"> Home</a>
       </li>
       <li className="nav-item">
        <a href='#' className="nav-link px-2 text-muted"> Features</a>
       </li>
       <li className="nav-item">
        <a href='#' className="nav-link px-2 text-muted"> FAQs</a>
       </li>
       <li className="nav-item">
        <a href='#' className="nav-link px-2 text-muted"> Contact us</a>
       </li>
       <li className="nav-item">
        <a href='#' className="nav-link px-2 text-muted"> About us</a>
       </li>
    </ul>
    <p className="text-center text-muted ">CookBook App © {year} </p>
  </footer>
  );
};

export default Footer;