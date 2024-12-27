import React from 'react';
import Footer from '../Footer/Footer';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Services from './../Services/Services';
import Client from '../Client/Client';

type Props = {};

const Home: React.FC<Props> = () => {
    return (
        <div>
            <div id="banner"><Banner></Banner></div>
            <div id="about ">  <About></About>        </div>
            <div id="services ">  <Services></Services> </div>
            <div id="client "> <Client></Client> </div>
            <div id="Portfolio">  </div>
            <div id="blog">  </div>
            <div id="contact">  </div>
            <Footer></Footer>

        </div>
    );
};

export default Home;