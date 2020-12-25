import React from "react";
import "./Benefit.scss";
import Coffee from "../../images/100ppi/teamcupping.jpg";
import Education from "../../images/100ppi/ceremony-coffee-roasters-wholesale-detail2-900x900.jpg";
import Tech from "../../images/100ppi/ceremony-coffee-roasters-wholesale-detail3-900x900.jpg";
import AllStuff from "../../images/100ppi/ceremony-coffee-roasters-wholesale-other-stuff.jpg";
import Order from "../../images/100ppi/ceremony-coffee-roasters-wholesale-ordering-and-support.jpg";
import anime from "animejs";
import { Controller, Scene } from "react-scrollmagic";
export default function Benefit(prop) {
  const benefitArr = [
    {
      class: "first",
      title: "Coffee",
      description:
        "Our offering is built to offer a broad spectrum of fresh options. If you want microlots that burst with fruit, we’re here for you. You want supremely balanced coffees on your menu? Maybe your market demands a focus on roasty, bittersweet coffees? Whatever your preferences, we can’t wait to dive into our offering with you to explore the next coffees on your menu.",
      img: Coffee,
      background: require("../../images/100ppi/home-4-image-2.png"),
    },
    {
      class: "second",
      title: "Technical Services",
      description:
        "Our technical service team is the best in the business for good reason. With countless hours of certified training and field work on espresso machines, brewers, grinders, and pretty much everything else with a drain or an electrical outlet, our team has you covered. They’re even helpful with Star Wars trivia and camping tips.",
      img: Tech,
      background: require("../../images/100ppi/landing-2-img-3.png"),
    },
    {
      class: "third",
      title: "Education",
      description:
        "We know what it takes to deliver an exceptional cup of coffee. We also know that you don’t always have the time to train your staff as much as you’d like. Our talented education team works with you in our Baltimore and DC Workshops, in your space, or even over video chat. Let our educators take your team to the next level.",
      img: Education,
      background: require("../../images/100ppi/home-4-image-5.png"),
    },
    {
      class: "forth",
      title: "Ordering & Support",
      description:
        "We’ve got your back on every question and on every order. Our customer service team stays dialed-in with our current offering to help with everything from ordering your next single origin microlot to finding solutions to coffee problems you never knew existed.",
      img: Order,
      background: require("../../images/100ppi/landing-2-img-7.png"),
    },
    {
      class: "fifth",
      title: "All the Other Stuff",
      description:
        "We know that there are a million other things that you need to be successful. We may not have everything you need, but we’ve got a lot, and we definitely have the expertise to point you in the right direction. Among the provisions we sell: teas, milk alternatives, flavoring syrups, coffee filters, bar tools, and much more.",
      img: AllStuff,
      background: require("../../images/100ppi/landing-2-img-3.png"),
    },
  ];

  const onScroll = (index) => {
    var benefitContent = document.querySelectorAll(".benefitContent")[index];
    benefitContent.querySelector('.benefitText').classList.add('fade')
   if((index+1)%2!=0)
   {
    var img = benefitContent.querySelector('.imgRight')
    img.classList.add('fade')
    var rightImg = benefitContent.querySelector('.right')
    rightImg.classList.add('fade')
   }
   else{
    var img = benefitContent.querySelector('.imgLeft')
    img.classList.add('fade')
    var rightImg = benefitContent.querySelector('.left')
    rightImg.classList.add('fade')
   }
  
  };
  const onLeave = (index) => {
    var benefitContent = document.querySelectorAll(".benefitContent")[index];
    benefitContent.querySelector('.benefitText').classList.remove('fade')
   if((index+1)%2!=0)
   {
    var img = benefitContent.querySelector('.imgRight')
    img.classList.remove('fade')
    var rightImg = benefitContent.querySelector('.right')
    rightImg.classList.remove('fade')
   }
   else{
    var img = benefitContent.querySelector('.imgLeft')
    img.classList.remove('fade')
    var rightImg = benefitContent.querySelector('.left')
    rightImg.classList.remove('fade')
   }
  };

  return (
    <div className="benefit">
      <h5 className="benefitTitle">Benefits</h5>
      {benefitArr.map((item, index) => (
        <Controller>
          <Scene triggerHook={0.5}>
            {(progress, event) => {
              if (event.type == "start") {
                onScroll(index);
              }
              if (event.type == "leave") {
                onLeave(index);
              }
              if ((index + 1) % 2 != 0) {
                return (
                  <div key={index} className={`benefitContent ${item.class}`}>
                    <img
                      className="backGroundImg right bg1"
                      src={item.background}
                    />
                    <img className="benefitImg imgRight" src={item.img} />
                    <div className="benefitText">
                      <p className='title'>{item.title}</p>
                      <p className='description'>{item.description}</p>
                    </div>
                  </div>
                );
              } else {
                return (
                  <div key="index" className={`benefitContent ${item.class}`}>
                    <img
                      className="backGroundImg left bg2"
                      src={item.background}
                    />

                    <div className="benefitText">
                      <p className='title'>{item.title}</p>
                      <p className='description'>{item.description}</p>
                    </div>
                    <img className="benefitImg imgLeft" src={item.img} />
                  </div>
                );
              }
            }}
          </Scene>
        </Controller>
      ))}
    </div>
  );
}
