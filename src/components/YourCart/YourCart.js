import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./YourCart.scss";

export default function YourCart() {
  const [message, setMessage] = React.useState("");
  useEffect(() => {
    if (message != "") {
      document.querySelector(".edit").classList.add("open");
    } else {
      document.querySelector(".edit").classList.remove("open");
    }
  }, [message]);
  const openGift = () => {
    var checkBoxInput = document.getElementById("checkBoxInput");
    setMessage("");
    console.log(checkBoxInput.checked);
    if (checkBoxInput.checked) {
      document.querySelector(".messageGift").classList.add("open");
    } else {
      document.querySelector(".messageGift").classList.remove("open");
    }
  };
  const saveMess = () => {
    var notify = document.querySelector(".notify").classList.add("success");
    document.querySelector(".giftMessage").classList.remove("open");
    setMessage("Hello");
    const timeout = setTimeout(() => {
      document.querySelector(".notify").classList.remove("success");
    }, 2000);
    return () => {
      clearTimeout(timeout);
    };
  };
  const openSubDetail = () => {
    var orderTable = document.querySelector(".subModal").classList.add("fade");
  };
  const handleUpdate = ()=>{
    document.querySelector(".updateNotify").classList.add("success");
    const timeout = setTimeout(() => {
      document.querySelector(".updateNotify").classList.remove("success");
    }, 3000);
    return () => {
      clearTimeout(timeout);
    };
   }
  return (
    <div className="yourCart">
      <div className="title">
        <h6>Shopping Cart</h6>
        <div className="needAssist">
          <h6>Need Assistance?</h6>
          <a href="#">info@ceremonycoffee.com</a>
          <a href="#">(410) 626-0011</a>
        </div>
        <div className="quickLinks">
          <h6>Quick Links</h6>
          <a href="#">Wholesale</a>
          <a href="#">Subscriptions</a>
          <a href="#">Shipping & Returns</a>
        </div>
      </div>
      <div className="cartSection">
        <div className="cartItem">
          <div className="itemImg col">
            <span>Item</span>
          </div>
          <div className="itemPrice col">
            <span>Price</span>
          </div>
          <div className="itemQuantity col">
            <span>Quantity</span>
          </div>
          <div className="remove col">
            <span></span>
          </div>
        </div>
        <div className="cartItem">
          <div className="itemImg col">
            <img src="//cdn.shopify.com/s/files/1/2220/0129/products/Chemex_Filters_cc4da06a-d0a3-480e-9e0a-4d9f921a4406.jpg?v=1511972047" />
            <div className="itemName">
            <span style={{fontWeight:'bold',marginBottom:'10px'}}>Quick Order</span>

              <span>Peru Cenfrocafe</span>
              <span>12oz</span>
            </div>
          </div>
          <div className="itemPrice col">
            <span>$15.00</span>
          </div>
          <div className="itemQuantity col">
            <input type="number" value="1" min="1" max="10" />
          </div>
          <div className="remove col">
            <button>Remove</button>
          </div>
        </div>
        <div className="cartItem">
          <div className="itemImg col">
            <img src="//cdn.shopify.com/s/files/1/2220/0129/products/ceremony-coffee-roasters-subscription-origin-set_004d957f-0365-485f-97bc-eaae24b07704_480x480.jpg?v=1517587235" />
            <div className="itemName">
              <span style={{fontWeight:'bold',marginBottom:'10px'}}>Subscription</span>
              <span>Blend Set</span>
              <span>Thusday / Weekly</span>
              <span></span>
            </div>
          </div>
          <div className="itemPrice col">
            <span>$15.00</span>
          </div>
          <div className="itemQuantity col">
            <input type="number" value="1" min="1" max="10" />
          </div>

          <div className="remove col">
            <button className='moreInfo' onClick={() => openSubDetail()}>Detail</button>
            <button>Remove</button>
          </div>
        </div>
      </div>
      <div className="checkOutSection">
        <div className="checkOutWrapper">
          <div className="total">
            <span>Sub Total : $15.00</span>
          </div>
          <div className="gift">
            <div className="checkBox">
              <input
                id="checkBoxInput"
                onClick={(e) => openGift(e)}
                width="50px"
                height="50px"
                type="checkbox"
              />
              <label>Gift for someone</label>
            </div>
            <div className="giftIcon">
              <img src={require("../../images/100ppi/gift.d69f1629.svg")} />
            </div>
          </div>
          <div className="edit">
            <a
              onClick={(e) => {
                openGift(e);
              }}
            >
              Edit
            </a>
          </div>
          <div className="notify">
            <span>Saved your messsage!</span>
          </div>
          <div className="messageGift">
            <div className="fromTo">
              <input placeholder="From" type="text" />
              <input placeholder="To" type="text" />
            </div>
            <div className="message">
              <textarea placeholder="Add a message"></textarea>
            </div>
            <button
              onClick={() => {
                saveMess();
              }}
            >
              Save
            </button>
          </div>
          <NavLink style={{color:'#222',textDecoration:'none'}} to='/checkout'>
          <div className="checkOutBtn">
            <button>CHECK OUT</button>
          </div>
          </NavLink>
          <div className="updateBtn">
            <button onClick={()=>handleUpdate()}>UPDATE</button>
          </div>
        </div>
      </div>
    </div>
  );
}
