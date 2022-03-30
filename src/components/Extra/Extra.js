import React from 'react';
import pickup from '../../Image/whiteTruc.jpg';
import Suv from '../../Image/whiteSuv.jpg';
import Car from '../../Image/whiteCar.jpg';
import './Extra.css'
import ExtraDetail from '../ExtraDetail/ExtraDetail';
const Extra = () => {
   const serviceData =[
         {   
             name : "PickUp",
            image : pickup,
             service : 'Express Washing',
           },
           {   
            name : "Suv",
           image : Suv,
            service : 'Express Washing',
          },
          {   
            name : "Car",
           image : Car,
            service : 'Express Washing',
          }
   ]

    return (
        <div className="">
         
         <div className="row ">
             {
                 serviceData.map(extra =><ExtraDetail extra={extra} ></ExtraDetail>)
             }
         </div>
        </div>
    );
};

export default Extra;