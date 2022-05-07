import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import MyData from "../MyData/MyData";

const MyItems = () => {
  const [user] = useAuthState(auth);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const url = `http://localhost:5001/service`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  return (
    <div>
      <h1 className="text-center text-primary"> My items</h1>
      <div className="row">
        {items.map((item) => (
          <MyData key={item._id} item={item}></MyData>
        ))}
      </div>
    </div>
  );
};

export default MyItems;
