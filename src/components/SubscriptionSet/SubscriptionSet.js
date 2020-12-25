import React from "react";
import "./SubscriptionSet.scss";
import { Controller, Scene } from "react-scrollmagic";
import { gsap, Power1 } from "gsap";
import SubscriptionDetail from "../SubscriptionDetail/SubscriptionDetail";
export default function SubscriptionSet() {
  const onScroll = () => {
    gsap.to(".subscriptionGrid", 1, {
      opacity: 1,
      y: 0,
      ease: Power1.easeIn,
      delay: (el, i) => 5 * i,
    });
    gsap.to(".bg1", 1, {
      opacity: 1,
      x: 0,
      ease: Power1.easeIn,
      delay: 0.3,
    });
    gsap.to(".bg2", 1, {
      opacity: 1,
      x: 0,
      ease: Power1.easeIn,
      delay: 0.3,
    });
    gsap.to(".bg3", 1, {
      opacity: 1,
      x: 0,
      ease: Power1.easeIn,
      delay: 0.3,
    });
    gsap.to(".bg4", 1, {
      opacity: 1,
      x: 0,
      ease: Power1.easeIn,
      delay: 0.3,
    });
  };
  const onEndScroll = () => {
    gsap.to(".subscriptionGrid", 1, {
      opacity: 0,
      y: "50px",
      ease: Power1.easeIn,
      delay: (el, i) => 5 * i,
    });
    gsap.to(".bg1", 1, {
      opacity: 1,
      x: -130,
      ease: Power1.easeIn,
      delay: 0.3,
    });
    gsap.to(".bg2", 1, {
      opacity: 1,
      x: -130,
      ease: Power1.easeIn,
      delay: 0.3,
    });
    gsap.to(".bg3",1, {
      opacity: 1,
      x: 120,
      ease: Power1.easeIn,
      delay: 0.3,
    });
    gsap.to(".bg4",1, {
      opacity: 1,
      x: 120,
      ease: Power1.easeIn,
      delay: 0.3,
    });
  };
  const openSubDetail = ()=>{
    document.body.style.overflowY='hidden'
    document.querySelector('.subscriptionDetail').classList.add('fade')
  }
  return (
    <Controller>
      <Scene triggerHook={0.4}>
        {(progress, event) => {
          if (event.type == "start") {
            onScroll();
          }
          if (event.type == "leave") {
            onEndScroll();
          }
          return (
            <>
           
              <div className="subscriptionSet">
          
                <img
                  className="backGroundImg bg1"
                  src={require("../../images/100ppi/home-4-image-2.png")}
                />
                <img
                  className="backGroundImg bg2"
                  src={require("../../images/100ppi/home-4-image-5.png")}
                />
                <div className="subscriptionGrid">
                  <div className="setTitle">
                    <h5>Origin Set</h5>

                    <img src="//cdn.shopify.com/s/files/1/2220/0129/products/ceremony-coffee-roasters-subscription-origin-set_004d957f-0365-485f-97bc-eaae24b07704.jpg?v=1517587235" />
                    <p>
                      Two different 6 oz bags of the most incredible single
                      origins we're roasting every other week. Perfect for your
                      adventurous, non-committal, coffee-loving self (or
                      friend).
                    </p>
                    <h6>$100.00</h6>
                  </div>
                  <div className="setButton">
                    <button>ADD TO CART</button>
                    <button onClick={()=>openSubDetail()} className="moreInfo">MORE INFO</button>
                  </div>
                </div>
                <div className="subscriptionGrid">
                  <div className="setTitle">
                    <h5>Blend Set</h5>

                    <img src="//cdn.shopify.com/s/files/1/2220/0129/products/ceremony-coffee-roasters-subscription-origin-set_004d957f-0365-485f-97bc-eaae24b07704_480x480.jpg?v=1517587235" />
                    <p>
                      One 12 oz bag of the best blend we’re roasting every other
                      week. Our roasting team selects the blend weekly based on
                      QC scoring, so it’s sure to be a stunner.
                    </p>
                    <h6>$100.00</h6>
                  </div>
                  <div className="setButton">
                    <button>ADD TO CART</button>
                    <button onClick={()=>openSubDetail()} className="moreInfo">MORE INFO</button>
                  </div>
                </div>
                <div className="subscriptionGrid">
                  <div className="setTitle">
                    <h5>Build Your Own</h5>

                    <img src="//cdn.shopify.com/s/files/1/2220/0129/products/fall-hero1.jpg?v=1599055584" />
                    <p>
                      Prefer to have full control? Customize your subscription
                      by choosing from our delicious coffees below. You can
                      choose to have coffee delivered every 1, 2, 3 or 4 weeks.
                    </p>
                    <h6>Starting at $13.50</h6>
                  </div>
                  <div className="setButton">
                    <button className="moreInfo"><a style={{color:'#fff',textDecoration:'none'}} href='#subbuild'>BUILD NOW</a></button>
                  </div>
                </div>
                <img
                  className="backGroundImg bg3"
                  src={require("../../images/100ppi/landing-2-img-3.png")}
                />
                <img
                  className="backGroundImg bg4"
                  src={require("../../images/100ppi/landing-2-img-7.png")}
                />
              </div>
            </>
          );
        }}
      </Scene>
    </Controller>
  );
}
