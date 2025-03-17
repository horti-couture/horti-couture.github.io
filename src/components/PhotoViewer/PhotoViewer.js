import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './PhotoViewer.css';

// Manually import images from the correct folder
import resinPhoto1 from '../../assets/ResinPics/photo1.jpeg';
import resinPhoto2 from '../../assets/ResinPics/photo2.jpeg';
import resinPhoto3 from '../../assets/ResinPics/photo3.jpeg';
import resinPhoto4 from '../../assets/ResinPics/photo4.jpeg';

import fiberglassPhoto1 from '../../assets/Fiberglasspics/photo1.jpeg';
import fiberglassPhoto2 from '../../assets/Fiberglasspics/photo2.jpeg';
import fiberglassPhoto3 from '../../assets/Fiberglasspics/photo3.jpeg';
import fiberglassPhoto4 from '../../assets/Fiberglasspics/photo4.jpeg';

import ceramicPhoto1 from '../../assets/Ceramicpics/photo1.jpeg';
import ceramicPhoto2 from '../../assets/Ceramicpics/photo2.jpeg';
import ceramicPhoto3 from '../../assets/Ceramicpics/photo3.jpeg';
import ceramicPhoto4 from '../../assets/Ceramicpics/photo4.jpeg';

import miniplantersPhoto1 from '../../assets/Miniplanterspics/photo1.jpeg';
import miniplantersPhoto2 from '../../assets/Miniplanterspics/photo2.jpeg';
import miniplantersPhoto3 from '../../assets/Miniplanterspics/photo3.jpeg';
import miniplantersPhoto4 from '../../assets/Miniplanterspics/photo4.jpeg';

// Image sets for different product categories
const imageSets = {
  Resin: [resinPhoto1, resinPhoto2, resinPhoto3, resinPhoto4],
  Fiberglass: [fiberglassPhoto1, fiberglassPhoto2, fiberglassPhoto3, fiberglassPhoto4],
  Ceramic: [ceramicPhoto1, ceramicPhoto2, ceramicPhoto3, ceramicPhoto4],
  Miniplanters: [miniplantersPhoto1, miniplantersPhoto2, miniplantersPhoto3, miniplantersPhoto4],
};

const PhotoViewer = ({ category }) => {
  const images = imageSets[category] || [];
  const [currentIndex, setCurrentIndex] = useState(0);

  if (images.length === 0) return <p>No images available.</p>;

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="photo-viewer">
      <h2>{category} Planter Photos</h2>
      <div className="photo-container">
        <button onClick={handlePrev} className="nav-button">&lt;</button>
        <img src={images[currentIndex]} alt={`${category} Planter`} className="photo" />
        <button onClick={handleNext} className="nav-button">&gt;</button>
      </div>
      <div className="photo-counter">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
};

PhotoViewer.propTypes = {
  category: PropTypes.string.isRequired,
};

export default PhotoViewer;
