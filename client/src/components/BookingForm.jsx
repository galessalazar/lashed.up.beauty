// This file is the parent form where other components like date and time picker will be added

import React, { useState } from "react";
import ServiceSelection from "./ServiceSelection";
import DateTimePicker from "./DateTimePicker";
import ClientDetailsForm from "./ClientDetailsForm";
import Confirmation from "./Confirmation";

const BookingForm = () => {
  console.log("Booking form is working");

  // not sure ill need this import
  const [selectedService, setSelectedService] = useState(null);
  const [selectedDateTime, setSelectedDateTime] = useState(null);
  const [clientDetails, setClientDetails] = useState(null);

  const handleDetailsSubmit = (details) => {
    setClientDetails(details);
  };

  const createBooking = async (bookingData) => {
    try {
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingData),
      });

      if (!response.ok) {
        throw new Error("Network response was not OK");
      }
      const data = await response.json();
      console.log("Booking created", data);
    } catch (error) {
      console.error("Error creating booking", error);
    }
  };

  const handleConfirmBooking = () => {
    if (selectedService && selectedDateTime && clientDetails) {
      const bookingData = {
        service: selectedService,
        dateTime: selectedDateTime,
        client: clientDetails,
      };
      createBooking(bookingData);
    }
  };

  return (
    <div className="p-8 max-w-md mx-auto">
      {/* <h1 className="text-2xl font-bold mb-8">Book Your Lash Appointment</h1> */}
      {/* i commented out because it was rendering twice on the page, once above the client details form and the other to the left */}
      {/* <ServiceSelection onServiceSelect={setSelectedService} /> */}
      <DateTimePicker onDateTimeSelect={setSelectedDateTime} />
      <ClientDetailsForm onDetailsSubmit={handleDetailsSubmit} />

      {selectedService && selectedDateTime && clientDetails ? (
        <Confirmation
          selectedService={selectedService}
          selectedDateTime={selectedDateTime}
          clientDetails={clientDetails}
          onConfirm={handleConfirmBooking}
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
          <button onClick={{handleConfirmBooking}} className="mt-4 bg-green-500 text-white p-2 rounded">
            Confirm Booking
          </button>
        </div>
      )}
    </div>
  );
};

export default BookingForm;
