import React from "react";

import useServices from "../../hooks/useServices";
import Service from "../Service/Service";

const Services = () => {
  const [services] = useServices();

  return (
    <div>
      <h1 className="text-center text-primary">Our Inventory</h1>
      <div className="row g-3">
        {services.slice(0, 6).map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
