import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const StockUpdate = () => {
  const { id } = useParams();

  const [update, setUpdate] = useState({});
  console.log(update);
  useEffect(() => {
    const url = `http://localhost:5000/service/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUpdate(data));
  }, []);
  return (
    <div>
      <h1>the is update page:{id}</h1>
    </div>
  );
};

export default StockUpdate;
