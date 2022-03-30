import React from 'react';
import './ExtraDetail.css';
const ExtraDetail = ({extra}) => {
    return (
        <div className="col-md-4">
            <div>
                
                <img className="extraImage" src={extra.image} alt="" />
                <h4 style={{color:"black"}}> {extra.name}</h4>
            </div>
        </div>
    );
};

export default ExtraDetail;