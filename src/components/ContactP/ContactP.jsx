import React from "react";
import Nav from "../1.Navbar/Nav";
import "./ContactP.css";
import imgCont from "../../assets/images/ssd.jpg";
import Footer from "../13.Footer/Footer";
import ContactForm from "./ContactForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDumbbell,
  faClockRotateLeft,
} from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-regular-svg-icons";
import {
  faLinkedinIn,
  faGithub,
  faFacebook,
  faInstagram,
  faPinterest,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
export default function ContactP() {
  return (
    <>
      <Nav />
      <div className="cont-about">
        <img src={imgCont} alt="" />
        <div className="backg"></div>
        <h1>Contact</h1>
      </div>
      <div className="contact-page">
        <div className="left-slice">
          <h2>Your Fitness Journey Starts Here.</h2>
          <h5>
            Ready to embark on a healthier lifestyle? We’re here to guide you.
            If you have any questions about our classes, programs, or need some
            fitness advice, don’t hesitate to reach out. Let’s start your
            fitness journey together!
          </h5>
          <div className="info-contactP">
            <div className="info-Location">
              <h4>New York City, USA</h4>
              <div className="line-of-info"></div>
              <p>85 Briston Mint Street, London, E1 8LG, USA</p>
            </div>
            <div className="info-date">
              <h4>Opening Hours</h4>
              <div className="line-of-info"></div>
              <div className="info-date-of-contactP">
                <span>Mon to Fri: 7:30 am — 1:00 am</span>
                <span>Mon to Fri: 7:30 am — 1:00 am</span>
              </div>
            </div>
          </div>

          <div className="info-contactP">
            <div className="info-Location">
              <h4>Information</h4>
              <div className="line-of-info"></div>
              <p>+900-173-4367 coreReviv@gymail.com</p>
            </div>
            <div className="info-date">
              <h4>Follow us On</h4>
              <div className="line-of-info"></div>
              <div className="icon-contactP">
                <FontAwesomeIcon className="icon-Contact" icon={faXTwitter} />
                <FontAwesomeIcon className="icon-Contact" icon={faPinterest} />
                <FontAwesomeIcon className="icon-Contact" icon={faFacebook} />
                <FontAwesomeIcon className="icon-Contact" icon={faInstagram} />
              </div>
            </div>
          </div>
        </div>
        <div className="right-slice">
          <ContactForm />
        </div>
      </div>
      <Footer />
    </>
  );
}
