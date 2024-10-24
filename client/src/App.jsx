import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Hero from "./components/Hero";

import Footer from "./components/Footer";
import { About, Services, Bookings } from "./pages";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/bookings' element={<Bookings />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
