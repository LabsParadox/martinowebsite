import React, { useState, useEffect } from 'react';
import heroLogo from '../img/hero-logo.png';

const ParallaxImage = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleMouseMove = (event) => {
    const containerRect = document.body.getBoundingClientRect();
    const mouseX = event.clientX - containerRect.left;
    const mouseY = event.clientY - containerRect.top;
  
    const imageCenterX = containerRect.width / 2;
    const imageCenterY = containerRect.height / 2;
  
    const maxRotation = 50;
  
    const rotationX = (imageCenterY - mouseY) / containerRect.height * maxRotation;
    const rotationY = (mouseX - imageCenterX) / containerRect.width * maxRotation;
  
    setRotation({ x: rotationX, y: rotationY });
  };

  return (
    <div className="hero-logo-container">
      <img
        src={heroLogo}
        alt="martino icon logo"
        className="hero-logo"
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        }}
      />
      <img src={heroLogo} className="hero-logo-mobile" />
  </div>
  );
};

export default ParallaxImage;
