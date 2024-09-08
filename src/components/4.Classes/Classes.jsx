import React from "react";
import "./Classes.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDumbbell,
  faMedal,
  faWeightHanging,
} from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-regular-svg-icons";
import {} from "@fortawesome/free-brands-svg-icons";
import one from "../../assets/images/one.jpg";
import two from "../../assets/images/two.jpg";
import three from "../../assets/images/three.jpg";
import four from "../../assets/images/four.jpg";
import five from "../../assets/images/five.jpg";
import six from "../../assets/images/six.jpg";
export default function Classes() {
  return (
    <>
      <div className="classes">
        <h4>OUR FEATURED CLASS</h4>
        <h1>We Are Offering Best Flexible Classes</h1>

        <div class="grid-container">
          <div class="item item-1">
            <img src={one} alt="" />
            <h1>workout</h1>
            <p>wednesday 9:00am - 11:00am</p>
            <div className="class-shape"></div>
            <FontAwesomeIcon className="class-ic" icon={faMedal} />
          </div>
          <div class="item item-2"></div>
          <div class="item item-3">
            <img src={two} alt="" />
            <h1>meditation</h1>
            <p>wednesday 9:00am - 11:00am</p>
            <div className="class-shape"></div>
            <FontAwesomeIcon className="class-ic" icon={faMedal} />
          </div>
          <div class="item item-4">
            <img src={three} alt="" />
            <h1>power</h1>
            <p>wednesday 9:00am - 11:00am</p>
            <div className="class-shape"></div>
            <FontAwesomeIcon className="class-ic" icon={faMedal} />
          </div>
          <div class="item item-5">
            <img src={four} alt="" />
            <h1>Energy</h1>
            <p>wednesday 9:00am - 11:00am</p>
            <div className="class-shape"></div>
            <FontAwesomeIcon className="class-ic" icon={faMedal} />

          </div>
          <div class="item item-6">
            <img src={five} alt="" />
            <h1>Relax</h1>
            <p>wednesday 9:00am - 11:00am</p>
            <div className="class-shape"></div>
            <FontAwesomeIcon className="class-ic" icon={faMedal} />
          </div>
          <div class="item item-7">
            <img src={six} alt="" />
            <h1>Relax</h1>
            <p>wednesday 9:00am - 11:00am</p>
            <div className="class-shape"></div>
            <FontAwesomeIcon className="class-ic" icon={faMedal} />
          </div>
          <div class="item item-8"></div>
        </div>
      </div>
    </>
  );
}
