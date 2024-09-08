import React from "react";
import "./Details.css";
import DataCardOne from "../../assets/data/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {

} from "@fortawesome/free-solid-svg-icons";
import {  } from "@fortawesome/free-regular-svg-icons";
import {faFacebook,faInstagram,faTwitter,faYoutube} from "@fortawesome/free-brands-svg-icons";

export default function Details() {
  return (
    <>
      <div className="detailsOne">
        <div className="text-det-one">
          <h4>GYM TRAINERS</h4>
          <h1>Team Of Expert Coaches</h1>
          <p>
            Expert team of coaches helps you succeed in any goal, personalized
            guidance and motivation provided!
          </p>
        </div>

        <div className="card-detailsOne">
        <div>
      {DataCardOne.map((card, index) => (
        <div key={index} className="card">
          <img src={card.img} alt={card.name} />
          <h2>{card.name}</h2>
          <p>{card.type}</p>-
          <div className="flex">
          <FontAwesomeIcon className="icon-det" icon={faFacebook} />
          <FontAwesomeIcon className="icon-det" icon={faInstagram} />
          <FontAwesomeIcon className="icon-det" icon={faTwitter} />
          <FontAwesomeIcon className="icon-det" icon={faYoutube} />
          </div>
        </div>
      ))}
    </div>
        </div>
      </div>
    </>
  );
}
