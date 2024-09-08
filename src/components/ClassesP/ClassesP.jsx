import React from 'react';
import Nav from '../1.Navbar/Nav';
import "./ClassesP.css"
import imgCont from "../../assets/images/ssd.jpg";
import Footer from '../13.Footer/Footer';
import { classesImages} from '../../assets/data/data';
import imgIc from "../../assets/images/tran.png"

export default function ClassesP  () {
  return (
    <>
    <Nav/>
       <div className="cont-about">
        <img src={imgCont} alt="" />
        <div className='backg'></div>
        <h1>Classes</h1>
      </div>
      
      <div className="classesP">
        <img className="imgGal" src={imgIc} alt="" />
    
        <div className="classesP-container">
        {classesImages.map((image) => (
          <div key={image.id} className="classesP-item">
            <img src={image.img} alt={image.alt} className="classesP-image" />
            <div className="overlay">
              <h3 className="image-title">{image.title}</h3>
              <p className="image-date">{image.date}</p>
              <button className="image-btn">{image.buttonText}</button>
            </div>
          </div>
        ))}
      </div>
      </div>
    
     <Footer/>
      
    </>
  );
}

