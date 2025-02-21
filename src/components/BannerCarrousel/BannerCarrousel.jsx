import React, { useState, useEffect } from "react";
import "./BannerCarrousel.css";

const BannerCarrousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
  
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
  
    return () => clearInterval(interval);
  });

  return (
    <div className="banner-carrousel-image">
      <img src={`${import.meta.env.BASE_URL}${images[currentIndex]}`} alt="Imagem" className="image-carrousel" />
    </div>
  );
};

export default BannerCarrousel;
