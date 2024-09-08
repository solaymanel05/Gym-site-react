import React from "react";
import "./AboutP.css";
import imgCont from "../../assets/images/ssd.jpg";
import imgOne from "../../assets/images/galfour.jpg";
import imgtwo from "../../assets/images/galtwo.jpg";
import Nav from "../1.Navbar/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDumbbell,
  faMedal,
  faRankingStar,
} from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-regular-svg-icons";
import {} from "@fortawesome/free-brands-svg-icons";
import Footer from "../13.Footer/Footer";

export default function AboutP() {
  return (
    <>
      <Nav />
      <div className="cont-about">
        <img src={imgCont} alt="" />
        <div className='backg'></div>
        <h1>About Us</h1>
      </div>
      <div className="fitness-container">
        {/* First Section */}
        <div className="slice">
          <div className="left-slice">
            <FontAwesomeIcon className="icon-aboutP" icon={faMedal} />

            <h1>Welcome to Your Fitness Journey</h1>
            <p>
              Discover personalized workouts, nutrition plans, and expert advice
              to help you achieve your fitness goals. Join our community and
              start transforming your life today!
            </p>
          </div>
          <div className="right-slice">
            <img src={imgOne} alt="Fitness Activity" />
          </div>
        </div>

        {/* Second Section */}
        <div className="slice reverse">
          <div className="right-slice">
          <FontAwesomeIcon className="icon-aboutP" icon={faRankingStar} />
            <h1>Achieve Your Goals</h1>
            <p>
              Our programs are tailored to your needs, whether you are a
              beginner or an experienced athlete. Stay motivated with our
              supportive community and reach new heights in your fitness
              journey.
            </p>
          </div>
          <div className="left-slice">
            <img src={imgtwo} alt="Another Fitness Activity" />
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
