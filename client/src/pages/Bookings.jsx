import rules from '../assets/images/rules.png';

const Bookings = () => {
  return <div style= {{ textAlign: 'center', padding: '20px' }}>
    <h1>Bookings</h1>
    <img src={rules} alt='Please Read for Booking Details' style={{ maxWidth: '100%', height: 'auto' }} />

    </div>
};

export default Bookings;
