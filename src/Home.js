import React from 'react';
import "./Home.css";
import Product from './Product';


function Home() {
  return <div className='home'>
    <div className="home_container">
      <img
       className='home_img' src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="home_img" />

      <div className="home_row">
        <Product
        id="12345"
          title='The Lean startup : asam asxjnasbkxas aasx asxbasamansx asx asbx asasxaksbjas  ' 
          price={29.99}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" alt="product_image"
          rating={4}
        />
        <Product
          id="21322"
          title='Kenwood kMix Stand Mixer for Baking, Styling Kitchen Mixer with K-beter, Dough Hook and Whisk, 5 Liter Glass Bowl' 
          price={239.99}
          image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg" alt="product_image"
          rating={4}
        />
      </div>
      <div className="home_row">
      <Product
          id="4903850"
          title="Samsung LCSDB SDCSDCB HSDCS49' Curved LED Gaming Moniter  "
          price={199.99}
          image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg" alt="product_image"
          rating={3}
        />
       <Product
          id="2353850"
          title="Amazon Eco  SDCSDCB HSDCS49' Curved LED Gaming Moniter  "
          price={99.99}
          image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          alt="product_image"
          rating={5}
        />
        <Product
          id="3254850"
          title="New Apple Ipad Pro (12.9-inch) SDCSDCB HSDCS49' Curved LED Gaming Moniter  "
          price={598.99}
          image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg" alt="product_image"
          rating={4}
        />
      </div>
      <div className="home_row">
      <Product
          id="98643850"
          title="Samsung LCSDB SDCSDCB HSDCS49' Curved LED Gaming Moniter  "
          price={1094.99}
          image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg" alt="product_image"
          rating={3}
        />
      </div>


    </div>

  </div>;
}

export default Home;
