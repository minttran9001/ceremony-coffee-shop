import React from "react";
import { Controller, Scene } from "react-scrollmagic";
import "./LocationDetail.scss";

export default function LocationDetail() {
  return (
    <>
      <Controller>
        <Scene
          triggerElement=".locationDetail"
          triggerHook=".5"
          classToggle="fade"
        >
          <div className="locationDetail">
            <div className="locationText">
              <div className="nameOf">
                <h5 className="name">Mt. Vernon</h5>
              </div>
              <div className="addressOf">
                <h6 className="address">
                  520 Park Avenue, Baltimore, MD 21201
                </h6>
              </div>
              <div className="phoneOf">
                <h6 className="phone">(443)835-1659</h6>
              </div>
              <div className="openTime">
                <div className="weekdays">
                  <span>WEEKDAYS</span>
                  <h6>8AM - 4PM</h6>
                </div>
                <div className="weekdays">
                  <span>WEEKENDS</span>
                  <h6>SAT: 8AM - 4PM</h6>
                  <h6>SUN: 8AM - 4PM</h6>
                </div>
              </div>
              <p className="locationDes">
                Around the corner from the Walters Art Museum and Baltimore’s
                Washington Monument, our bright and airy café is a favorite
                gathering spot in this historic neighborhood known for
                creativity and the arts.
              </p>
              <a className="viewMap" href="#">
                View map
              </a>
            </div>
            <div className="locationImage">
              <img src="https://ceremonycoffee.com/wp-content/uploads/ceremony-coffee-roasters-mt.vernon-cafe-hero2-1-900x900.jpg" />
            </div>
          </div>
        </Scene>
      </Controller>
      <div className="service">
        <Controller>
          <Scene
            triggerElement=".serviceTitle"
            classToggle="fade"
            triggerHook=".7"
          >
            <div className="serviceTitle">
              <div className="title">
                <h6>Catering</h6>
              </div>

              <div className="content">
                <p>
                  From business meetings to baby showers. Great events start
                  with great coffee. Let our team help make your event one to
                  remember.
                </p>
                <p>
                  For more information about menus, pricing and space rentals,
                  contact catering@ceremonycoffee.com or 410-626-0011 x 111.
                </p>
              </div>
            </div>
          </Scene>
        </Controller>
        <Controller>
          <Scene
            triggerElement=".serviceImage"
            triggerHook=".5"
            classToggle="fade"
          >
            <div className="serviceImage">
              <img src="https://ceremonycoffee.com/wp-content/uploads/ceremony-coffee-roasters-mt.vernon-cafe-detail2-800x951.jpg" />
              <img src="https://ceremonycoffee.com/wp-content/uploads/ceremony-coffee-roasters-mt.vernon-cafe-detail1-800x951.jpg" />
            </div>
          </Scene>
        </Controller>
      </div>
    </>
  );
}
