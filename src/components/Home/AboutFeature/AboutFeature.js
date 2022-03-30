import React from 'react';
import { Link } from 'react-router-dom';
import FeaturImage from '../../../Image/spray2.jpg';
import './AboutFeature.css'
const AboutFeature = () => {
    return (
       <section className="abotFeature my-5 ">
           <div className="fetures-container p-10">
              <div className="row mb-5">
              <div className="col-md-7 ParaFeature p-5 ">
                  <h4>.....MODERN EQUIPMENT</h4>
                 <h1>Professional washing <br /> and cleaning of your car</h1>
                 <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, ullam et. Atque ratione, ut quam quasi commodi, modi optio magnam a veritatis <br /> perferendis molestiae perspiciatis ipsam aliquid nemo. Neque, cum?</p>
                 <br />
                 <h2>Call for book : 888-222-666  </h2>
                <Link to="/footer">  <button className="button1">Read More</button>    </Link>
              </div>
              <div className="col-md-5">
               
               <img className="image-fluid male" src={FeaturImage} alt="" />

              </div>
              
              </div>
           </div>
       </section>
    );
};

export default AboutFeature;