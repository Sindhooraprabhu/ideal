// App.js
import React from "react";
import  { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage"; // Add if you've created it
import Login from "./pages/Login"; // Add if created
import Cart from "./components/Cart";
import OffersPage from "./pages/OffersPage";
import LocationsPage from './pages/LocationsPage';
import ContactPage from './pages/ContactPage'; // Add if created

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/offers" element={<OffersPage />} />
        <Route path="/locations" element={<LocationsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/cart" element={<Cart />} />
        {/* You can add more pages like Offers, ContactUs, Locations later */}
      </Routes>
    </Router>
  );
  const [darkMode, setDarkMode] = useState(false);

return (
  <div className={darkMode ? "bg-dark text-white" : "bg-light text-dark"}>
    <NavBar toggleDarkMode={() => setDarkMode(!darkMode)} />
    <Routes>...</Routes>
  </div>
);
};


export default App;

