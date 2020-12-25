import React from "react";
import "./Subscription.scss";
import arrow from "../../images/up-arrow.svg";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { NavLink } from "react-router-dom";
export default function SubscriptionDetail() {
  const closeSubDetail = () => {
    document.body.style.overflowY='scroll'
    document.querySelector(".subscriptionDetail").classList.remove("fade");
  };
  return (
    <div className="subscriptionDetail">
      <div className='wrap'>
      <div className="left">
        <img src="//cdn.shopify.com/s/files/1/2220/0129/products/ceremony-coffee-roasters-subscription-origin-set_004d957f-0365-485f-97bc-eaae24b07704_480x480.jpg?v=1517587235" />
      </div>
      <div className="right">
        <div className="detailWrapper">
          <div onClick={() => closeSubDetail()} className="goBack">
            <AiOutlineArrowLeft />
            <span>GO BACK</span>
          </div>
          <span className="name">Blend Set</span>
          <span className="price">$12.00</span>
          <div className="quantity">
            <label>QUANTITY</label>
            <input type="number" min="1" placeholder="1" />
          </div>
          <div className="quantity">
            <label>GRIND TYPE</label>
            <div>
              <select>
                <option>Whole Beans</option>
                <option>Espresso Grind</option>
              </select>
              <img src={arrow} />
            </div>
          </div>
          <div className="quantity">
            <label>Delivery</label>
            <div>
              <select>
                <option>Weekly</option>
                <option>2 Weeks</option>
              </select>
              <img src={arrow} />
            </div>
          </div>
          <div className="quantity">
            <label>Day of Week</label>
            <div>
              <select>
                <option>Thusday</option>
                <option>Friday</option>
              </select>
              <img src={arrow} />
            </div>
          </div>
          <div className="subBtn">
            <button>ADD TO CART</button>
          </div>
        </div>
        <div className="coffeeSub">
          <div className="title">
            {/* <h6>Coffee</h6> */}
          </div>
          <div className="cafe">
            <img src="//cdn.shopify.com/s/files/1/2220/0129/products/EthiopiaHaloHartume.jpg?v=1599157940" />
            <div className="detail">
              <span>Honduras Perdomo Honey</span>
              <span>12oz</span>
              <NavLink
                onClick={() => closeSubDetail()}
                className="link"
                to="/shop/1"
              >
                <button className="moreInfo">More Info</button>
              </NavLink>
            </div>
          </div>
          <div className="cafe">
            <img src="//cdn.shopify.com/s/files/1/2220/0129/products/hondurasperdomo-hero.jpg?v=1599157862" />
            <div className="detail">
              <span>Enthiopia Laayoo Natural</span>
              <span>250gram</span>
              <NavLink
                onClick={() => closeSubDetail()}
                className="link"
                to="/shop/1"
              >
                <button className="moreInfo">More Info</button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
