import React, { useContext, useEffect, useState } from 'react';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { userContex } from './../../../App';
import { faTasks } from '@fortawesome/free-solid-svg-icons';
import { faUserLock } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import { faThList} from '@fortawesome/free-solid-svg-icons';
import { faCommentMedical } from '@fortawesome/free-solid-svg-icons';

import ServiceDetail from './../ServiceDetail/ServiceDetail';

const Sidebar = () => {
   const [loggedInUser,setLoggedInUser] = useContext(userContex);
   const [isAdmin,setAdmin] = useState(false);

   useEffect(()=>{
       fetch('https://serene-reaches-56132.herokuapp.com/isAdmin',{
           method: 'POSt',
           headers: { 'content-type':'application/json' },
           body: JSON.stringify({email: loggedInUser.email})
       })
       .then(res=>res.json())
       .then(data => setAdmin(data) )
   },[])

    return (
        <div className="sidebarMain" >
            <div className="sidebar">
             { isAdmin && <div>
                <div  className="iconSet"><FontAwesomeIcon className="fontIcon" icon={faPlus} />  <Link className="linkItem" to="/addService"><h5> Add Service</h5></Link></div>
                <div className="iconSet"  ><FontAwesomeIcon className="fontIcon" icon={faUserLock} />  <Link className="linkItem" to="/createAdmin"> <h5> Create Admin</h5></Link> </div>

                  <div className="iconSet"  > <FontAwesomeIcon className="fontIcon" icon={faTrashAlt} />  <Link  className="linkItem"   to="/manage"><h5>Manage Items</h5></Link></div>  

             </div>}
                {/* <h5> Manage item</h5>
                <h5> Add Service</h5>
                <Link><h5>Your Service</h5></Link>  */}
               <div className="iconSet"   > <FontAwesomeIcon className="fontIcon" icon={faThList } /> <Link to="/total" className="linkItem" > <h5>Service List</h5>   </Link></div>
                <div className="iconSet"  > <FontAwesomeIcon className="fontIcon" icon={faCommentMedical } />  <Link  className="linkItem"  to="/reviws"><h5>Give a Review</h5></Link></div>
            </div>
        </div>
    );
};

export default Sidebar;