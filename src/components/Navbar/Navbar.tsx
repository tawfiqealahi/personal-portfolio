import React from 'react';
import { NavLink } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';

type Props = {};

const Navbar: React.FC<Props> = () => {
    const links = <>
    <li><NavLink to='/'>Home</NavLink> </li>
    <li><NavLink to='/jobs'>About</NavLink> </li>
    <li><NavLink to='/applied'>Services</NavLink></li>
    <li><NavLink to='/statistics'>Client</NavLink></li>
    <li><NavLink to='/blog'>Portfolio</NavLink></li>
    <li><NavLink to='/portfolio'>Blog</NavLink></li>
    <li><NavLink to='/portfolio'>Contact</NavLink></li>
    </>
  return (
    <div>
      {/* navbar  start*/}
      <div className="navbar bg-base-100">
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
          <NavLink to='/'><a className="btn btn-ghost md:text-6xl text-primary pointer-events-none font-extrabold">
            <TypeAnimation
            preRenderFirstString={true}
            sequence={[
                'Tawfiq',500,
                'TawfiqAlahi',500,
                '',500,
            ]} 
            
            // style={{}}
            repeat={Infinity}
            ></TypeAnimation>
             </a></NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn btn-primary">Apply Now</a>
        </div>
      </div>
      {/* navbar end */}
    </div>  );
};

export default Navbar;