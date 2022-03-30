import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { useContext } from 'react';
import './Admin.css';
import { userContex } from './../../../App';

const Admin = () => {
    const [loggedInUser,setLoggedInUser] = useContext(userContex);
    
    const [isAdmin,setAdmin] = useState({ isAdmin : false});
    console.log(isAdmin)
   useEffect(()=>{
       fetch(`https://serene-reaches-56132.herokuapp.com/onlyAdmin/?email=${loggedInUser.email}`,
      )
       .then(res=>res.json())
       .then(data => setAdmin(data) )
       .catch(err => console.log(err));
      
   },[])



    return (
        <div className="row">
          
          <div className="col-md-3 adminSidebar">
            
        <Sidebar></Sidebar>

            
           
           </div>
           <div className="col-md-9 adminRight">
           
           <div className="user" >
           { //   isAdmin && <div> You are Teacher   </div>
            isAdmin.isAdmin ? (
               <h3 > You are not An Admin . {isAdmin?.message}</h3>
            ) : (
                   <h3>
                    WellCome ..{loggedInUser.name}
                    <br />
                    You are An Admin
                    </h3> 
                
            )
            }
           </div>
           
           


          </div>
        </div>
    );
};

export default Admin;