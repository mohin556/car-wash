import React, { useEffect, useState } from 'react';
import Reviews from '../Reviews/Reviews';
import './Testimonial.css';
// import client1 from '../../../Image/review.js.jpg';
// import client2 from '../../../Image/client2.jpg';
// import client3 from '../../../Image/client3.jfif';

// const comment = [
//     {
//         image : client1,
//         description : 'This car wash is fast, This car wash is fast,friendly and does an awesome friendly and does an awesome job for friendly and does an awesome job for a great price exta dndsklsddljslkd',
//         name : 'Mohin'
//     },
//     {
//         image : client2,
//         description : 'This car wash is fast, This car wash is fast,friendly and does an awesome friendly and does an awesome job for friendly and does an awesome job for a great price exta dndsklsddljslkd',
//         name : 'SHAWN'
//     },
//       {
//         image : client3,
//         description : ' This car wash is fast, This car wash is fast,friendly and does an awesome friendly and does an awesome job for friendly and does an awesome job for a great price exta dndsklsddljslkd',
//         name : 'ASHOK'
//     }


// ]

const Testimonial = () => {
       
  const [review,setReview] = useState([]);
  useEffect(() =>{
      fetch('https://serene-reaches-56132.herokuapp.com/reviews')
      .then(res => res.json())
      .then(data => setReview(data))
  },[])
  



    return (
        <section className="mt-5 bg-light testimonialContainer ">
          <div >
          <h1 style={{color:'#EA9E1D'}}>TESTIMONIAL</h1> 
          ------------
          <h4>Opinion Of Clients</h4>
          </div>
            <div className="row mt-3 p-5 testimonial">
              {
                    review.map(review =><Reviews review={review}></Reviews>)
              }
            </div>

        </section>
    );
};

export default Testimonial;