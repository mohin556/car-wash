import React, { useState } from 'react';
import './Reviews.css';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';

const Reviews = () => {
   let history = useHistory();
     const [photo,setPhotoUrl] = useState(null)

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const review ={
            name : data.name,
            description: data.description,
            photo :photo,
            
        };
        const url = `https://serene-reaches-56132.herokuapp.com/addReviews`;
    console.log(review)
    fetch(url,{
      method: 'POST',
      headers : {
        'content-type': 'application/json'
      },
      body: JSON.stringify(review)
    })
    .then(res => console.log('server side connection', res))
         
        
        };
        const handlePhotoUpload = event =>{
            console.log(event.target.files[0])
            const photoData = new FormData();
            photoData.set('key','bf2f9d9f49f1a45f6bf78d11243b784f')
            photoData.append('image',event.target.files[0])
           
            axios.post('https://api.imgbb.com/1/upload',photoData )
           .then(function (response) {
             
             setPhotoUrl(response.data.data.display_url);
           })
           .catch(function (error) {
             console.log(error);
           });
         

        }



    return (
        <div className="row">
            <div className="reviewSide col-md-3">
                <h3>Car Washing Service </h3>
                <h5>Customers Reviews</h5>
                <br />
                <br />
                
                 <div className="iconSet"   >  
                 <FontAwesomeIcon className="fontIcon homeIcon  " icon={faHome} />  <Link className="linkItem "  to="/"> <h4 className="homePage" > go to Home </h4> </Link>
                 </div>
            </div>

            <div className=" reviews col-md-9" >


            <form onSubmit={handleSubmit(onSubmit)}>
                <h3>Give A Review With Your Photo</h3>
                


               <div className="reviewDiv">
               <h4 className="textt">Your Name  </h4>
                  <input className="reviewName" {...register("name")} /> 
               </div> 

             
             <div className="reviewDiv" >
             <h4 className="textt"> Write somwthing  </h4>
                <input className="reviewDescription" {...register("description")} /> 
             </div>

             <div className="reviewDiv">
               <h4 className="textt">Your Photo  </h4>
                  <input className="reviewPhoto" onChange={handlePhotoUpload}  type="file" /> 
               </div> 
      
       <br />
             
             <div className="reviewSubmit" >
             <input  className="reviewSub" type="submit" />
             </div>
           
           </form>
            {/* <div className="reviewDiv"> 
                <h4 className="textt">Your Name  </h4>
                <input className="reviewName" type="text" placeholder="Name" />
            </div>

            <br /><br />
              <div className="reviewDiv">
                 <h4 className="textt"> Write somwthing  </h4>
                 <input className="reviewDescription" type="text" placeholder="Description" />
              </div>

             <br />
             <button type="submit">Done</button> */}
            </div>
        </div>
    );
};

export default Reviews;