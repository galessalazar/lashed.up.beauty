const Confirmation = ({ selectedService, selectedDateTime, clientDetails, onConfirm }) => {

  console.log('Selected Service:', selectedService);
  
  return (
    <div className="mt-4">
      <h2 className="text-lg font semibold">Confirm Your Booking</h2>
      <p>Service: {selectedService.name}</p>
      <p>Price: {selectedService.price}</p>
      <p>Date & Time: {selectedDateTime.toLocaleString()}</p>
      <h3 className="font-semibold">Client Details:</h3>
      <p>Name: {clientDetails.name}</p>
      <p>Email: {clientDetails.email}</p>
      <p>Phone: {clientDetails.phone}</p>

      <button onClick={onConfirm} className="mt-4 px-4 py-2 bg-gray-500 text-white rounded">
        Confirm Appointment
      </button>
    </div>
  );
};

export default Confirmation;
