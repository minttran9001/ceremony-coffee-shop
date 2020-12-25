import React, { useEffect, useState } from "react";
import "./SubscriptionBanner.scss";
import anime from 'animejs'
export default function SubscriptionBanner() {
  const [backGround, setBackGround] = useState("");
  useEffect(() => {
    window.addEventListener("scroll", parallaxHeader);
    animateText()
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
    var animh4 = document.querySelector(".animH4");
    animh4.innerHTML = animh4.textContent.replace(
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
        targets: [animh5,animh4,animp],
        translateX: [40, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 2200,
        delay: (el, i) => 500 + 50 * i,
      })
      .add({
        targets: [animh5,animh4,animp],
        translateX: [0, -30],
        opacity: [1, 0],
        easing: "easeInExpo",
        duration: 2000,
        delay: (el, i) => 100 + 50 * i,
      });
  };
  return (
    <div className="subscriptionBanner">
      <div className="subText">
        <h5 className="animH5">Choose Your</h5> 
        <h5 className='animH4'>Subscription</h5>
        <p className="animP">
          Go with the flow and let us send you coffees you’ll love. Sign up and
          leave the hard decisions to us. Or, build your own subscription to
          match your specific tastes.
        </p>
      </div>
      <img
        style={{ top: backGround }}
        src="https://cdn.shopify.com/s/files/1/2220/0129/t/6/assets/67009ad016b5--coverpage2.jpg?v=1602272129"
      />
    </div>
  );
}
