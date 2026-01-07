import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="navbar">
        <div className="left">
          {/* ✅ HAMBURGER BUTTON */}
          <button
            className={`hamburger ${menuOpen ? "active" : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* ✅ LOGO WITH PROPER CLASS */}
          <div className="logo">
            <img src="/images/homedecor.svg" alt="Home Decor Logo" className="logo-img" />
          </div>
        </div>

        {/* ✅ DESKTOP NAV */}
        <nav className={`desktop-nav ${menuOpen ? "active" : ""}`}>
          <NavLink 
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            to="/" 
            onClick={closeMenu}
          >
            Home
          </NavLink>
          <NavLink 
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            to="/products" 
            onClick={closeMenu}
          >
            Products
          </NavLink>
          <NavLink 
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            to="/about" 
            onClick={closeMenu}
          >
            About
          </NavLink>
          <NavLink 
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            to="/gallery" 
            onClick={closeMenu}
          >
            Gallery
          </NavLink>
          <NavLink 
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            to="/contact" 
            onClick={closeMenu}
          >
            Contact
          </NavLink>
        </nav>
      </header>

      {/* ✅ MOBILE BACKDROP */}
      {menuOpen && <div className="mobile-backdrop" onClick={closeMenu} />}
    </>
  );
};

export default Navbar;
