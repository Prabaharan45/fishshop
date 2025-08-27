import React from "react";
import fishes from "../data/fishes";  // <-- Remove the extra 'src/'

import "./Fishes.css";

function Fishes() {
  const handlePriceClick = (price, fishName) => {
    const confirmPurchase = window.confirm(`Do you want to buy ${fishName} for ₹${price}?`);
    if (confirmPurchase) {
      window.open("https://wa.me/919632762833", "_blank"); // Replace YOUR_NUMBER
    }
  };

  return (
    <div className="fishes-page">
      <h1>Variety of Fishes</h1>
      <div className="fish-list">
        {fishes.map((fish, index) => (
          <div key={index} className="fish-card">
            <img src={fish.image} alt={fish.name} className="fish-image" />
            <h2>{fish.name}</h2>
            <div className="prices">
              {fish.prices.map((price, i) => (
                <button key={i} onClick={() => handlePriceClick(price, fish.name)}>
                  ₹{price}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Fishes;
