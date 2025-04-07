// This file is the parent form where other components like date and time picker will be added

import { useState } from "react";
import ServiceSelection from "./ServiceSelection";
import DateTimePicker from "./DateTimePicker";
import ClientDetailsForm from "./ClientDetailsForm";
import Confirmation from "./Confirmation";
import { useNavigate } from "react-router-dom";

const BookingForm = () => {
  // hook for page navigation
  const navigate = useNavigate();

  // not sure ill need this import
  const [selectedServiceId, setSelectedServiceId] = useState("null");
  const [selectedService, setSelectedService] = useState(null);
  const [selectedDateTime, setSelectedDateTime] = useState(null);
  const [clientDetails, setClientDetails] = useState(null);
  // this tracks the bookings status
  const [bookingsSuccess, setBookingsSuccess] = useState(false);

  const handleDetailsSubmit = (details) => {
    setClientDetails(details);
  };

  const handleSelectedService = (service) => {
    setSelectedService(service);
    setSelectedServiceId(service._id);
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

      // this triggers the confirmation modal
      setBookingsSuccess(true);
      console.log('booking success state set to true');

    } catch (error) {
      console.error("Error creating booking", error);
    }
  };

  const handleConfirmBooking = async () => {
    console.log("selected service:", selectedService);
    console.log("selected datetime:", selectedDateTime);
    console.log("client details:", clientDetails);

    if (selectedService && selectedDateTime && clientDetails) {
      const bookingData = {
        serviceId: selectedServiceId,
        dateTime: selectedDateTime,
        clientName: clientDetails.name,
        clientEmail: clientDetails.email,
        clientPhone: clientDetails.phone,
      };

      createBooking(bookingData);
    } else {
      console.warn("Please ensure all details are filled out");
    }
  };

  const handleCloseModal = () => {
    // closes the modal
    setBookingsSuccess(false);
    // navigates user back to homepage
    navigate("/");
  };

  return (
    <div className="p-8 max-w-md mx-auto">
      <ServiceSelection onServiceSelect={handleSelectedService} />
      <DateTimePicker onDateTimeSelect={setSelectedDateTime} />
      <ClientDetailsForm onDetailsSubmit={handleDetailsSubmit} />

      {selectedService &&
        selectedDateTime &&
        clientDetails &&
        !bookingsSuccess && (
          
            <Confirmation
              selectedService={selectedService}
              selectedDateTime={selectedDateTime}
              clientDetails={clientDetails}
              onConfirm={handleConfirmBooking}
            />
               )}
            {bookingsSuccess && (
              <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
                <div className="bg-white p-8 rounded shadow-lg max-w-md w-full">
                  <h2 className="text-xl font-semibold text-gray-500">
                    Thank You for Your Booking!
                  </h2>
                  <p>
                    Your appointment has been successfully booked. I look
                    forward to seeing you soon.{" "}
                  </p>
                  <div className="mt-4 flex-justify-end">
                    <button
                      onClick={handleCloseModal}
                      className="px-6 py-2 bg-gray-500 text-white rounded hover:bg-gray-500"
                    >
                      Back to Homepage
                    </button>
                  </div>
                </div>
              </div>
            )}
          
      
    </div>
  );
};

export default BookingForm;
