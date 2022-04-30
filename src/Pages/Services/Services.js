import React from "react";
import { useState, useEffect } from "react";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/service")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div id="service">
      <h1 className="text-center text-primary">Our Inventory</h1>
      <div className="row g-3">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
