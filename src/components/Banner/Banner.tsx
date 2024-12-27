import React from 'react';
import { TypeAnimation } from 'react-type-animation';

type Props = {};

const Banner: React.FC<Props> = () => {
  return (
<div
  className="hero  min-h-screen mt-[-5rem]"
  style={{
    backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
  }}>
  <div className="hero-overlay bg-opacity-80"></div>
  <div className="hero-content text-neutral-content  text-center">
    <div className=" text-white">

      <h1 className="mb-16 text-lg md:text-2xl font-semibold">Turning Ideas into Interactive Digital Experiences</h1>
      <h1 className="mb-5 text-lg md:text-3xl font-bold">Welcome</h1>
      <h1 className="mb-5  text-2xl md:text-6xl text-center font-bold whitespace-nowrap ">
      <TypeAnimation 
  sequence={[
    // Same substring at the start will only be typed once, initially
    'I am Tawfiq Alahi.',
    2000,
    ' I am a Web Designer.',
    2000,
    'I am a Web Developer.',
    2000,
    'I am expert in ReactJS.',
    2000,
  ]}
  speed={10}
//   style={{ fontSize: '2em' }}
  repeat={Infinity}
/>
      </h1>
      <p className="mb-5">
      It is a long established fact that a reader will be of a page when established fact looking at its layout.
      </p>
      <a href='https://drive.google.com/file/d/13G-I_q-45CuD2R7O9hgkTICeghhFGVoC/view?usp=sharing' className="btn text-white text-lg mt-24 bg-[#007BFF]">Download CV</a>
      </div>
  </div>
</div>  );
};

export default Banner;