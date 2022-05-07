import { useForm } from "react-hook-form";
import useServices from "../../hooks/useServices";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const AddItems = () => {
  const [user] = useAuthState(auth);

  const [items, steItems] = useServices();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const newData = data;
    newData.email = user.email;
    fetch("http://localhost:5001/service", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newData),
    })
      .then((res) => res.json())
      .then((result) => {
        const newItems = [...items, data];
        steItems(newItems);
        alert("Items Added successfully");
      });
  };

  return (
    <div>
      <h1
        className="text-center
      text-primary"
      >
        Please add items
      </h1>
      <div className="form-container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="my-3">
            <label htmlFor="name" className="form-label">
              Product Name
            </label>
            <input
              className="form-control"
              {...register("name")}
              placeholder="Name"
              id="name"
              required
            />
          </div>
          <div className="my-3">
            <label htmlFor="supplier" className="form-label">
              Supplier Name
            </label>
            <input
              className="form-control"
              {...register("supplier")}
              placeholder="Supplier Name"
              id="supplier"
              required
            />
          </div>
          <div className="my-3">
            <label htmlFor="quantity" className="form-label">
              Quantity
            </label>
            <input
              className="form-control"
              {...register("quantity")}
              type="number"
              placeholder="Quantity"
              id="quantity"
              required
            />
          </div>
          <div className="my-3">
            <label htmlFor="price" className="form-label">
              Price
            </label>
            <input
              className="form-control"
              {...register("price")}
              type="number"
              placeholder="Price"
              id="price"
              required
            />
          </div>
          <div className="my-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea
              className="form-control"
              {...register("description")}
              placeholder="Description"
              id="description"
              required
            />
          </div>
          <div className="my-3">
            <label htmlFor="img" className="form-label">
              Image Url
            </label>
            <input
              className="form-control"
              {...register("img")}
              placeholder="Image URL"
              id="img"
              required
            />
          </div>
          <input type="submit" value="Add Items" />
        </form>
      </div>
    </div>
  );
};

export default AddItems;
