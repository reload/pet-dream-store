import React from "react";

const CardGrid = () => {
  return (
    <div className="animal_grid">
      <div className="card">
        <img
          className="card__image"
          src="http://localhost:3001/images/big.jpeg"
          alt="XYZ"
        />
        <div className="card__gradient"></div>
        <h2 className="card__headline">Animal Name</h2>
        <div className="card__body">
          <p className="card__body__type">Animal type</p>
          <p className="card__body__description">Description.</p>
        </div>
      </div>
    </div>
  );
};

export default CardGrid;
