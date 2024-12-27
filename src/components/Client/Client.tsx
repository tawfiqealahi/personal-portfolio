import React, { useEffect, useState } from 'react';

type Props = {};

const Client: React.FC<Props> = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "https://raw.githubusercontent.com/tawfiqealahi/personal-portfolio/refs/heads/main/src/assets/about-tawfiq-alahi.jpg",
    "https://raw.githubusercontent.com/tawfiqealahi/personal-portfolio/refs/heads/main/src/assets/coding-in-pc.jpg",
    "https://raw.githubusercontent.com/tawfiqealahi/personal-portfolio/refs/heads/main/src/assets/coding.jpg",
    "https://raw.githubusercontent.com/tawfiqealahi/personal-portfolio/refs/heads/main/src/assets/smiling%20coder.jpg",
    "https://raw.githubusercontent.com/tawfiqealahi/personal-portfolio/refs/heads/main/src/assets/office%20work.jpg",
    "https://raw.githubusercontent.com/tawfiqealahi/personal-portfolio/refs/heads/main/src/assets/office%20code.jpg"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div id='client' className='text-center mt-12'>
      <h1 className='text-5xl font-bold'>People Says</h1>
      <p className="text-center mt-5">It is a long established fact that a reader will be of a page when established fact looking at its layout.</p>
      <div className="carousel rounded-full mt-5 w-48 h-48">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-item w-full ${index === currentIndex ? 'block' : 'hidden'}`}
          >
            <img
              src={image}
              className="w-full rounded-full"
              alt="Tailwind CSS Carousel component"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Client;