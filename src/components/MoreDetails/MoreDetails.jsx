import React from "react";
import "./MoreDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import galone from "../../assets/images/galone.jpg";
import galtwo from "../../assets/images/galtwo.jpg";
import galthree from "../../assets/images/galthree.jpg";
import galfour from "../../assets/images/galfour.jpg";
import galfive from "../../assets/images/galfive.jpg";
import galsix from "../../assets/images/galsix.jpg";
import {
  faXmark,
  faLocation,
  faPhone,
  faChildDress,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
export default function MoreDetails({ onClose }) {
  return (
    <>
      <div className="more-details-container">
        <div className="main-top-details">
          <h3>Core revive</h3>
          <div onClick={onClose}>
            <FontAwesomeIcon icon={faXmark} className="btnClose" />
          </div>
        </div>

        <div className="content-of-details">
          <h3>About Us</h3>
          <p>
            Find out who we are and what makes us unique. We are a
            community-driven gym committed to providing personalized fitness
            experiences for all levels of fitness enthusiasts in a welcoming and
            supportive environment.
          </p>
        </div>
        <div className="more-details-gallery">
          <h3>Gallery</h3>
          <div className="main-moreDetails-gallery">
          <img src={galone} alt="" />
          <img src={galtwo} alt="" />
          <img src={galthree} alt="" />
          <img src={galfour} alt="" />
          <img src={galfive} alt="" />
          <img src={galsix} alt="" />
          </div>
        
        </div>
        <div className="icons-more-details">
          <h3>contact info</h3>
          <div className="cont-icons-more-det">
          <FontAwesomeIcon icon={faLocation} className="icon-of-more-det" />
          <p>59 Street, House Newyork City</p>
           
          </div>
          <div className="cont-icons-more-det">
          <FontAwesomeIcon icon={faPhone} className="icon-of-more-det"/>
          <p>+123-678800090</p>
           
          </div>
          <div className="cont-icons-more-det">
          <FontAwesomeIcon icon={faChildDress} className="icon-of-more-det"/>
          <p>elkhalidi77@gmail.com</p>
           
          </div>

        </div>
        <div className="social-more-details">
          <h3>Follow us</h3>
          <div className="main-icons-more-details">
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faInstagram} />
          </div>
          

        </div>
      </div>
    </>
  );
}
