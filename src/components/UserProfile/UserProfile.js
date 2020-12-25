import React from "react";
import "./UserProfile.scss";
import {
  AiOutlineMail,
  AiOutlineEnvironment,
  AiOutlineProfile,
  AiOutlinePhone,
  AiFillBank,
  AiOutlineCoffee,
} from "react-icons/ai";
import OrderDetail from "../OrderDetail/OrderDetail";
import { NavLink } from "react-router-dom";
export default function UserProfile() {
  const viewOrder = () => {
    var orderTable = document
      .querySelector(".orderModal")
      .classList.add("fade");
  };
  return (
    <div className="userProfile">
      <img
        src={require("../../images/100ppi/122080107_731682854360910_7992613370772055655_n.jpg")}
      />
      <div className="profile">
        <div className="title">
          <h5>Your Account</h5>
        </div>
        <div className="detailContainer">
          <span className="helloUser">Hi Mint !</span>
          <div className="detail">
            <h6>
              <AiOutlineProfile className="icon" /> Mint Tran
            </h6>
            <p>
              <AiOutlineCoffee className="icon" /> 7 th July, 1999
            </p>
            <p>
              <AiOutlineMail className="icon" /> minttran .9002 @gmail.com
            </p>
            <p>
              <AiOutlinePhone className="icon" /> 0962448869
            </p>
            <p>
              <AiOutlineEnvironment className="icon" /> 81 st Wall Street, New
              York, US
            </p>
            <p>
              <AiFillBank className="icon" /> The Coffee House
            </p>
            <div>
              <NavLink
                className="link"
                style={{ color: "#222", textDecoration: "none" }}
                to="/profile"
              >
                <button>Edit Profile</button>
              </NavLink>
              <NavLink
                className="link"
                style={{ color: "#222", textDecoration: "none" }}
                to="/signin"
              >
                <button>Sign Out</button>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="latelyOrders">
          <h5>Your Lately Orders</h5>
          <table>
            <tr className="row">
              <th>Order Id</th>
              <th>Date</th>
              <th>Address</th>
              <th>Order Price</th>
              <th></th>
            </tr>

            <tr className="row order">
              <td>
                #0321
                <span></span>
              </td>
              <td>7th, July 2020</td>
              <td>Block A, Wall St. New York</td>
              <td>$100.00</td>
              <td>
                <button onClick={() => viewOrder()}>View</button>
              </td>
            </tr>

            <tr className="row order">
              <td>
                #0321
                <span></span>
              </td>
              <td>7th, July 2020</td>
              <td>Block A, Wall St. New York</td>
              <td>$100.00</td>
              <td>
                <button>View</button>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}
