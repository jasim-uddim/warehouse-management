import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyItems = () => {
  const [user] = useAuthState(auth);
  const [items, setItems] = useState([]);
  const email = user.email;
  console.log(user);

  useEffect(() => {
    const url = `http://localhost:5001/myservice?email=${email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, [user, items]);

  const handleDelete = (id) => {
    // const proceed = window.confirm("are you sure delete");
    // if (proceed) {
    //   const url = `http://localhost:5001/service/${id}`;
    //   fetch(url, {
    //     method: "DELETE",
    //   })
    //     .then((res) => res.json())
    //     .then((data) => {
    //       console.log(data);
    //       const remaining = items.filter((item) => item._id !== id);
    //       setItems(remaining);
    //     });
    // }
  };
  return (
    <div>
      <h1 className="text-center text-primary"> My items</h1>
      <div className="row">
        {items.map((item) => (
          <div key={item._id} className="col-12 col-md-6 col-lg-4">
            <img className="w-100" src={item.img} alt="" />
            <div className="p-3">
              <h1>name :{item.name}</h1>
              <h1>{item.supplier}</h1>
              <p>price: ${item.price}</p>
              <p>quantity:{item.quantity}</p>
              <p>{item.description}</p>
            </div>
            <div className="text-center">
              <button
                onClick={() => handleDelete(item._id)}
                className="bg-primary border-0 rounded text-white p-2"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyItems;
