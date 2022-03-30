import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faFilePdf} from '@fortawesome/free-solid-svg-icons';
import List from '../List/List';
import './OderList.css'
import Sidebar from '../Home/Sidebar/Sidebar';

const OderList = () => {
    const {id}  = useParams();

  const [oders,setOders] = useState([]);
  console.log(oders)
 
 
  
      useEffect(()=>{
          const url = `https://serene-reaches-56132.herokuapp.com/odersList`;
             fetch(url)
           .then(res => res.json())
            .then(item => {
               setOders(item)
            })
         },[])

  
  
  
   
  
  



    return (
        <div className=" mainCard row">
            
            <div className=" serviceLeft col-md-3 ">
              <h2>Car Wash</h2>
             {/* <div className="fontDiv">
             <FontAwesomeIcon icon={faFilePdf} /> <Link className="lefttSide"><h5>Your Service</h5></Link>
               <FontAwesomeIcon icon={faFilePdf} /> <Link className="lefttSide"><h5>Your Service</h5></Link>
               <FontAwesomeIcon icon={faFilePdf} /> <Link to="/total" className="lefttSide"><h5>Your Service</h5></Link></div> */}
              <Sidebar></Sidebar>
            </div>
             
            
            <div className=" oderRight  col-md-9">
            <h2 className="oderHeading">Service List</h2>
            <div className="Card">
            {
                oders.map(list => <List list={list} ></List> )
            }

            </div>
             

            </div>
        </div>
    );
};

export default OderList;