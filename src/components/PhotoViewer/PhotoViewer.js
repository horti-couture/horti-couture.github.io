// src/components/PhotoViewer/PhotoViewer.js
import React, { useState } from 'react';
import './PhotoViewer.css';

// Manually import the images
import photo1 from '../../assets/ResinPics/photo1.jpg';
import photo2 from '../../assets/ResinPics/photo2.jpeg';
import photo3 from '../../assets/ResinPics/photo3.jpeg';

// Store the images in an array
const images = [photo1, photo2, photo3];

console.log(images); // Debug: Check resolved image paths

const PhotoViewer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="photo-viewer">
      <h2>Customer Photos</h2>
      <div className="photo-container">
        <button onClick={handlePrev} className="nav-button">&lt;</button>
        <img src={images[currentIndex]} alt="Customer Resin Planter" className="photo" />
        <button onClick={handleNext} className="nav-button">&gt;</button>
      </div>
      <div className="photo-counter">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
};

export default PhotoViewer;