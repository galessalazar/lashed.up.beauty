import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
// needed an index.js to destructure
import { Home, About, Services, Bookings } from "./pages";
import BookingForm from "./components/BookingForm";
import LoginForm from "./components/Login.Form.jsx";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./components/PrivateRoute.jsx";

const App = () => {
  const location = useLocation();
  return (
    <>
      <Navbar />
      {/* shows hero only on the homepage */}
      {location.pathname === "/" && <Hero />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/book-now" element={<BookingForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path ='/dashboard' element={
          <PrivateRoute><Dashboard /></PrivateRoute>
        } 
        />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
