import React from 'react';
import Sidebar from '../Home/Sidebar/Sidebar';

const Dashboard = () => {
    return (
        <div className="row">
        <div className="col-md-3 adminSidebar">
        
         <Sidebar></Sidebar>
        </div>
        <div className="col-md-9 adminRight">
          
        </div>
    </div>
    );
};

export default Dashboard;