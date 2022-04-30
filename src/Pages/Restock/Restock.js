import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Restock = () => {
  const { id } = useParams();
  const [stockProduct, setStockProduct] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/service/${id}`)
      .then((res) => res.json())
      .then((data) => setStockProduct(data));
  }, [id, stockProduct]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="form-container">
      <h1 className="text-center">Restock your product</h1>
      <form onSubmit={handleFormSubmit}>
        <input type="number" name="number" id="" />
        <input type="submit" value="Restock" />
      </form>
    </div>
  );
};

export default Restock;
