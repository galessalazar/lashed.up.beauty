// This file is the parent form where other components like date and time picker will be added

import React, { useState } from "react";
import ServiceSelection from "./ServiceSelection";
import DateTimePicker from './DateTimePicker';

const BookingForm = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [selectedDateTime, setSelectedDateTime] = useState(null);

  return (
    <div className="p-8 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-8">Book Your Lash Appointment</h1>
      <ServiceSelection onServiceSelect={setSelectedService} />
      <DateTimePicker onDateTimeSelect={setSelectedDateTime} />

      {selectedService && selectedDateTime && (
        <div className="mt-4">
          <h2 className="text-lg font-semibold">You selected:</h2>
          <p>{selectedService.name}</p>
          <p>{selectedService.price}</p>
          <p>Date & Time: {selectedDateTime.toLocaleString()}</p>
        </div>
      )}
    </div>
  );
};

export default BookingForm;
