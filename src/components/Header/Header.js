import React from "react";
import { NavLink } from "react-router-dom";

import "./Header.css";

const Header = () => {
  return (
   <div className="container">
      <div className="header-container">
      <nav>
        <NavLink
          to="/"
          // activeStyle={{
          //   fontWeight: "bold",
          //   color: "white",
          //   textDecoration: "none",
          //   marginRight: "auto",
          //   padding: "10px",
          // }}
          className="btn btn-secondary" 
          
        >
          AMC All Drugs
        </NavLink>
        <div className="dropdown">
          <button
          className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Ayurvedic Medicine
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <NavLink className="dropdown-item" to = "/ayurvedic">Ayurvedic Generic Name</NavLink>
            <NavLink className="dropdown-item" to = "/ayur/brand">Ayurvedic Brand Name</NavLink>
            <NavLink className="dropdown-item" to = "/ayurvedic/indication">Ayurvedic Drugs By Indication</NavLink>
            <NavLink className="dropdown-item" to = "/ayurved/company">Ayurvedic Menufacturer Name</NavLink>
          </div>
        </div>
        <div className="dropdown">
          <button
          className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Unani Medicine
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <NavLink className="dropdown-item" to = "/unani">Unani Generic Name</NavLink>
            <NavLink className="dropdown-item" to = "/un/brand">Unani Brand Name</NavLink>
            <NavLink className="dropdown-item" to = "/unani/indication">Unani Drugs By Indication</NavLink>
            <NavLink className="dropdown-item" to = "/unan/company">Unani Menufacturer Name</NavLink>
          </div>
        </div>
        <div className="dropdown">
          <button
          className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Herbal Medicine
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <NavLink className="dropdown-item" to = "/herbal">Herbal Generic Name</NavLink>
            <NavLink className="dropdown-item" to = "/herbs/brand">Herbal Brand Name</NavLink>
            <NavLink className="dropdown-item" to = "/herbal/indication">Herbal Drugs By Indication</NavLink>
            <NavLink className="dropdown-item" to = "/herb/company">Herbal Menufacturer Name</NavLink>
          </div>
        </div>
        {/* <NavLink to="/homeo" 
         activeStyle={{
            fontWeight: "bold",
            color: "white",
            textDecoration: "none",
            marginRight: "auto",
            padding: "10px"
          }}>Homeopathic Medicine</NavLink> */}

       <div className="dropdown">
          <button
          className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            HomeoPathic Medicine
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <NavLink className="dropdown-item" to = "/homeo">Homeopathic Generic Name</NavLink>
            <NavLink className="dropdown-item" to = "/homeo/brand">Homeopathic Brand Name</NavLink>
            <NavLink className="dropdown-item" to = "/homeo/indication">Homeopathic Drugs By Indication</NavLink>
            <NavLink className="dropdown-item" to = "/homeo/company">Homeopathic Menufacturer Name</NavLink>
          </div>
        </div>
        <NavLink to="/about" 
         className="btn btn-secondary" 
          >About Me</NavLink>
        <NavLink to="/contact" 
        className="btn btn-secondary" >Contact Me</NavLink>
        <NavLink to="/registration" 
        className="btn btn-secondary" >Registration</NavLink>
          <NavLink to="/admin" 
         className="btn btn-secondary" >Admin</NavLink>
          
        
        
      </nav>
    </div>
   </div>
  );
};

export default Header;
