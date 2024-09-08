import React from 'react';
import contac from "../../assets/images/contac.jpg"
import "./CallUs.css"
import { Link } from "react-router-dom";

export default function CallUs (){
  return (
    <>
    <div className="contact-container">
        <img src={contac} alt="" />
        <div className="content-contact">
          <h1>Need a Fitness Trainer?</h1>
          <h2><span className="contact-spa">Call:</span>+246-553666</h2>
          <Link to={"./callUs"}>  <button>join now</button> </Link>
        </div>
      </div>
      
      
    </>
  );
}


