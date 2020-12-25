import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./LocationBanner.scss";
import anime from "animejs";
import { Controller, Scene } from "react-scrollmagic";
export default function LocationBanner() {
  const [backGround, setBackGround] = useState();
  const [location, setLocation] = useState([
    {
      title: "BALTIMORE",
      name: "Cross Street Market",
      location: "1065 S. Charles St., Baltimore, MD 21230",
      img: require("../../images/100ppi/cross-st-header1-900x900.jpg"),
    },
    {
      title: "BALTIMORE",
      name: "Mt. Vernon",
      location: "520 Park Avenue, Baltimore, MD 21201",
      img: require("../../images/100ppi/ceremony-coffee-roasters-mt.vernon-cafe-hero2-1-900x900.jpg"),
    },
    {
      title: "BALTIMORE",
      name: "Harbor Point",
      location: "1312 Point St., Baltimore, MD 21231",
      img: require("../../images/100ppi/ceremony-coffee-roasters-harbor_point-cafe-hero3-900x900.jpg"),
    },
    {
      title: "ANNAPOLIS",
      name: "Riva",
      location: "2329 Forest Drive, Annapolis, MD 21401",
      img: require("../../images/100ppi/ceremony-coffee-roasters-riva-cafe-hero4-900x900.jpg"),
    },
    {
      title: "ANNAPOLIS",
      name: "The Roastery",
      location: "90 Russell St., Suite 500, Annapolis, MD 21401",
      img: require("../../images/100ppi/ceremony-coffee-roasters-baltimore-cafe-hero2-900x900.jpg"),
    },
    {
      title: "ANNAPOLIS",
      name: "The Roastery",
      location: "90 Russell St., Suite 500, Annapolis, MD 21401",
      img: require("../../images/100ppi/ceremony-coffee-roasters-roastery-cafe-hero2-900x900.jpg"),
    },
    {
      title: "BETHESDA",
      name: "Bethesda Crescent",
      location: "7475 Wisconsin Avenue, Bethesda, MD 20814",
      img: require("../../images/100ppi/beth_ext1-edit-900x900.jpg"),
    },
  ]);
  useEffect(() => {
    window.addEventListener("scroll", parallaxHeader);
    animateText();
  }, []);
  function parallaxHeader() {
    let value = window.scrollY;
    setBackGround(value * 0.6 + "px");
  }
  const animateText = () => {
    var animh5 = document.querySelector(".animH5");
    animh5.innerHTML = animh5.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    );
    var animp = document.querySelector(".animP");
    animp.innerHTML = animp.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    );
    anime
      .timeline({ loop: true })
      .add({
        targets: [animh5, animp],
        translateX: [40, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 2200,
        delay: (el, i) => 500 + 50 * i,
      })
      .add({
        targets: [animh5, animp],
        translateX: [0, -30],
        opacity: [1, 0],
        easing: "easeInExpo",
        duration: 2000,
        delay: (el, i) => 100 + 50 * i,
      });
  };
  const onScroll = (index) =>{
    var locationItem = document.querySelectorAll('.locationItem')[index]
    locationItem.classList.add('fade')
  }
  const onLeave = (index)=>{
    var locationItem = document.querySelectorAll('.locationItem')[index]
    locationItem.classList.remove('fade')
  }
  return (
    <>
      <div className="locationBanner">
        <img   style={{ top: backGround }}  src={require("../../images/100ppi/subbanner.jpg")} />
        <div className="locationTitle">
          <h6 className="animH5">Locations</h6>
          <p className="animP">
            Visit a Ceremony Coffee cafe near you for great coffee and food,
            educational workshops, and more
          </p>
        </div>
      </div>
      <Controller>
          <Scene 
          triggerElement='.whiteHall'
                classToggle='fade'
                triggerHook='0.5'
          >
                    <div className="whiteHall">
                    <div className="whiteHallImage">
                      <img src={require("../../images/100ppi/whall-1-1596x1080.jpg")} />
                    </div>
                    <div className="whiteHallTitle">
                      <p>BALTIMORE</p>
                      <h6>Whitehall Mill</h6>
                      <p>3300 Clipper Mill Rd., Baltimore, MD 21211</p>
                      <a className='button'>MENU & DETAILS</a>
                    </div>
                  </div>
          </Scene>
      </Controller>
      <div className="allLocations">
        {location.map((item, index) => (
          <Controller key={index} >
            <Scene>
            {(progress, event) => {
                      if (event.type =='start') {
                        onScroll(index)
                      } 
                      if(event.type=='leave'){
                        onLeave(index)
                      }
                      return (
                  <div className={(index+1)%2==0? 'locationItem right' : 'locationItem left'}>
                    <img src={item.img} />
                    <div className="locationDetails">
                      <p>{item.title}</p>
                      <h6>{item.name}</h6>
                      <p>{item.location}</p>
                      <NavLink
                        to={{
                          pathname: `/location/${index}`,
                        }}
                        exact
                        className="locationLink"
                      >
                        MENU & DETAILS
                      </NavLink>
                    </div>
                  </div>
                      )
                      }}
            </Scene>
          </Controller>
        ))}
      </div>
    </>
  );
}
