import React, { useState } from 'react';
import Nav from '../1.Navbar/Nav';
import "./LoginP.css"
import { Link } from "react-router-dom";

import imgCont from "../../assets/images/ssd.jpg";
import Footer from '../13.Footer/Footer';
export default function LoginP (){
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };
  return (
    <>
      <Nav/>
      <div className="cont-about">
        <img src={imgCont} alt="" />
        <div className='backg'></div>
        <h1>Sign Up</h1>
      </div>
      <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <p>Don't have an account? <Link to="/ContactP">Sign Up</Link></p>

    </div>
    <Footer/>
    </>
  );
}


