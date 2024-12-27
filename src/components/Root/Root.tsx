import React from 'react';
import Navbar from '../Navbar/Navbar';

import { Outlet } from 'react-router-dom';

type Props = {};

const Root: React.FC<Props> = () => {
  return (
    <div className='container mx-auto text-white bg-base-200 font-[Montserrat]'>
        <Navbar></Navbar>
        <Outlet></Outlet>
        
    </div>
  );
};

export default Root;