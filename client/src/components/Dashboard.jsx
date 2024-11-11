import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [bookings, setBookings] = useState([]);
  const [services, setServices] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log("token", token);

    // if no token is found, redirect to login page
    if (!token) {
      navigate('/login');
      return;
    } else {

    fetchBookings(token);
    fetchServices(token);
    } 
  }, [navigate]);

    const fetchBookings = async (token) => {

      try {

        // retrieve token from localstorage
        // const token = localStorage.getItem('token');
        // if this doesnt work try ('http://localhost:5000/bookings') instead of /api
        const response = await axios.get("/api/bookings", {
          headers: {
            // adds token in the request header
            Authorization: `Bearer ${token}`,
            "Content-Type": 'application/json'
          },
        });
        setBookings(response.data);
      } catch (error) {
        setError('Error fetching bookings');
        console.error("error fetching bookings:", error.response ? error.response.data : error);
        console.log('request headers:', error.config.headers);
      }
    };

    const fetchServices = async (token) => {
      try {
        // i commented this out dk if i need it
        //  const token = localStorage.getItem('token');
         console.log('token from localstorage:', token);
        const response = await axios.get('/api/services', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setServices(response.data);
      } catch (error) {
        setError('Error fetching services');
        console.error('Error fetching services:', error);
      }
    };

    const serviceMap = services.reduce((acc, service) => {
      acc[service._id] = service.serviceName;
      return acc;
    },{});

    const getServiceName = (serviceId) => serviceMap[serviceId] || "Unknown Service";

    if (!localStorage.getItem('token')) {
      return null;
    }
    
  

  // func to get service name by id

  // const getServiceName = (serviceId) => {
  //   const service = services.find(s => s._id === serviceId);
  //   return service ? service.serviceName : 'Unknown Service';
  // };

  return (
    <div className="p-8">
      <h1 className="text-xl font-bold">Dashboard</h1>
        {error && <div className="text-red-500">{error}</div>}

      <h2 className="text-lg">Upcoming Bookings</h2>

      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>

        {/* table headers */}
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

      
      {/* mapping through bookings array and creating a table row for each booking */}
      {/* added func getservicename to map service ids to service names and used tolocalestring to format datetime for readability */}
        {bookings.map((booking) => (
          <tr key={booking._id} style={tableRowStyle}>
            <td style={tableCellStyle}>{booking.clientName}</td>
            <td style={tableCellStyle}>{getServiceName(booking.serviceId)}</td>
            <td style={tableCellStyle}>{new Date(booking.dateTime).toLocaleString()}</td>
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
