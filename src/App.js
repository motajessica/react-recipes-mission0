import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Cards from "./components/Card.js";
import Search from "./components/Search.js";
import Hero from "./components/Hero.js";
import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div className="App">
      <div>
        <Header />
        <Hero />
      </div>

      <div className="container">
        <Search />
      </div>

      <div className="container">
        <div className="d-flex flex-wrap justify-content-center">
          {["quesadilla", "burger", "lasagna", "paella", "cake", "meal", "quesadilla", "lasagna", "paella", "cake", "paella", "meal"].map(
            function (item) {
              return <Cards imageSource={item} />;
            }
          )}
        </div>
      </div>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default App;
