import React from 'react';
import './HeaderMain.css'
import { Link } from 'react-router-dom';
const HeaderMain = () => {
    return (
        <main  >
            <h2 className="name" > BD Car Washing </h2>
          <span className="font">Wash  Your Car  </span>
          <br />
          {/* <span className="font">Wash Your Car</span> */}
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat nisi <br />  corrupti volupta bangla desh perfect Obcaecati.</p>
             
             <div>
               <Link to="/footer"  >   <button className="button1"> Read more</button>   </Link>
                 <Link to="/services"><button className="button1">Oder now</button></Link>
             </div>

        </main>
    );
};

export default HeaderMain;