import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const StockProduct = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({});
  const [restock, setRestock] = useState(0);

  useEffect(() => {
    const url = `http://localhost:5001/service/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id, product]);

  const handleUpdateProduct = (id) => {
    const updated = product;
    if (product.quantity > 0) {
      restock
        ? (updated.quantity = updated.quantity - restock)
        : (updated.quantity = updated.quantity - 1);
    }

    // send data to the server
    fetch(`http://localhost:5001/service/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updated),
    })
      .then((res) => res.json())
      .then((data) => {
        setProduct(updated);
        // alert("product Delevard successfully!!!");
      });
  };

  const handleRestock = (e) => {
    const updated = product;
    if (restock > 0) {
      restock
        ? (updated.quantity = updated.quantity + restock)
        : (updated.quantity = updated.quantity + 1);
    }
    // send data to the server
    fetch(`http://localhost:5001/service/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updated),
    })
      .then((res) => res.json())
      .then((data) => {
        setProduct(updated);
        // alert("product Delevard successfully!!!");
      });
    e.target.reset();
  };
  return (
    <div>
      <h1 className="text-center text-primary">The is delivered</h1>
      <div className="text-center">
        <img src={product.img} alt="" />
        <div className="w-50 m-auto">
          <h1>Name:{product.name}</h1>
          <h2>Supplier Name:{product.supplier}</h2>
          <h4>price: {product.price}</h4>
          <h4>Quantity: {product.quantity}</h4>
          <p>{product.description}</p>
        </div>
        <div className="form-container">
          <form>
            <input
              type="number"
              name="number"
              id=""
              onBlur={(e) => setRestock(parseInt(e.target.value))}
            />
          </form>
        </div>
        <div className="text-center">
          <button
            onClick={() => handleUpdateProduct(product._id)}
            className=" bg-primary border-0 text-white rounded p-2"
          >
            delivered
          </button>

          <button
            onClick={handleRestock}
            className=" bg-primary border-0 text-white rounded p-2 ms-5"
          >
            Restock
          </button>
        </div>
      </div>
    </div>
  );
};

export default StockProduct;
