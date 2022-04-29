import React from "react";

const Service = ({ service }) => {
  const { name, price, img, supplier, quantity, description } = service;
  return (
    <div className="col-12 col-md-6 col-lg-4">
      <img className="w-100" src={img} alt="" />
      <div className="p-3">
        <h1>name:{name}</h1>
        <h1>{supplier}</h1>
        <p>price: {price}</p>
        <p>quantity: {quantity}</p>
        <p>{description}</p>
      </div>
      <div className="text-center">
        <button className="bg-primary border-0 rounded text-white p-2">
          update
        </button>
      </div>
    </div>
  );
};

export default Service;
