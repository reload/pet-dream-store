import React from "react";

const CardGrid = () => {
  return (
    <>
      <div className="card">
        <img
          className="card__image"
          src="http://localhost:3001/images/big.jpeg"
          alt="XYZ"
        />
        <h2 className="card__headline">Animal Name</h2>
        <p className="card__type">Animal type</p>
        <p className="card__description">Description.</p>
      </div>
    </>
  );
};

export default CardGrid;
