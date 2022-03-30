import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCarCrash } from '@fortawesome/free-solid-svg-icons';
import './List.css';


const List = ({list}) => {
    console.log(list)
    return (
        <div>
            <div className="Listed">
                <div>
                <FontAwesomeIcon className="carIcon" icon={faCarCrash} />  
                <input type="text" placeholder="pending" />
               
                
                </div>
                <br />
               <div> <h5 className="sName" >{list.name}</h5></div>
                <div className="para">Lorem ipsum dolor sit amet elit consectetur adipisicing elit. Aliquam   eveniet tenetur?  eligendi maxime.</div>
                
            </div>
        </div>
    );
};

export default List;