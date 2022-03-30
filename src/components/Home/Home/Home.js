import React from 'react';
import Footer from '../../Footer/Footer';

import ProcessOder from '../../ProcessOder/ProcessOder';
import AboutFeature from '../AboutFeature/AboutFeature';
import DryCleaning from '../DryCleaning/DryCleaning';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';
import './Home.css'
const Home = () => {
    return (
        <div>
            <div className="headiing">
             
              <Header></Header>
              <Services></Services>
              <AboutFeature></AboutFeature>
              <Testimonial></Testimonial>
              <DryCleaning></DryCleaning>
             
            
               <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;