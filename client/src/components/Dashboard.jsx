import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        // if this doesnt work try ('http://localhost:5000/bookings') instead of /api
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

      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
        <thead>
          <tr>
            <th style={tableHeaderStyle}>Client Name</th>
            <th style={tableHeaderStyle}>Service</th>
            <th style={tableHeaderStyle}>Date & Time</th>
            <th style={tableHeaderStyle}>Email</th>
            <th style={tableHeaderStyle}>Phone</th>
            
          </tr>
        </thead>

        <tbody>

      
      <h2 className="text-lg">Upcoming Bookings</h2>
      
        {bookings.map((booking) => (
          <tr key={booking._id} style={tableRowStyle}>
            <td style={tableCellStyle}>{booking.clientName}</td>
            <td style={tableCellStyle}>{booking.serviceName}</td>
            <td style={tableCellStyle}>{booking.dateTime}</td>
            <td style={tableCellStyle}>{booking.clientEmail}</td>
            <td style={tableCellStyle}>{booking.clientPhone}</td>
            <td style={tableCellStyle}>
              <button style={actionButtonStyle}>Edit</button>
              <button style={actionButtonStyle}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

const tableHeaderStyle = {
  padding: '10px',
  borderBottom: '2px solid #ddd',
  backgroundColor: '#f3f3f3',
  textAlign: 'left',
};

const tableRowStyle = {
  borderBottom: '1px solid #ddd',
}

const tableCellStyle = {
  padding: '10px',
}


const actionButtonStyle = {
  marginRight: '10px',
  padding: '5px 10px',
  cursor: 'pointer',
}
export default Dashboard;
