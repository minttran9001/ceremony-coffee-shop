import React from "react";

import "./Checkout.scss";
import next from "../../images/next.svg";
import prev from "../../images/pre.svg";
export default function Checkout() {
  const handleCheckOut =(e)=>{
    e.preventDefault()
    document.querySelector('.checkOutNotify').classList.add('success')
    const timeout = setTimeout(()=>{
      document.querySelector('.checkOutNotify').classList.remove('success')

    },3000)
    return ()=>{
      clearTimeout(timeout)
    }
  }
  return (
    <form  className="checkout">
      <div className="left">
        <div className="logo">
          <img src="https://cdn.shopify.com/s/files/1/2220/0129/files/logo.png?911" />
        </div>
        <div className="breadCrumb">
          <span>Cart &nbsp;</span>
          <span> {"<"} &nbsp;</span>
          <span>Infomation &nbsp;</span>
          <span> {"<"} &nbsp;</span>
          <span>Shipping &nbsp;</span>
          <span> {"<"} &nbsp;</span>
          <span>Payment &nbsp;</span>
        </div>
        <div className="expressCheckout">
          <div className="title">
            <span>Express Checkout</span>
          </div>
          <div className="express">
            <button>
              <img src={require("../../images/100ppi/airpay-la-gi-2.png")} />
            </button>
          </div>
        </div>
        <div className="oR">
          <div className="line"></div>
          <span>Or</span>
          <div className="line"></div>
        </div>
        <div className="emailBox">
          <div className="title">
            <h5>Contact information</h5>
            <span>
              Already have an account? <a href="#">Login</a>
            </span>
          </div>
          <input required type="email" placeholder="Email (optional)" />
          <div className="checkBox">
            <input required type="checkbox" />
            <label> Keep me up to date on news and exclusive offers</label>
          </div>
        </div>
        <div className="shippingAddress">
          <div className="title">
            <h5>Shipping address</h5>
          </div>
          <div className="input requiredGroup">
            <input required className="input required" type="text" placeholder="First Name" />
            <input required className="input required" type="text" placeholder="Last Name" />
          </div>
          <input required
            className="input required"
            type="text"
            placeholder="Company (optional)"
          />
          <input required className="input required" type="text" placeholder="Address" />
          <input required
            className="input required"
            type="text"
            placeholder="Apartment, suite, etc. (optional)"
          />
          <input required className="input required" type="text" placeholder="City" />
          <div className="input requiredGroup">
            <select>
              <option>United States</option>
            </select>
            <select>
              <option>State</option>
            </select>
            <input required type="text" placeholder="ZIP CODE" />
          </div>
          <input required className="input required" type="text" placeholder="Phone" />
        </div>
        <div className="checkOutBtn">
          <a href="#">
            <img src={prev} /> Return to cart
          </a>
          <button onClick={(e)=>handleCheckOut(e)}>Check out</button>
        </div>
      </div>
      <div className="rightWrapper">
        <div className="right">
          <div className="checkOutItem">
            <div className="item">
              <div className="quantity">1</div>
              <img src="//cdn.shopify.com/s/files/1/2220/0129/products/CRNacientesHoney.jpg?v=1599848329" />
              <div className="detail">
                <span>Costa Rica Nacientes Honey</span>
                <span>12oz</span>
              </div>
              <b>$15.00</b>
            </div>
          </div>
          <div className="discountCode">
            <input required className="input required" type="text" placeholder="Discount Code" />
            <button>Apply</button>
          </div>
          <div className="subTotal">
            <div className="props">
              <span>Sub Total</span>
              <span>$15.00</span>
            </div>
            <div className="props">
              <span>Shipping</span>
              <span>$2.00</span>
            </div>
          </div>
          <div className="subTotal">
            <span className="total">
              <a>USD </a> $17.00
            </span>
          </div>
        </div>
      </div>
    </form>
  );
}
