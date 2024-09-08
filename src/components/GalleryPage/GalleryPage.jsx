import React, { useState } from 'react';
import imgCont from "../../assets/images/ssd.jpg";
import "./GalleryPage.css"
import Nav from '../1.Navbar/Nav';
import { images } from '../../assets/data/data';
export default function GalleryPage (){
  const imagesPerPage = 6; // Number of images per page

const [currentPage, setCurrentPage] = useState(1);

const indexOfLastImage = currentPage * imagesPerPage;
const indexOfFirstImage = indexOfLastImage - imagesPerPage;
const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);

const totalPages = Math.ceil(images.length / imagesPerPage);

const handleNextPage = () => {
  if (currentPage < totalPages) {
    setCurrentPage(currentPage + 1);
  }
};
const handlePreviousPage = () => {
  if (currentPage > 1) {
    setCurrentPage(currentPage - 1);
  }
};
  return (
    <>
      <Nav/>
      <div className="cont-about">
        <img src={imgCont} alt="" />
        <div className='backg'></div>
        <h1>Gallery</h1>
      </div>
      <div className="gallery">
      <div className="image-grid">
        {currentImages.map((image, index) => (
          <div key={index} className="image-item">
            <img src={image} alt={`Fitness ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="pagination">
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          1
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          2
        </button>
      </div>
    </div>
    </>
  );
}


