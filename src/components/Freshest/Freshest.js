import React, { useEffect, useRef, useState } from "react";
import "./Freshest.scss";
import { Controller, Scene } from "react-scrollmagic";
import { gsap, TweenLite, Power1 } from "gsap";
import { NavLink } from "react-router-dom";
export default function Freshest() {
  //ref
  let productImgRef = useRef(null);
  let productNameRef = useRef(null);
  let productTypeRef = useRef(null);
  //end ref
  useEffect(() => {}, []);
  function animationRight() {
    gsap.to(".freshProduct", 1, {
      opacity: 1,
      x: "0%",
    });
    gsap.to(".freshTitle", 1, {
      opacity: 1,
      y: 0,
      ease: Power1.easeIn,
    });
    gsap.to(".freshHead", 1, {
      opacity: 1,
      y: 0,
      ease: Power1.easeIn,
    })
    gsap.to(".freshSub", 1, {
      opacity: 1,
      y: 0,
      ease: Power1.easeIn,
    })
    gsap.to(".shopNowBtn", 1, {
        opacity: 1,
        y: 0,
        ease: Power1.easeIn,
      });
  }
  return (
    <Controller>
      <Scene triggerHook={0.4}>
        {(progress, event) => {
          if (event.type == "start") {
            animationRight();
          }
          return (
            <div className="freshest">
              <div className="freshProduct">
                <div className="product">
                  <img
                    ref={(el) => (productImgRef = el)}
                    className="img1"
                    src={require('../../images/100ppi/product/holiday20hero.jpg')}
                  />
                  <div className="productDetail">
                    <p>SINGLE ORIGIN</p>
                    <p className="productName">Ethiopia Raro</p>
                    <p>$19.00</p>
                  </div>
                </div>
                <div className="product">
                  <img
                    className="img2"
                    src={require('../../images/100ppi/product/whoppers-1.jpg')}
                  />
                  <div className="productDetail">
                    <p>SINGLE ORIGIN</p>
                    <p className="productName">Ethiopia Halo Harrtume</p>
                    <p>$19.00</p>
                  </div>
                </div>
              </div>
              <div className="freshText">
                <p className="freshTitle">NEW ARRIVALS</p>
                <h5 className="freshHead">Freshest of the Fresh</h5>
                <p className="freshSub">
                  Featuring the freshest in our beautiful range of seasonal
                  coffees sourced throughout the year.The coffee is lot-separated based on varietal. The lot we purchased is purely of the Caturra varietal. She has been experimenting with fermentation and has a new protocol this year! The cherries are picked over three days. Each day the cherries are placed in a tank and 'pre-fermented.' On the final and third picking day, all the cherries are depulped together, fermented for approximately 36 hours, washed, and then dried.
                </p>
                <NavLink to='/shop' style={{color:'#222',textDecoration:'none'}} className="shopNowBtn">SHOP NOW</NavLink>
              </div>
            </div>
          );
        }}
      </Scene>
    </Controller>
  );
}
