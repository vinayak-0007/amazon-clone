import React from 'react';
import "./CheckOut.css";
import CheckOutProduct from './CheckOutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';
function CheckOut () {
  const [ { basket,user }, dispatch ] = useStateValue();

  return(
  <div className="checkOut">
      <div className="checkOut_left">
        <img
          className="checkOut_ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt=""
        />

        <div>
          <h2 className="checkOut_title">
            <h5> Hello, {user?.email}</h5>
            Your shopping Basket
          </h2>
          
          {basket.map( ( item ) => (
            <CheckOutProduct 
              id={item.id}
              image={item.image}
              title={item.title}
              rating={item.rating}
              price={item.price }
            />
          ))
          }
         </div>
      </div>
      <div className="checkOut_right">
        <Subtotal/>
      </div>
    </div>
  );
}

export default CheckOut ;
