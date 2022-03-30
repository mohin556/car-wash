import React, { useContext, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

 

import './TotalOder.css'
import { userContex } from './../../App';

const TotalOder = () => {
  const [loggedInUser,setLoggedInUser] = useContext(userContex);
  console.log(loggedInUser)
    const [total,setTotal] = useState([]);
    console.log(total)

    useEffect(() =>{
        fetch(`https://serene-reaches-56132.herokuapp.com/odersList`)
        .then(res=> res.json())
        .then(data => setTotal(data))
    },[]
      
    )


    return (
        <div className="row">
             <div className="col-md-2 totalLeft ">
              <h3>Service Details</h3>
             </div>
             <div className="col-md-10 pe-5 py-5">
                  
             <Table className="table" striped bordered hover>
  <thead className="tableHeading">
    <tr >
      <th> Name </th>
      <th> Email Id </th>
      <th>Service Name</th>
      <th>Pay With</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
      
    {
      total.map((list )=> (
        <tr>
        <td> {loggedInUser.name} </td>
        <td> {loggedInUser.email}  </td>
        <td> {list.name}   </td>
        <td> Credit Card   </td>
      </tr>
      ))
    }


    {/* <tr>
      <td> name </td>
      <td></td>
      <td>{total[0]?.name}</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>name</td>
      <td></td>
      <td> {total[1]?.name} </td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>name</td>
      <td ></td>
      <td> {total[2]?.name} </td>
      <td>Credit Card</td>
    </tr>
    <tr>
      <td>name</td>
      <td >{total[0]?.name}</td>
      <td></td>
      <td>Credit Card</td>
    </tr>
    <tr>
      <td>name</td>
      <td >Larry the Bird</td>
      <td>{total[0]?.name}</td>
      <td>Credit Card</td>
      <td> <input className="tableInput" type="text" placeholder="Pending" /> </td>
    </tr> */}
  </tbody>
</Table>
{/* colSpan="2" */}

             </div>
        </div>
    );
};

export default TotalOder;