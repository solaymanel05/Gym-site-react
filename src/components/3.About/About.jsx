import React from "react";
import "./About.css";
import sportimg from "../../assets/images/SPORT.png"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDumbbell,
  faMedal,
  faWeightHanging,
} from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-regular-svg-icons";
import {} from "@fortawesome/free-brands-svg-icons";
export default function About() {
  return (
    <>
      <div className="about">
        <div className="main-about">
          <div className="left-about">
            <h4>WHO WE ARE</h4>
            <h1>Take Your Health And Body To Next Level</h1>
            <p>
              Take your health and body to the next level with our comprehensive
              program designed to help you reach your fitness goals.
            </p>
            <div className="icons-about">
              <div className="icon-about">
                <FontAwesomeIcon className="ic-ab" icon={faMedal} />
                <p>PROFESSIONAL TRAINERS</p>
              </div>
              <div className="icon-about">
                <FontAwesomeIcon className="ic-ab" icon={faWeightHanging} />
                <p>MODERN EQUIPMENTS</p>
              </div>
              <div className="icon-about">
                <FontAwesomeIcon className="ic-ab" icon={faDumbbell} />
                <p>FANCY GYM MACHINES</p>
              </div>
            </div>
            <Link to={"/ClassesP"}><button className="btn-about">Take a tour</button></Link>  
          </div>
          <div className="right-about">
            <div className="shape"></div>
            <div className="shapeTwo"></div>
            <div className="img-about">
              <img src={sportimg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
