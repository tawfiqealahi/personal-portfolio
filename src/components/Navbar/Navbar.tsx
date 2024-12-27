import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

type Props = {};

const Navbar: React.FC<Props> = () => {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => setScrolled(window.scrollY > 50);
      window.addEventListener('scroll', handleScroll);

      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const links = <>
     <li className="hover:text-[#007BFF]">
        <a href="#banner">Home</a>
      </li>
      <li className="hover:text-[#007BFF]">
        <a href="#about">About</a>
      </li>
      <li className="hover:text-[#007BFF]">
        <a href="#services">Services</a>
      </li>
      <li className="hover:text-[#007BFF]">
        <a href="#client">Client</a>
      </li>
      <li className="hover:text-[#007BFF]">
        <a href="#portfolio">Portfolio</a>
      </li>
      <li className="hover:text-[#007BFF]">
        <a href="#blog">Blog</a>
      </li>
      <li className="hover:text-[#007BFF]">
        <a href="#contact">Contact</a>
      </li>
      
    </>
  return (
    <div  className='h-20 '>
      {/* navbar  start*/}
      <div  className={`navbar   fixed top-0 left-1/2 transform -translate-x-1/2  transition-all duration-300 ${
          scrolled ? 'bg-black shadow-xl' : 'bg-transparent'
        }  container mx-auto z-10 `}>
        <div className="navbar-start  ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              {links}
            </ul>
          </div>
          <NavLink to='/'><a className="btn btn-ghost text-3xl md:text-6xl text-[#007BFF] pointer-events-none font-extrabold">
           TawfiqAlahi 
             </a></NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu  menu-horizontal px-1">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn  text-white text-lg bg-[#007BFF]">Download CV</a>
        </div>
      </div>
      {/* navbar end */}
    </div>  );
};

export default Navbar;