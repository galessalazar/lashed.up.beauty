import React, { useEffect, useState } from "react";
import axios from "axios";
const Dashboard = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get("/api/bookings");
        setBookings(response.data);
      } catch (error) {
        console.error("error fetching bookings:", error);
      }
    };

    fetchBookings();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-xl font-bold">Dashboard</h1>
      <h2 className="text-lg">Upcoming Bookings</h2>
      <ul>
        {bookings.map((booking) => (
          <li key={booking._id}>
            <p>Service: {booking.serviceName}</p>
            <p>Date: {new Date(booking.dateTime).toLocaleString()}</p>
            <p>Client: {booking.clientName}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
