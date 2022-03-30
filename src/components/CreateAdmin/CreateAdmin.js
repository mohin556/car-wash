import React from 'react';
import './CreateAdmin.css';
import { useForm } from 'react-hook-form';
import Sidebar from '../Home/Sidebar/Sidebar';


const CreateAdmin = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const adminData ={
            name : data.name,
            email: data.email
            
        };
        const url = `https://serene-reaches-56132.herokuapp.com/addAdmin`;
    console.log(adminData)
    fetch(url,{
      method: 'POST',
      headers : {
        'content-type': 'application/json'
      },
      body: JSON.stringify(adminData)
    })
    .then(res => console.log('server side connection', res))
         
        
        console.log(data)};

    return (
        <div className=" row ">
            <div className=" adminPanel col-md-3 ">
              <Sidebar></Sidebar>
            </div>
            <div className=" col-md-9 adminForm">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h3>Make An Admin</h3>
                


               <div className="nameInput">
                   {/* <h3>Admin Name</h3> */}
                   <label> <h4>Admin Name : </h4>  </label>
                  <input className="adminInput" {...register("name")} /> 
               </div> 
             
             <div className="nameInput"   >
                 {/* <h3>Admin email</h3> */}
                 <label> <h4>Admin Name :</h4>  </label>
                <input className="adminInput" {...register("email")} /> 
             </div>
      
       <br />
      
            <input className="addminSubmit" type="submit" />
           </form>
            </div>
           
           </div>
    );
};

export default CreateAdmin;