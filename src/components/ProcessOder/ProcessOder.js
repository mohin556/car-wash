import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './processOder.css'
import Services from './../Home/Services/Services';
import PaymentProcess from './PaymentProcess/PaymentProcess';

const ProcessOder = () => {
 
   const {id} = useParams();
//    console.log(id)
   const [fixService,setFixService] = useState([]);
//   console.log(fixService)


//  const newOder = fixService.find(newService=>newService._id === id )
//   console.log(newOder)
  //  useEffect(()=>{
    

  //    fetch(`https://serene-reaches-56132.herokuapp.com/services`)
  //    .then(res => res.json())
  //    .then(data=>setFixService(data))
  //  },[])


 useEffect(()=>{
  const url = `https://serene-reaches-56132.herokuapp.com/oder/${id}`;
     fetch(url)
   .then(res => res.json())
    .then(item => {
       setFixService(item)
    })
 },[])
        


    return (
        <section className="procesCard row">
            <div className="col-md-4 oderCadr " >
            <h2> Service :  {fixService.name}</h2>
                {/* <input type="text" placeholder="Your Name" /><br />
                {/* <h1>{fixService?._id}</h1> */}
                {/* <input type="text" placeholder="Your Name " /><br />
                <input type="text"   placeholder="Your Name" /> */} 
                <h1> Charge:{fixService.price} $</h1>
                <h1>time:{fixService.time}min</h1>
                <img  className="picture" src={fixService.image} alt="" />

                
                 
            </div>
            <div className=" creditCard col-md-8">
                <h2>Payment System</h2>
                <PaymentProcess></PaymentProcess>
            </div>

        </section>
    );
};

export default ProcessOder;