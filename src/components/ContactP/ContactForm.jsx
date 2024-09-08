import React, { useState } from "react";
import "./ContactForm.css";
export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    fitnessClass: "",
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
    console.log(formData);
    // Add form submission logic here (e.g., send to an API)
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="contact-form">
        <h1>Leave Your Info</h1>
        <div className="form-group">
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            placeholder="Full Name"
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Your Email"
          />
        </div>
        <div className="form-group">
          <select
            id="fitnessClass"
            name="fitnessClass"
            value={formData.fitnessClass}
            onChange={handleChange}
            required
          >
            <option value="">Select a class</option>
            <option value="yoga">Yoga</option>
            <option value="pilates">Pilates</option>
            <option value="crossfit">CrossFit</option>
            <option value="zumba">Zumba</option>
          </select>
        </div>
        <button type="submit" className="btn-of-Contact-form">Submit</button>
      </form>
    </>
  );
}
