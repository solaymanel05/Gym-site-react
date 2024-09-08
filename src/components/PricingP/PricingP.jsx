import React from 'react';
import Nav from '../1.Navbar/Nav';
import "./PricingP.css"
import imgCont from "../../assets/images/ssd.jpg";
import Footer from '../13.Footer/Footer';
import Pricing from '../10.Pricing/Pricing';
export default function PricingP(){
  return (
    <>  
    <Nav/>
       <div className="cont-about">
        <img src={imgCont} alt="" />
        <div className='backg'></div>
        <h1>Pricing</h1>
      </div>
      <Pricing/>
    
     <Footer/>
    </>
  );
}


