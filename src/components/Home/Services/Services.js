import React, { useEffect, useState } from 'react';
import "./Services.css";
import Truck1 from "../../../Image/whiteTruc.jpg";
import Suv from "../../../Image/whiteSuv.jpg";
import Car from "../../../Image/whiteCar.jpg";
import ServiceDetail from '../ServiceDetail/ServiceDetail';
import pic from "../../../Image/whiteCar.jpg";
import blackCar from "../../../Image/blackc.jpg"
import Extra from '../../Extra/Extra';
import CheckoutForm from '../../ProcessOder/PaymentProcess/CheckoutForm';

// const serviceData = [
//     {   
//         name : "PickUp",
//         image : Truck1,
//         service : 'Express Washing',
//         price : '12.99',
//         one : 'Vaccum Cleaning',
//         two : 'Interior Wet Cleaning',
//         three : 'Window wiping',
//         time : '15 min',
//         picture : pic,
       
//     },
//     {   
//         image : Suv,
//         name : 'Suv',
//         service : 'Basic Cleaning',
//         price : '46.99',one : 'Vaccum Cleaning',
//         two : 'Interior Wet Cleaning',
//         three : 'Window wiping',
//         picture : pic,
//         time : '25 min'
        
       
//     },
//     {   
//         image : Car,
//         name : 'Mini Bus',
//         service : 'Premium Service',
//         price : '88.99',one : 'Vaccum Cleaning',
//         two : 'Interior Wet Cleaning',
//         three : 'Window wiping',
//         picture : pic,
//         time : '45 min'
      
       
//     }
// ]

const Services = () => {
    
    const [service,setService] = useState([]);
    useEffect(() =>{
        fetch('https://serene-reaches-56132.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setService(data))
    },[])
    

    return (
       <section className="mt-5 mb-5 bg-light">
           <div className="service-container">
               <div>
                   <h5 style={{color:'purple'}}>WASHING PRICE</h5>
                   <h1>Select Your Plan</h1>
               </div>
               <div> <Extra> </Extra></div>
               <div className="row ">
                    {
                        service.map(service => <ServiceDetail service={service}></ServiceDetail>     )
                    }
               </div>
               
              
           </div>
       </section>
    );
};

export default Services;