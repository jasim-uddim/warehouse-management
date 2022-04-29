import React from "react";

const Service = ({ service }) => {
  const { name, price, img, supplier, quantity, description } = service;
  return (
    <div className="col-12 col-md-6 col-lg-4">
      <img className="w-100" src={img} alt="" />
      <h1>name:{name}</h1>
      <h1>{supplier}</h1>
      <p>price: {price}</p>
      <p>quantity: {quantity}</p>
      <p>{description}</p>
      <button>deliverd</button>
    </div>
  );
};

export default Service;
