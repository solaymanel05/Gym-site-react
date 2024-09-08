import React from "react";
import "./Info.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faDumbbell,
  faMedal,
  faRankingStar,
} from "@fortawesome/free-solid-svg-icons";
import { faCirclePlay } from "@fortawesome/free-regular-svg-icons";
import {} from "@fortawesome/free-brands-svg-icons";
import main from "../../assets/images/main.jpg";
import leftImg from "../../assets/images/img-info.jpg";
export default function Info() {
  return (
    <>
      <div className="info">
        <img src={main} alt="" />
        <div className="top-info">
          <h1>We Are Always Providing Best Fitness Service For You</h1>
          <Link to={"/ContactP"}><button className="btn-info">Join with us</button></Link>  
        </div>
        <div className="info-details">
          <div className="left-info">
            <img src={leftImg} alt="" />
            <FontAwesomeIcon className="left-icon-info" icon={faCirclePlay} />
          </div>
          <div className="right-info">
            <div className="title-info">
              <p>Find your Energy</p>
            </div>
            <h1>We Can Give A Shape Of Your Body Here!</h1>
            <h6 className="para-info">
              At Gymate, we are dedicated to helping you achieve the body of
              your dreams. Our expert trainers and nutritionists will work with
              you to create a personalized fitness and nutrition plan that helps
              you reach your specific goals.
            </h6>
            <div className="main-icon-info">
              <div className="icon-info">
                <div className="parent-icon-ic">
                  {" "}
                  <FontAwesomeIcon className="info-ic" icon={faMedal} />
                </div>
                <h4>Free Fitness Training</h4>
              </div>
              <div className="icon-info">
                <div className="parent-icon-ic">
                  {" "}
                  <FontAwesomeIcon className="info-ic" icon={faDumbbell} />
                </div>
                <h4>Modern Gym Equipments</h4>
              </div>
              <div className="icon-info">
                <div className="parent-icon-ic">
                  {" "}
                  <FontAwesomeIcon className="info-ic" icon={faRankingStar} />
                </div>
                <h4>Gym Bag Equipments</h4>
              </div>
            </div>
           <Link to={"/ContactP"}> <button className="right-btn-info">Our Classes</button></Link> 
          </div>
        </div>
      </div>
    </>
  );
}
