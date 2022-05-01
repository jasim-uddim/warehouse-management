import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Service = ({ service }) => {
  const { _id, name, price, img, supplier, quantity, description } = service;
  const navigate = useNavigate();

  const navigateToStockUpdate = (id) => {
    navigate(`/stockUpdate/${id}`);
  };
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
      <Link to="#" className="mx-4 text-decoration-none">
        manege item
      </Link>
      <div className="text-end mx-4">
        <button
          onClick={() => navigateToStockUpdate(_id)}
          className="bg-primary border-0 rounded text-white p-2"
        >
          update
        </button>
      </div>
    </div>
  );
};

export default Service;
