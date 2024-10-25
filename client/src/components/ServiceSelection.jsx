import React, { useState } from "react";

const ServiceSelection = ({ onServiceSelect }) => {
    const services = [
        { id: 1, name: 'Classic Set', price: '$75'},
        { id: 2, name: 'Hybrid Set', price: '$85'},
        { id: 3, name: "Volume Set", price: '$90'}
    ]
    // this is going to keep track of the selected service
    const [ selectedService, setSelectedService ] = useState(null);

    // updates selectedService and passes the selection back to parent component via onServiceSelect, this helps when we integrate the form
    const handleSelect = (service) => {
        setSelectedService(service);
        onServiceSelect(service);
    }
  return <div className="p-4">
    <h2 className="text-xl font-bold mb-4">Choose your Lash Service</h2>
    <ul className="space-y-4">
        {services.map((service) => (
            <li key={service.id} className={`border p-4 rounded ${selectedService?.id === service.id ? border-blue-500 : 'border-gray-300'}`}>
                <h3 className='text-lg font-semibold'>{service.name}</h3>
                <p>{service.duration} - {service.price}</p>
                <button className="mt-2 px-4 py-2 bg-gray-500 text-white rounded" onClick={() => handleSelect(service)}>
                    {selectedService?.id === service.id ? "Selected" : "Select" }
                </button>
                </li>
        ))}
    </ul>
  </div>
};

export default ServiceSelection;
