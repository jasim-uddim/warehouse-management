import useServices from "../../hooks/useServices";

const ManegeProduct = () => {
  const [services, setServices] = useServices();
  const handleDelete = (id) => {
    const proceed = window.confirm("are you sure delete");
    if (proceed) {
      const url = `http://localhost:5001/service/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = services.filter((service) => service._id !== id);
          setServices(remaining);
        });
    }
  };

  return (
    <div>
      <h1 className="text-center text-primary">Our manege inventory items</h1>
      <div className="row g-3">
        {services.map((service) => (
          <div key={service._id} className="col-12 col-md-6 col-lg-4">
            <img className="w-100" src={service.img} alt="" />
            <div className="p-3">
              <h1>name :{service.name}</h1>
              <h1>{service.supplier}</h1>
              <p>price: ${service.price}</p>
              <p>quantity:{service.quantity}</p>
              <p>{service.description}</p>
            </div>
            <div className="text-center">
              <button
                onClick={() => handleDelete(service._id)}
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

export default ManegeProduct;
