import React, { useState } from 'react';
import './AddService.css';
import axios from 'axios';
import { useForm } from "react-hook-form";
import Sidebar from '../Sidebar/Sidebar';


const AddService = () => {
    const [imageUrl,SetImageUrl]= useState(null);

      const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    
    const eventData = {
      name: data.name,
      price : data.price,
      time : data.time,
      image: imageUrl
    };

    const url = `https://serene-reaches-56132.herokuapp.com/addEvent`;
    console.log(eventData)
    fetch(url,{
      method: 'POST',
      headers : {
        'content-type': 'application/json'
      },
      body: JSON.stringify(eventData)
    })
    .then(res => console.log('server side connection', res))
    
    
    console.log(data)};
  const handleImageUpload = event =>{
   console.log(event.target.files[0])
   const imageData = new FormData();
   imageData.set('key','bf2f9d9f49f1a45f6bf78d11243b784f');
   imageData.append('image',event.target.files[0]);
 
   axios.post('https://api.imgbb.com/1/upload', 
   imageData )
  .then(function (response) {
    SetImageUrl(response.data.data.display_url);
  })
  .catch(function (error) {
    console.log(error);
  });


  }
    return (
       <div  className="row">
           <div className="col-md-3 leftSide ">
          <Sidebar></Sidebar>
           </div>
           <div className="col-md-9 form-container">
           <h3>Add Service</h3>
           <form className="form"  onSubmit={handleSubmit(onSubmit)}>
          <div className="inputFrom">
          <div className="inputDiv">
       <label className="labelTag" >Service Name </label>
        {/* <input defaultValue="name" name="name" {...register("example")} /> */}
        <input  className="addInput" defaultValue="name" {...register("name")} />
       </div>
        
        <br />
         <div className="inputDiv">
            <label className="labelTag" >Service Charge </label>
            <input className="addInput" defaultValue="price" {...register("price")} />
         </div>
        <br />
        <br />
              {/* <input type="text" defaultValue="mohin"{...register("example")} /> */}
            <div className="inputDiv">
            <label className="labelTag" >Serviceing Duration </label>
            <input className="addInput" defaultValue="minute" {...register("time")} />
            </div>
        <br />
            {/* <div>
            <input defaultValue="minute" {...register("time")} />
            </div>
        <br />
        <div>
            <input defaultValue="minute" {...register("time")} />
            </div>
            <br />
            <div>
            <input defaultValue="minute" {...register("time")} />
            </div> */}
       {/* <div>
       <input defaultValue="add service" {...register("name")} />
       </div> */}
       
        {/* <input  office="office" {...register("exampleRequired", { required: true })} /> */}
   
        {errors.exampleRequired && <span>This field is required</span>}
       
      
        <div className="inputDiv">
        <label className="labelTag" >Upload Car Image </label>
        <input className="addInput"  type="file" onChange={handleImageUpload} />
        </div>
       
        <br />
        <br />
        <input className="submitButton" type="submit" />
          </div>
      </form>
           </div>
       </div>
    );
};

export default AddService;