import React from 'react';
import CheckOutProduct from './CheckOutProduct';
import { useStateValue } from './StateProvider';
import "./Payment.css";
import { Link } from "react-router-dom";
function Payment () {
  const [ { basket }, dispatch ] = useStateValue();
  return <div className='payment'>
    <div className="payment_container">
      
      <h1>
        Checkout (
      <Link to ="/checkout">  {basket?.length} items </Link>
      
        )
      </h1>
      {/* {dilivery} */}
      <div className="payment_section">
        <div className="payment_title">
          <h3>Delivery Address</h3>
        </div>
        <div className='payment_address'>
          <p>{ }</p>
          <p>123 React Lane</p>
          <p>Los Angeles</p>
        </div>
      </div>
      {/* Review item */}
      <div className="payment_section">
        <div className="payment_title">
          <h3>Review items and delivery</h3>
        </div>
        <div className="payment_items">
          {basket.map( item => (
            <CheckOutProduct  
                id={item.id}
              image={item.image}
              title={item.title}
              rating={item.rating}
              price={item.price }
            />
          )) }
        </div>
      </div>
      {/* PaymentMethod */}
      <div className="payment_section">
        <div className="payment_title">
          <h3>Payment Method</h3>
        </div>
        <div className="payment_details">
          {/* {STRIPE} */} 
        </div>
      </div>
    </div>  

  </div>;
}

export default Payment;
