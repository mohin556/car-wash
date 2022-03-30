import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import {  useParams} from 'react-router-dom';
//   <i class="fas fa-check"></i>
import Extra from '../../Extra/Extra';

import './ServiceDetail.css';




const ServiceDetail = ({service}) => {
console.log(service)    


    return (
        <div className="col-md-4 p-5">
            {/* <div className="">
            <h4>{service.name}</h4>
            <img className="serviceImage" src={service.image} alt="" />
            </div> */}
          

            <div className=" servicePrice">
              <div className="cardHeading">
              <h5 >{service.name}</h5>
              </div>
              <h1>${service.price}</h1>
                {/* <h6>${service._id}</h6> */}
               
              <div  className="commonService" >
              <h5 > <FontAwesomeIcon className="OkIcon" icon={faCheck} /> Exterior Washing</h5> 
            <h5 > <FontAwesomeIcon className="OkIcon" icon={faCheck} /> Vaccum Cleaning</h5>
                <h5> <FontAwesomeIcon icon={faTimes} /> Interior Wet Cleaning</h5>
                <h5> <FontAwesomeIcon icon={faTimes} /> Window wiping</h5>
                {/* <h4> <FontAwesomeIcon icon={faCoffee} />  time:{service.time}</h4> */}
              </div>
               {/* < p>{service.one}</p>
                <p>{service.two}</p>
                <p>{service.three}</p> */}
                <div className="timeDiv">
                <h4 style={{color:'black'}} ><FontAwesomeIcon className="WatchIcon" icon={faClock} /> {service.time} min </h4>
                </div>
               
                <div>
                    <img  className="picture" src={service.image} alt="" />
                </div>
            
                <div>                                                                                                                                  
                <Link  to={`/processing/${service._id}`}>  <button   className="OderBtn">Oder now   <FontAwesomeIcon className="rightIcon" icon={faChevronRight} /> </button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;