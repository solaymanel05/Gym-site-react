import React from 'react';
import "./Footer.css"
import LogoIc from '../../assets/images/footerIc.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {

} from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-regular-svg-icons";
import { faFacebook,faTwitter,faInstagram} from "@fortawesome/free-brands-svg-icons";
export default function Footer (){
  return (
    <>
     <footer className="footer">
      <img src={LogoIc} alt="" />
      <div className="footer-left">
        <h1>Core revive</h1>
        <p className="footer-description">
          Welcome to our fitness website. We offer a variety of classes to help you stay fit and healthy.
        </p>
        <div className="footer-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
        <p className="footer-copy">© 2024 Your Fitness Website</p>
      </div>
      <div className='main-footer'>
      <div className="footer-center">
        <h3>Our Classes</h3>
        <span className='line-of-footer'></span>
        <ul>
          <li>Yoga</li>
          <li>Pilates</li>
          <li>Cardio</li>
          <li>Strength Training</li>
        </ul>
      </div>
      <div className="footer-right">
        <h3>Working Hours</h3>
        <span className='line-of-footer'></span>
        <ul>
          <li>Monday - Friday: 6am - 9pm</li>
          <li>Saturday: 8am - 6pm</li>
          <li>Sunday: Closed</li>
        </ul>
      </div>
      </div>
    
    </footer>
      
    </>
  );
}


