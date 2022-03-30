import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';





const stripePromise = loadStripe('pk_test_51JtzmNCKGv82SDvWT9cIULZh6ju1vwAVTkdQ5YbSewVXoz17SXyS1r5lZu5eX2MtwHJPHbR7Gttcza4U9Uea71fg00mAy5WnHv');

const PaymentProcess = () => {
    return (
      <Elements stripe={stripePromise}>
      <CheckoutForm></CheckoutForm>
    </Elements>
    );
};

export default PaymentProcess;