import React, { useEffect, useState } from 'react';
import './ManageItem.css'
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import Sidebar from '../Home/Sidebar/Sidebar';
const ManageItem = () => {
    const [products,setProducts] = useState([]);
    console.log(products)
    
    const handleDelete= (event,id)=>{
        console.log(event.target)
        // fetch(`https://serene-reaches-56132.herokuapp.com/delete/${id}`)
        // .then(res=> res.json())
        // .then(data=>console.log(data))
        fetch(`https://serene-reaches-56132.herokuapp.com/delete/${id}`,{
            method:'DELETE'
        })
        .then(res=> res.json())
        .then(result =>{
            if(result){
                event.target.parentNode.style.display = "none";
            }
        })
      
    }
    const [name,id] = products;
    // console.log(products)
   
    // console.log(products)
      
    useEffect(()=>{
        fetch('https://serene-reaches-56132.herokuapp.com/services')
        .then(res => res.json())
        .then(data=> setProducts(data))
    },[])


    return (
        <div className="row">
            <div className=" manageLeft col-md-3" >
              <Sidebar></Sidebar>

            </div>
            <div className=" manageRight col-md-9">
            <h2>Delete Service</h2>

            <div className="itemList">
                {
                    products.map(service=> 
                        
                        <ul className="itemName"> <FontAwesomeIcon className="fontIcon" icon={faTrashAlt} />    {service.name} = <button onClick={ (event) => handleDelete(event,`${service._id}`)} className="deletBtn">Delete  </button> </ul>

                    )
                }
            </div>
            </div>
        </div>
    );
};

export default ManageItem;