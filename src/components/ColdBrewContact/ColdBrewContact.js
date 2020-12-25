import React from "react";
import "./ColdBrewContact.scss";
import { SiMinutemailer, SiGooglemaps } from "react-icons/si";
import { AiTwotonePhone } from "react-icons/ai";
import { Controller, Scene } from "react-scrollmagic";
import { NavLink } from "react-router-dom";
export default function ColdBrewContact() {
  const onScroll = () => {
    var coldBrewWrapper = document.querySelector(".coldBrewImage");
    coldBrewWrapper.querySelector(".right").classList.add("fade");
    coldBrewWrapper.querySelector(".left").classList.add("fade");
  };
  const onLeave = () => {
    var coldBrewWrapper = document.querySelector(".coldBrewImage");
    coldBrewWrapper.querySelector(".right").classList.remove("fade");
    coldBrewWrapper.querySelector(".left").classList.remove("fade");
  };
  const addToCartNotify = () =>{
  console.log('added')
    document.querySelector('.addedNotify').classList.add('success')
    const timeout = setTimeout(()=>{
      document.querySelector('.addedNotify').classList.remove('success')

    },3000)
    return ()=>{
      clearTimeout(timeout)
    }
  }
  return (
    <div className="coldBrewContact">
      <Controller>
        <Scene
          triggerHook={0.8}
          triggerElement=".coldBrewQuote"
          classToggle="fade"
        >
          <div className="coldBrewQuote">
            <p>
              “Ceremony’s cold brew is a testament to their passion and skill in
              creating extraordinary coffees. We could not be more proud of the
              way they embraced RAIN technology to prove how delicious and
              unique tasting cold coffee can be.”
            </p>
          </div>
        </Scene>
      </Controller>
      <hr />
      <Controller>
        <Scene
          triggerElement=".quoteAuthor"
          triggerHook="0.6"
          classToggle="fade"
        >
          <div className="quoteAuthor">
            <p>LOU VASTARDIS, BKON CO-FOUNDER</p>
            <p>BKONBREW.COM</p>
          </div>
        </Scene>
      </Controller>

      <Controller>
        <Scene>
          {(progress, event) => {
            if (event.type == "start") {
              onScroll();
            }
            if (event.type == "leave") {
              onLeave();
            }
            return (
              <div className="coldBrewImage">
                <div className="pouringImage left">
                  <img
                    src={require("../../images/100ppi/nitrohandle-ceremony-coffee-recrop-800x999.jpg")}
                  />
                  <div className="pouringTitle">
                    <p>
                      Available at regional retailers, Ceremony locations, and
                      wholesale
                    </p>
                  </div>
                </div>
                <div className="pouringImage right">
                  <img
                    src={require("../../images/100ppi/cmy-coldbrew-pouring-1-800x999.jpg")}
                  />
                  <div className="pouringTitle">
                    <p>Nitro kegs available through wholesale</p>
                  </div>
                </div>
              </div>
            );
          }}
        </Scene>
      </Controller>
      <Controller>
        <Scene
          triggerElement=".coldBrewOrder"
          triggerHook="0.6"
          classToggle="fade"
        >
          <div className="coldBrewOrder">
            <h6 className="title">ORDER NOW</h6>
            <div>
              <div className="coldBrewImage">
                <img src={require("../../images/100ppi/coldbrew.jpg")} />
              </div>
              <div className="coldBrewDetails">
                <h6>Cold Brew</h6>

                <p>
                  Ceremony’s cold brew is a testament to their passion and skill
                  in creating extraordinary coffees. We could not be more proud
                  of the way they embraced RAIN technology to prove how
                  delicious and unique tasting cold coffee can be
                </p>
                <p className="price">$20.00 per</p>
                <div className='coldBrewBtn'>
                <button onClick={()=>addToCartNotify()}>ADD TO CART</button>
                <button className='moreInfo'><NavLink style={{color:'#000',textDecoration:'none'}} to='/shop/20'>MORE INFO</NavLink></button>
                </div>
              </div>
            </div>
          </div>
        </Scene>
      </Controller>
      <Controller>
        <Scene
          triggerElement=".coldBrewSec"
          triggerHook="0.6"
          classToggle="fade"
        >
          <div className="coldBrewOrder coldBrewSec">
            <div>
              <div className="coldBrewImage">
                <img
                  src={require("../../images/100ppi/coldbrew-massive.jpg")}
                />
              </div>
              <div className="coldBrewDetails">
                <h6>Cold Brew Massive</h6>

                <p>
                  Ceremony’s cold brew is a testament to their passion and skill
                  in creating extraordinary coffees. We could not be more proud
                  of the way they embraced RAIN technology to prove how
                  delicious and unique tasting cold coffee can be
                </p>
                <p className="price">$10.00 per</p>
                <div className='coldBrewBtn'>
                <button  onClick={()=>addToCartNotify()}>ADD TO CART</button>
                <button className='moreInfo'><NavLink style={{color:'#000',textDecoration:'none'}} to='/shop/19'>MORE INFO</NavLink></button>
                </div>
              </div>
            </div>
          </div>
        </Scene>
      </Controller>
      <div className="coldBrewInfo">
        <div>
          <Controller>
            <Scene triggerElement=".one" triggerHook="0.8" classToggle="fade">
              <div className="infoGroup one">
                <SiGooglemaps className="icon" />
                <div>
                  <h6>For ordering and wholesale info, contact:</h6>
                  <p>
                    info@ceremonycoffee.com 410-626-0011 To open your wholesale
                    account, sign up here.
                  </p>
                </div>
              </div>
            </Scene>
          </Controller>
          <Controller>
            <Scene triggerElement=".two" triggerHook="0.8" classToggle="fade">
              <div className="infoGroup two">
                <SiMinutemailer className="icon" />
                <div>
                  <h6>Wholesale details:</h6>
                  <p>
                    12 cans per case, with a 3 case minimum per order. Nitro 1/6
                    + 1/4 kegs available. Wholesale Deliveries in MD, DC, NoVa,
                    Wilmington, and Philadelphia.
                  </p>
                </div>
              </div>
            </Scene>
          </Controller>
          <Controller>
            <Scene triggerElement=".three" triggerHook="0.8" classToggle="fade">
              <div className="infoGroup three">
                <AiTwotonePhone className="icon" />
                <div>
                  <h6>Find us in these retailers:</h6>
                  <p>
                    Ceremony Cafes, Whole Foods Market, MOM’s Organic Market,
                    Glen’s Garden Market, Green Valley Market,
                  </p>
                </div>
              </div>
            </Scene>
          </Controller>
        </div>
        <Controller>
          <Scene triggerElement=".infoImg" triggerHook="0.5" classToggle="fade">
            <img className='infoImg' src={require("../../images/100ppi/coldbrew-contact.jpg")} />
          </Scene>
        </Controller>
      </div>
    </div>
  );
}
