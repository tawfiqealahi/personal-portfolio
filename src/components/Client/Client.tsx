import React, { useEffect, useState } from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

type Props = {};

const Client: React.FC<Props> = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        "https://raw.githubusercontent.com/tawfiqealahi/personal-portfolio/refs/heads/main/src/assets/about-tawfiq-alahi.jpg",
        "https://raw.githubusercontent.com/tawfiqealahi/personal-portfolio/refs/heads/main/src/assets/client/2.jpg",
        "https://raw.githubusercontent.com/tawfiqealahi/personal-portfolio/refs/heads/main/src/assets/client/3.jpg",
        "https://raw.githubusercontent.com/tawfiqealahi/personal-portfolio/refs/heads/main/src/assets/client/4.jpg",
        "https://raw.githubusercontent.com/tawfiqealahi/personal-portfolio/refs/heads/main/src/assets/client/5.jpg",
        "https://raw.githubusercontent.com/tawfiqealahi/personal-portfolio/refs/heads/main/src/assets/client/2.jpg"
    ];
    const text =[
        "Tawfiq's expertise in React.js transformed our project into a user-friendly masterpiece.",
        "Highly professional and reliable. Tawfiq exceeded our expectations in web design.",
        "Effortless communication and exceptional results. Highly recommend his services!",
         "Delivered a fully responsive, beautiful website on time. Truly a skilled developer.",
         "Tawfiq's attention to detail and creative solutions were invaluable to our success.",
          "Working with Tawfiq was a pleasure. His designs and technical skills are top-notch."
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div id='client' className='text-center pt-20  h-[90vh] mt-2 '>
            <h1 className='text-5xl mt-10 font-bold '>People Says</h1>
            <p className="text-center mt-10">It is a long established fact that a reader will be of a page when established fact looking at its layout.</p>
            <FaQuoteLeft className=' text-2xl mx-auto mt-32 md:text-7xl text-[#007BFF]' />
            <div className="carousel rounded-full mt-12 w-40 h-40">
            

                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`carousel-item w-full ${index === currentIndex ? 'block' : 'hidden'}`}
                    >
                        <img
                            src={image}
                            className="w-full rounded-full border-4 border-[#007BFF]"
                            alt="Tailwind CSS Carousel component"
                        />
                    </div>
                ))}
            </div>
            <p className="mt-10 mb-5">{text[currentIndex]}</p>
            <p>(Demo)</p>
        </div>
    );
};

export default Client;