import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import './Details.css'
const Details = ({detail }) => {
    console.log(detail)
    return (
        <div  className="col-md-3 detailss "  >
            <div >
                <h2></h2>
              <h3>  {detail.name}</h3>
              <h3>{detail.detail}</h3>
             
            </div>
        </div>
    );
};

export default Details;