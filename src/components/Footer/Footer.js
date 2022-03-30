import React from 'react';
import './Footer.css';
import Carr from '../../Image/lambor.jfif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

import Details from './../Details/Details';
const Footer = () => {

    const ContactData =[
        {   
            name : "Phone",
          
            detail : '+0088-0567789',
            icon: '<FontAwesomeIcon className="fontIcon" icon={faPhoneAlt} />'
          },
          {   
           name : "Car Washing Point",
          
           detail : 'Chattagram, Gec Area ,Ctg',
         },
         {   
           name : "Email",
         
           detail: 'mohin@gmail.com',
         },
         {   
            name : "Time",
          
            detail : '7.00 am - 11.00 pm',
          }
  ]
 



    return (
        <section className="footer">
                   <div >
                       <img className="Carr" src={Carr} alt="" />
                   <h4 style= {{color: 'white'}}>BD Car Wash</h4>
                   <div  >
                      
                     
                     </div>
                   </div>
               <div className="row"  >
                   
                       
                {
                    ContactData.map( detail => <Details detail = {detail}></Details> )
                }
                
                </div>  
       

        </section>
    );
};

export default Footer;