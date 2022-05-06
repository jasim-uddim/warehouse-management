import React from "react";

const AddItems = () => {
  const handleAddItem = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const supplier = event.target.supplier.value;
    const price = event.target.price.value;
    const quantity = event.target.quantity.value;
    const photoUrl = event.target.photoUrl.value;
    const description = event.target.description.value;
    console.log(name, supplier, price, quantity, photoUrl, description);
    event.target.reset();

    const url = `http://localhost:5000/service`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div>
      <h1
        className="text-center
      text-primary"
      >
        please add items
      </h1>
      <div className="form-container">
        <form onSubmit={handleAddItem}>
          <input type="text" name="name" id="" placeholder="name" />
          <input
            type="text"
            name="supplier"
            id=""
            placeholder="supplier name"
          />
          <input type="number" name="price" id="" placeholder="price" />
          <input type="number" name="quantity" id="" placeholder="quantity" />
          <input type="text" name="photoUrl" id="" placeholder="url" />
          <textarea
            type="text"
            name="description"
            id=""
            placeholder="description"
          />

          <input type="submit" value="add items" />
        </form>
      </div>
    </div>
  );
};

export default AddItems;
