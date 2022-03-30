import React, { useContext } from 'react';
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import GoogleIcon from '../../../Image/Gicon.png'

import firebaseConfig from './firebase.config';
import firebase from "firebase/app";
import "firebase/auth";
import { userContex } from '../../../App';
import { useHistory, useLocation } from 'react-router-dom';
import { faCarSide } from '@fortawesome/free-solid-svg-icons';
 







const Login = () => {
  // const app = initializeApp(firebaseConfig);
  const [loggedInUser,setLoggedInUser] = useContext(userContex);

  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  
  if(!firebase.apps.length) { firebase.initializeApp(firebaseConfig); }

   const handleSignIn = () =>{
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
   
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;
    var token = credential.accessToken;
    const  {displayName,email,photoURL} = result.user;
  
    // const  {displayName,email} = result.user;
    const signInUser = {name: displayName,email,image:photoURL}
  //  console.log(signInUser)
    
    // console.log(signInUser)
    setLoggedInUser(signInUser);
    history.replace(from);
    
  }).catch((error) => {
   
    var errorCode = error.code;
    var errorMessage = error.message;
    
    var email = error.email;
   
    var credential = error.credential;

  });


   }


    return (
        <div className="login  ">

         <h1>Login</h1> 

         <h2>BD Car Washing</h2>
           <div>
           <FontAwesomeIcon className="carIcon" icon={faCarSide} />
           </div>
         <div>
         <img className="GoogleIcon" src={GoogleIcon} alt="" />
         </div>
       
       {/* <div>
            <input className="loginInput" type="text" placeholder="Email" /> <br />
        <input  className="loginInput" type="text" placeholder="Password" />
       </div> */}
          <div>
              <button className="signInBtn" onClick={handleSignIn}  > Sign in</button>
              <br />
             <p className="paragraph"> Create account</p>
          </div>
        

        </div>
    );
};

export default Login;