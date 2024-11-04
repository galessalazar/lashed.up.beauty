import { useState, useEffect } from "react";
import axios from "axios";

const ServiceSelection = ({ onServiceSelect }) => {
  const [services, setServices] = useState([]);
  // this is going to keep track of the selected service
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get("/api/services");
        setServices(response.data);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };
    fetchServices();
  }, []);

  // updates selectedService and passes the selection back to parent component via onServiceSelect, this helps when we integrate the form
  const handleSelect = (event, service) => {
    event.preventDefault();
    console.log("selected service:", service);
    setSelectedService(service);
    onServiceSelect(service);
  };
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Choose your Lash Service</h2>
      <ul className="space-y-4">
        {services.map((service) => (
          <li
            key={service._id}
            className={`border p-4 rounded ${
              selectedService?._id === service.id
                ? "border-blue-500"
                : "border-gray-300"
            }`}
          >
            <h3 className="text-lg font-semibold">{service.serviceName}</h3>
            <p>
              {service.duration} - {service.price}
            </p>
            <button
              className="mt-2 px-4 py-2 bg-gray-500 text-white rounded"
              onClick={(event) => handleSelect(event, service)}
            >
              {selectedService?._id === service._id ? "Selected" : "Select"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceSelection;
