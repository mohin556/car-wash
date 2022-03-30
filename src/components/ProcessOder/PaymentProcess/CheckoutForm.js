import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './CheckoutForm.css';
import { userContex } from './../../../App';
  







const CheckoutForm = () => {
  const [loggedInUser,setLoggedInUser] = useContext(userContex);

  const stripe = useStripe();
  const elements = useElements();
 
  const {id}  = useParams();

  const [oders,setOders] = useState([]);
  console.log(oders)
  

  let newSelect = oders.find(pd=>pd._id === id );
  const UserData ={
            
    email: loggedInUser.email
    
}; 
  console.log(newSelect,UserData)
    
          
      useEffect(()=>{
        const url = `https://serene-reaches-56132.herokuapp.com/services`;
           fetch(url)
         .then(res => res.json())
          .then(item => {
             setOders(item)
          })
       },[])

      

    
       
         const handleSend =(id) =>{
               
         

           const url = `https://serene-reaches-56132.herokuapp.com/oderList`;
          
           fetch(url,{
             method: 'POST',
             headers : {
               'content-type': 'application/json'
             },
             body: JSON.stringify(newSelect)
           })
           .then(res => console.log('server side connection', res))
          
         }
 






  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.getElement(CardElement);

    // Use your card Element with other Stripe.js APIs
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.log('[error]', error);
    } else {
      console.log('[PaymentMethod]', paymentMethod);
    }
  };

  return (
  <div>
        <div>
                <h2>Charge will be = {newSelect?.price} $ </h2> 
        </div>
        <div>
        <form className="CheckoutForm " onSubmit={handleSubmit}>
      <h5 className="payCard">Pay with</h5>
      <  CardElement />
      <br />
      <br />
   <Link to={`/oderList/${oders._id}`}>
      <button onClick={() => handleSend()} className="payButton" type="submit" disabled={!stripe}>
        Pay
      </button>
   </Link>
      
    </form>
        </div>
  </div>
  
  );
};
export default CheckoutForm;