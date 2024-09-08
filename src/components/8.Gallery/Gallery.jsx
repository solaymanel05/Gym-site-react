import React from "react";
import "./Gallery.css";
import imgIc from "../../assets/images/tran.png"
import { galleryImages } from "../../assets/data/data";
export default function Gallery ()  {
  return (
    <>
      <div className="gallery">
        <img className="imgGal" src={imgIc} alt="" />
        <div className="text-gallery">
          <h4>CORE REVIVE GALLERY</h4>
          <h1>Our Workplace Gallery</h1>
          <p>
            Our Workplace Gallery features modern office, team collaboration,
            and fun culture. Attracts talents and showcases company's work
            atmosphere.
          </p>
        </div>
        <div className="gallery-container">
        {galleryImages.map((image) => (
          <div key={image.id} className="gallery-item">
            <img src={image.img} alt={image.alt} className="gallery-image" />
          </div>
        ))}
      </div>
      </div>
    </>
  );
};


