import React, { useEffect, useState } from "react";
import ManegeItems from "../ManegeItems/ManegeItems";

const ManegeProduct = () => {
  const [manegeProduct, setManegeProduct] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/service")
      .then((res) => res.json())
      .then((data) => setManegeProduct(data));
  }, []);
  return (
    <div>
      <h1 className="text-center text-primary">Our manege inventory</h1>
      <div className="row g-3">
        {manegeProduct.map((product) => (
          <ManegeItems key={product._id} product={product}></ManegeItems>
        ))}
      </div>
    </div>
  );
};

export default ManegeProduct;
