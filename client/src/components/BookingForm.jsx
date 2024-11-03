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

  const handleSelectedService = (service) => {
    setSelectedService(service);
    console.log("Service selected:", service);
  };

  const createBooking = async (bookingData) => {
    console.log("Booking data to be sent", bookingData);
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

    console.log('selected service:', selectedService);
    console.log('selected datetime:', selectedDateTime);
    console.log('client details:', clientDetails);

    if (selectedService && selectedDateTime && clientDetails) {
      const bookingData = {
        serviceName: selectedService.id,
        dateTime: selectedDateTime,
        clientName: clientDetails.name,
        clientEmail: clientDetails.email,
        clientPhone: clientDetails.phone,
      };
      createBooking(bookingData);
    } else {
      console.warn('Please ensure all details are filled out');
    }
  };

  return (
    <div className="p-8 max-w-md mx-auto">
     

      <ServiceSelection onServiceSelect={handleSelectedService} />
      <DateTimePicker onDateTimeSelect={setSelectedDateTime} />
      <ClientDetailsForm onDetailsSubmit={handleDetailsSubmit} />

      {selectedService && selectedDateTime && clientDetails && (
        <>
          <Confirmation
            selectedService={selectedService}
            selectedDateTime={selectedDateTime}
            clientDetails={clientDetails}
            onConfirm={handleConfirmBooking}
          />

          <div className="mt-4">
            <h2 className="text-lg font-semibold">Booking Summary</h2>
            <p>Service: {selectedService.serviceName}</p>
            <p>Price: {selectedService.price}</p>
            <p>Date & Time: {selectedDateTime.toLocaleString()}</p>
            <h3 className="font-semibold">Client Details:</h3>
            <p>Name: {clientDetails.name}</p>
            <p>Email: {clientDetails.email}</p>
            <p>Phone: {clientDetails.phone}</p>
            <button
              onClick={handleConfirmBooking}
              className="mt-4 bg-green-500 text-white p-2 rounded"
            >
              Confirm Booking
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default BookingForm;
