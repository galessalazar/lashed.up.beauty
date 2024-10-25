// This file is the parent form where other components like date and time picker will be added

import React, { useState } from "react";
import ServiceSelection from "./ServiceSelection";
import DateTimePicker from "./DateTimePicker";
import ClientDetailsForm from "./ClientDetailsForm";
import Confirmation from "./Confirmation";

const BookingForm = () => {

  console.log('Booking form is working');
  const [selectedService, setSelectedService] = useState(null);
  const [selectedDateTime, setSelectedDateTime] = useState(null);
  const [clientDetails, setClientDetails] = useState(null);

  const handleDetailsSubmit = (details) => {
    setClientDetails(details);
  };

  return (
    <div className="p-8 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-8">Book Your Lash Appointment</h1>
      <ServiceSelection onServiceSelect={setSelectedService} />
      <DateTimePicker onDateTimeSelect={setSelectedDateTime} />
      <ClientDetailsForm onDetailsSubmit={handleDetailsSubmit} />

      {selectedService && selectedDateTime && clientDetails ? (
        <Confirmation
          selectedService={selectedService}
          selectedDateTime={selectedDateTime}
          clientDetails={clientDetails}
        />
      ) : null}

      {selectedService && selectedDateTime && clientDetails && (
        <div className="mt-4">
          <h2 className="text-lg font-semibold">Booking Summary</h2>
          <p>Service: {selectedService.name}</p>
          <p>Price: {selectedService.price}</p>
          <p>Date & Time: {selectedDateTime.toLocaleString()}</p>
          <h3 className="font-semibold">Client Details:</h3>
          <p>Name: {clientDetails.name}</p>
          <p>Email: {clientDetails.email}</p>
          <p>Phone: {clientDetails.phone}</p>
        </div>
      )}
    </div>
  );
};

export default BookingForm;
