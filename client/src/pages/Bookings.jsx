import React, { useState } from "react";
import Modal from "../components/modal";
import BookingForm from "../components/BookingForm";
import ServiceSelection from "../components/ServiceSelection";

const Bookings = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      {/* <h1>Bookings</h1> */}

      {/* modal to view policies */}
      <button
        onClick={toggleModal}
        className="mt-10 bg-gray-400 text-black px-4 py-2 rounded"
      >
        View Policies
      </button>

      <Modal isOpen={isModalOpen} onClose={toggleModal}>
        <h2 className="text-2xl font-bold mb-2">POLICIES AND PROCEDURES</h2>
        <p>DM ME TO BOOK OR BOOK ONLINE</p>
        <ul className="list-disc list-inside">
          <li>$20 DEPOSIT REQUIRED TO BOOK</li>
          <li>NO EXTRA GUESTSK</li>
          <li>Service Time is (2-3 1/2 hrs)</li>
          <li>Show up 10 mins prior to appt (first time clients)</li>
        </ul>
        <p>
          Please be aware these policies and procedures are in place for a
          reason. If you have any questions or concerns please message me!
        </p>
      </Modal>
      <div className="flex justify-center items-start mt-8 space-x-4">

      <div className="w-1/2 p-4 border rounded">
        <ServiceSelection />
      </div>

        <div className="w-1/2 p-4 border rounded">
          {/* <h2 className="text-xl font-bold">Services</h2> */}

          <BookingForm />
        </div>
      </div>
    </div>
  );
};

export default Bookings;
