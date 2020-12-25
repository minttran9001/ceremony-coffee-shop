import React from "react";

import "./EditSub.scss";
import { AiOutlineClose } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
export default function EditSub() {
  const product = [
    {
      id: 1,
      category: "Espresso",
      type: "Tarrazú",
      name: "Costa Rica Nacientes Honey",
      price: 19,
      color: "#FCD8B8",
      img:
        "//cdn.shopify.com/s/files/1/2220/0129/products/CRNacientesHoney.jpg?v=1599848329",
    },
    {
      id: 7,
      category: "Espresso",
      type: "Chiapas",
      name: "Mexico Siltepec",
      price: 15,
      color: "#E7DAD3",
      img:
        "//cdn.shopify.com/s/files/1/2220/0129/products/MexicoSiltepec-2.jpg?v=1598639934",
    },
    {
      id: 2,
      category: "Subscription",
      type: "Huila",
      name: "Colombia El Roble",
      price: 19,
      color: "#DDCDE9",
      img:
        "//cdn.shopify.com/s/files/1/2220/0129/products/ColoElRoblehero.jpg?v=1599157793",
    },
    {
      id: 3,
      category: "Subscription",
      type: "Gedeo",
      name: "Ethiopia Halo Hartume",
      price: 19,
      color: "#FBC2C1",
      img:
        "//cdn.shopify.com/s/files/1/2220/0129/products/EthiopiaHaloHartume.jpg?v=1599157940",
    },
    {
      id: 4,
      category: "Single Origin",
      type: "Copan, Honduras",
      name: "Honduras Perdomo Honey",
      price: 18,
      color: "#DDCDE9",
      img:
        "//cdn.shopify.com/s/files/1/2220/0129/products/hondurasperdomo-hero.jpg?v=1599157862",
    },
    {
      id: 5,
      category: "Decaf",
      type: "Uraga, Guji",
      name: "Enthiopia Laayoo Natural",
      price: 19,
      color: "#FACDE5",
      img:
        "//cdn.shopify.com/s/files/1/2220/0129/products/Eth-Laayyoo-Hero.jpg?v=1599157970",
    },
    {
      id: 6,
      category: "Blend",
      type: "Uraga, Guji",
      name: "Ethiopia Raro ",
      price: 19,
      color: "#CEE3F1",
      img:
        "//cdn.shopify.com/s/files/1/2220/0129/products/rwandahumure1_f75d50bf-8bfc-4ae3-b392-c2129bf77f8a.jpg?v=1598032864",
    },
    {
      id: 8,
      category: "Filter",
      type: "Chemex",
      name: "Chemex Unfolded Half Moon Filters ",
      price: 19,
      color: "#EEEEEE",
      img:
        "//cdn.shopify.com/s/files/1/2220/0129/products/Chemex_Filters_cc4da06a-d0a3-480e-9e0a-4d9f921a4406.jpg?v=1511972047",
    },
    {
      id: 9,
      category: "Filter",
      type: "Uraga, Guji",
      name: "Aeropress Filters ",
      price: 4,
      color: "#EEEEEE",
      img:
        "//cdn.shopify.com/s/files/1/2220/0129/products/Aaeropress_Filters.jpg?v=1511972913",
    },
  ];
  const onSave = ()=>{
    document.querySelector(".saveNotify").classList.add("success");
    const timeout = setTimeout(() => {
      document.querySelector(".saveNotify").classList.remove("success");
    }, 3000);
    return () => {
      clearTimeout(timeout);
    };
  }
  return (
    <div className="editSub">
      <div className="yourSub">
        <div className="orderTable">
          <div className="title">
            <h5>Edit your Subscription</h5>
          </div>
          <div className="row rowHead">
            <div className="col">No.</div>
            <div className="col">Item</div>
            <div className="col">Quantity</div>
            <div className="col">Unit Price</div>
            <div className="col">Total Price</div>
            <div className="col"></div>
          </div>
          <div className="row">
            <div className="col">1.</div>
            <div className="col">
              <img src="//cdn.shopify.com/s/files/1/2220/0129/products/MexicoSiltepec-2.jpg?v=1598639934" />
              <div className="itemOr">
                <span>Mexico Siltepec</span>
                <span>Thursday / Weekly</span>
                <span>12oz</span>
              </div>
            </div>
            <div className="col">
              <input type="number" placeholder="1" />
            </div>
            <div className="col">
              <span>$12.00</span>
            </div>
            <div className="col">
              <span>$12.00</span>
            </div>
            <div className="col">
              <button>Remove</button>
            </div>
          </div>
          <div className="row">
            <div className="col">2.</div>
            <div className="col">
              <img src="//cdn.shopify.com/s/files/1/2220/0129/products/ColoElRoblehero.jpg?v=1599157793" />
              <div className="itemOr">
                <span>Colombia El Roble</span>

                <span>12oz</span>
              </div>
            </div>
            <div className="col">
              <input type="number" value="1" />
            </div>
            <div className="col">
              <span>$12.00</span>
            </div>
            <div className="col">
              <span>$24.00</span>
            </div>
            <div className="col">
              <button>Remove</button>
            </div>
          </div>
          <div className='save'>
          <NavLink className='link' to='/account'><button onClick={()=>{onSave()}}>SAVE</button></NavLink>
        </div>
        </div>
     
        <div className='save'>
            <NavLink className='link' to='/account'><BsArrowLeft className='icon'/>Back to Account</NavLink>
        </div>
      </div>
      <div className="productList">
        {product.map((selection, index2) => (
          <>
            <div
              key={index2}
              className={
                selection.id == 1
                  ? "buildProduct item isSelected"
                  : "buildProduct item"
              }
            >
              <div className="selection">
                <img src={selection.img} />
                <p>{selection.name}</p>
                <div className="selectGroup">
                  <label>Grind</label>
                  <select>
                    <option>Whole Beans</option>
                    <option>Espresso Grind</option>
                    <option>Stovetop Grind</option>
                    <option>Plunger Grind</option>
                  </select>
                </div>
                <div className="selectGroup">
                  <label>Size</label>
                  <select>
                    <option>250g</option>
                    <option>300g</option>
                  </select>
                </div>
              </div>
              <div className={"select"}>
                <button>SELECTED</button>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
