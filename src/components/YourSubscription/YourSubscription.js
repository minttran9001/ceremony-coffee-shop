import React from "react";
import { NavLink } from "react-router-dom";

import "./YourSubscription.scss";

export default function YourSubscription() {
  return (
    <div className="yourSub">
      <div className="title">
        <p>Your Subscription</p>

        <span>"It only takes a two ticks to set up a Coffee Subscription and you'll have fresh coffee regularly delivered to you anywhere in New Zealand. Whatever you want, however you want it, whenever you want it. Subscriptions make getting fresh coffee easy."</span>
      </div>
      <div className="yourSubSection">
      <div className="subItem">
          <div className="subImg col">
            <span>Subscription</span>
          </div>
          <div className="listCoffee col">
            <span>Coffees</span>
          </div>
          <div className='delivery col '>
            <span>Delivery</span>
          </div>
          <div className='price col'>
            <span>Total Price</span>
          </div>
          <div className='edit col'>
              <span>Edit</span>
          </div>
        </div>
        <div className="subItem">
          <div className="subImg col">
            <img src="//cdn.shopify.com/s/files/1/2220/0129/products/ceremony-coffee-roasters-subscription-origin-set_004d957f-0365-485f-97bc-eaae24b07704.jpg?v=1517587235" />
          </div>
          <div className="listCoffee col">
            <div className="listItem">
              <img src="//cdn.shopify.com/s/files/1/2220/0129/products/Chemex_Filters_cc4da06a-d0a3-480e-9e0a-4d9f921a4406.jpg?v=1511972047" />
              <span>Costa Rica Nacientes Honey / 12oz</span>
            </div>
            <div className="listItem">
              <img src="//cdn.shopify.com/s/files/1/2220/0129/products/fall-hero1.jpg?v=1599055584" />
              <span>Costa Rica Nacientes Honey / 12oz</span>
            </div>
          </div>
          <div className='delivery col'>
            <span>Thursday / Weekly</span>
          </div>
          <div className='price col'>
            <span>$15.00/per</span>
          </div>
          <div className='edit col'>
              <button >Edit</button>
          </div>
        </div>
        <div className="subItem">
          <div className="subImg col">
            <img src="//cdn.shopify.com/s/files/1/2220/0129/products/ceremony-coffee-roasters-subscription-origin-set_004d957f-0365-485f-97bc-eaae24b07704.jpg?v=1517587235" />
          </div>
          <div className="listCoffee col">
            <div className="listItem">
              <img src="//cdn.shopify.com/s/files/1/2220/0129/products/Chemex_Filters_cc4da06a-d0a3-480e-9e0a-4d9f921a4406.jpg?v=1511972047" />
              <span>Costa Rica Nacientes Honey / 12oz</span>
            </div>
            <div className="listItem">
              <img src="//cdn.shopify.com/s/files/1/2220/0129/products/fall-hero1.jpg?v=1599055584" />
              <span>Costa Rica Nacientes Honey / 12oz</span>
            </div>
          </div>
          <div className='delivery col'>
            <span>Thursday / Weekly</span>
          </div>
          <div className='price col'>
            <span>$15.00/per</span>
          </div>
          <div className='edit col'>
              <NavLink exact to='/subedit'
              style={{color:'#222',textDecoration:'none'}}
              ><button>Edit</button></NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
