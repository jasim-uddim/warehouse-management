import React from "react";

const MyData = ({ item }) => {
  const { name, price, img, supplier, quantity, description } = item;
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
      <div
        className="text-center
      mb-2"
      >
        <button className="bg-primary border-0 rounded text-white p-2">
          Delete
        </button>
      </div>
    </div>
  );
};

export default MyData;
