import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Banner from '../Banner/Banner';
import About from '../About/About';

type Props = {};

const Root: React.FC<Props> = () => {
  return (
    <div className='container mx-auto text-white font-[Montserrat]'>
        <Navbar></Navbar>
        <Banner></Banner>
        <About></About>
        <Footer></Footer>
    </div>
  );
};

export default Root;