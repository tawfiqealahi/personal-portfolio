import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

type Props = {};

const Root: React.FC<Props> = () => {
  return (
    <div className='container mx-auto text-white font-[Montserrat]'>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  );
};

export default Root;