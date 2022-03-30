import React from 'react';
import './DryCleaning.css';
import dryImg from '../../../Image/DryCleanPerfect.jpg';
import { Link } from 'react-router-dom';
const DryCleaning = () => {
    return (
        <section className="bg-black dry-container p-5 mb-5 ">
         <div className="row ">
           <div className=" col-md-5">
               <p style={{color:'red '}}>Dry Cleaning</p>
             
              <h1 style={{color:'white ', textAlign: 'left', margin:'8px'}}>Dry Cleaning Any <br /> Dirt Inside THe Car And <br /> Truk</h1> 
             <Link to="/services"  >   <button className="button1"> Oder Now </button>  </Link>
           </div>
           
            <div className="col-md-7 mt-5 DryClean">
                
                <img src={dryImg} alt="" />
            </div>

         </div>
     
      

        </section>
    );
};

export default DryCleaning;