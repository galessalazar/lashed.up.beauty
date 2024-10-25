import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";

import Hero from "./components/Hero";

import Footer from "./components/Footer";
// needed an index.js to destructure
import { About, Services, Bookings } from "./pages";

const App = () => {
  const location = useLocation();
  return (
    <>
      <Navbar />
      {/* shows hero only on the homepage */}
      {location.pathname === "/" && <Hero />}
      <Routes>
        {/* <Route path='/' element={<Hero />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/bookings" element={<Bookings />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
