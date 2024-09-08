import React from "react";
import "./Hero.css";
import imgone from '../../assets/images/cardOne.jpg';
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faDumbbell,faClockRotateLeft} from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-regular-svg-icons";
import {
  faLinkedinIn,
  faGithub,
  faFacebook,
  
} from "@fortawesome/free-brands-svg-icons";
import ImgHero from "../../assets/images/hero.jpg";
export default function Hero() {
  return (
    <>
      <div className="hero-container">
        <img src={ImgHero} alt="" />
        <div className="main-hero">
          <div className="title-special">
            <p>Find your Energy</p>
          </div>
          <h1>Change Your self</h1>
          <h4>Start Now</h4>
          <Link to={"/ClassesP"}><button className="btnClassOne">Our classes</button></Link>
        </div>

        <div className="social">
          <h2 className="share">Share</h2>
          <div className="line"></div>
          <div className="icons-social">
            {" "}
            <FontAwesomeIcon className="icon-h" icon={faLinkedinIn} />
            <FontAwesomeIcon className="icon-h" icon={faGithub} />
            <FontAwesomeIcon className="icon-h" icon={faFacebook} />
          </div>
        </div>

        <div className="cards">
          <div className="card">
            {/* <img className="card-image" src={imgone} alt="" /> */}
            <div className="main-card">
              <div>
              <FontAwesomeIcon  className="card-icon" icon={faClockRotateLeft} />


              </div>
              <h1>Progression</h1>
              <p>
                Our team of experts will work with you to create a customized
                plan that helps you achieve success one step at a time
              </p>
            </div>
          </div>
          <div className="card">
            <div className="main-card">
              <div>
              <FontAwesomeIcon className="card-icon" icon={faDumbbell} />

              </div>
              <h1>NUTRITIONS</h1>
              <p>
                Our team of experts will work with you to create a customized
                plan that helps you achieve success one step at a time
              </p>
            </div>
          </div>

          <div className="card">
            <div className="main-card">
              <div>
              <FontAwesomeIcon className="card-icon" icon={faDumbbell} />

              </div>
              <h1>WORKOUT</h1>
              <p>
                Our team of experts will work with you to create a customized
                plan that helps you achieve success one step at a time
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
