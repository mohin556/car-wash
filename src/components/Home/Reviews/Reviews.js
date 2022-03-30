import React, { useContext } from 'react';
import './Reviews.css'
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Reviews = ({review}) => {
  
  
    // console.log(review)
    return (
        <div className="col-md-4 mt-5  ">
            <div className="review1">
                <img  className="clientImage" src={review.photo} alt="" />
                <h6 className=" ms-2 clientName">  Hi Im  {review.name},</h6>
                 <p className="description">{review.description}</p>
                 <div className="reviewStart">
                    <small><FontAwesomeIcon  icon={faStar} /></small> <small><FontAwesomeIcon icon={faStar} /></small> <small><FontAwesomeIcon icon={faStar} /></small> <small><FontAwesomeIcon icon={faStar} /></small> <small><FontAwesomeIcon icon={faStar} /></small>
                  </div>
            </div>
            
        </div>
    );
};

export default Reviews;