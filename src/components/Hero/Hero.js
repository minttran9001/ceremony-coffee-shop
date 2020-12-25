import React, { useRef, useState, useEffect } from "react";
import "./Hero.scss";
import { gsap, TweenLite, TweenMax } from "gsap";
import hero1 from "../../images/100ppi/ceremony-hero-1.jpg";
import hero2 from "../../images/100ppi/ceremony-order-app-hero-1.jpg";
import hero3 from "../../images/100ppi/ecommslider3.jpg";
import hero4 from "../../images/100ppi/coloboxset-slider3.jpg";
import next from "../../images/next.svg";
import prev from "../../images/pre.svg";
import anime from "animejs";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { NavLink } from "react-router-dom";
export default function Hero() {
  const [backGround, setBackGround] = useState("");
  const [state, setState] = useState({
    isActive: 0,
  });
  const [x, setX] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", parallaxHeader);
  }, []);
  function parallaxHeader() {
    let value = window.scrollY;
    setBackGround(value * 0.5 + "px");
  }
  let sliderArr = [
    {
      main: "Subscription",
      title: "Columbia Colour Bourbon Box Set",
      quote: "Two 6 oz. bags of the rare and elusive Pink Bourbon cultivar.",
      img: hero4,
      button: "LEARN MORE",
      link: "/subscription",
    },
    {
      main: "WholeSale",
      title: "Explore Our Wholesale Program",
      quote:
        "Our Wholesale Team is dedicated to helping coffee programs across the US to stand out and tell their stories.  ",
      img: hero3,
      button: "LET'S TALK",
      link: "/wholesale",
    },
    {
      main: "Shop",
      title: "Let Us Ship To Your Door",
      quote: "FREE Shipping For On Order Of $20.00 +",
      img: hero1,
      link: "/shop",
      button: "SHOP NOW",
    },
    {
      main: "Our Mobile App",
      title: "Order Made Easy",
      quote: "Carry-Out At Our Café",
      img: hero2,
      link: "/",
      button: "DOWNLOAD NOW",
    },
  ];
  var slider = document.getElementsByClassName("slide");
  var text = document.getElementsByClassName("text");
  var carouselItem = document.getElementsByClassName("carouselItem");
  function goLeft() {
    if (state.isActive > 0) {
      slider.item(state.isActive).classList.remove("isSelected");
      text.item(state.isActive).classList.remove("isSelected");
      carouselItem.item(state.isActive).classList.remove("isSelected");

      slider.item(state.isActive - 1).classList.add("isSelected");
      text.item(state.isActive - 1).classList.add("isSelected");
      carouselItem.item(state.isActive - 1).classList.add("isSelected");
      fadeIn(state.isActive, state.isActive - 1);
      setState({ isActive: state.isActive - 1 });
    } else {
      slider.item(state.isActive).classList.remove("isSelected");
      text.item(state.isActive).classList.remove("isSelected");
      carouselItem.item(state.isActive).classList.remove("isSelected");
      carouselItem.item(state.isActive - 1).classList.add("isSelected");
      slider.item(sliderArr.length - 1).classList.add("isSelected");
      text.item(sliderArr.length - 1).classList.add("isSelected");
      fadeIn(state.isActive, sliderArr.length - 1);
      setState({ isActive: sliderArr.length - 1 });
    }
  }

  function goRight() {
    if (state.isActive < sliderArr.length - 1) {
      slider.item(state.isActive).classList.remove("isSelected");
      text.item(state.isActive).classList.remove("isSelected");
      carouselItem.item(state.isActive).classList.remove("isSelected");

      slider.item(state.isActive + 1).classList.add("isSelected");
      text.item(state.isActive + 1).classList.add("isSelected");
      carouselItem.item(state.isActive + 1).classList.add("isSelected");
      fadeIn(state.isActive, state.isActive + 1);
      setState({ isActive: state.isActive + 1 });
    } else {
      slider.item(state.isActive).classList.remove("isSelected");
      text.item(state.isActive).classList.remove("isSelected");
      carouselItem.item(state.isActive).classList.remove("isSelected");
      carouselItem.item(0).classList.add("isSelected");
      slider.item(0).classList.add("isSelected");
      text.item(0).classList.add("isSelected");
      fadeIn(state.isActive, 0);
      setState({ isActive: 0 });
    }
  }

  const fadeIn = (cur, next) => {
    var nextContent = text.item(next);
    var curContent = text.item(cur);
    var topTextNext = nextContent.querySelector(" .topText");
    topTextNext.innerHTML = topTextNext.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    );
    var topTextCur = curContent.querySelector(" .topText");
    topTextCur.innerHTML = topTextCur.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    );
    var headTextNext = nextContent.querySelector(" .headText");
    headTextNext.innerHTML = headTextNext.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    );
    var headTextCur = curContent.querySelector(" .headText");
    headTextCur.innerHTML = headTextCur.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    );
    var subTextNext = nextContent.querySelector(" .subText");
    subTextNext.innerHTML = subTextNext.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    );
    var subTextCur = curContent.querySelector(" .subText");
    subTextCur.innerHTML = subTextCur.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    );
    var buttonNext = nextContent.querySelector(" .button");

    var buttonCur = curContent.querySelector(" .button");

    var letterCur = curContent.querySelectorAll(" .letter");
    var letterNext = nextContent.querySelectorAll(" .letter");
    anime
      .timeline({ loop: false, delay: 0 })
      // .add({
      //   targets:[topTextCur,headTextCur,subTextCur,buttonCur,letterCur] ,
      //   translateY: [ 0,"30px"],
      //   opacity: [1,0],

      //   delay: (el, i) => 5 * i,
      // })
      .add({
        targets: [
          topTextNext,
          headTextNext,
          subTextNext,
          buttonNext,
          letterNext,
        ],
        translateY: ["40px", 0],
        opacity: [0, 1],
        translateZ: 0,
        delay: (el, i) => 10 * i,
      });
  };
  const carouselChange = (index) => {
    slider.item(state.isActive).classList.remove("isSelected");
    text.item(state.isActive).classList.remove("isSelected");
    carouselItem.item(state.isActive).classList.remove("isSelected");
    carouselItem.item(index).classList.add("isSelected");
    slider.item(index).classList.add("isSelected");
    text.item(index).classList.add("isSelected");
    fadeIn(state.isActive, index);
    setState({ isActive: index });
  };
  useEffect(() => {
    const timeout = setTimeout(() => {
      goRight();
    }, 4000);
    return () => clearTimeout(timeout);
  }, [state.isActive]);
  return (
    <section className="hero">
      <div className="slider">
        {sliderArr.map((item, index) => {
          return (
            <div
              key={index}
              className={index == state.isActive ? "slide isSelected" : "slide"}
            >
              <div className="content">
                <img style={{ top: backGround }} src={item.img} alt="product" />
              </div>
            </div>
          );
        })}

        <div className="slideBtn">
          <button
            onClick={() => {
              goLeft();
            }}
            className="btn goLeft"
          >
            <img src={prev} alt="prev" />
          </button>
          <button
            onClick={() => {
              goRight();
            }}
            className="btn goRight"
          >
            <img src={next} alt="next" />
          </button>
        </div>
      </div>
      <div className="contentText">
        {sliderArr.map((item, index) => {
          return (
            <div
              key={index}
              className={index == state.isActive ? "text isSelected" : "text"}
            >
              <p className="ml6 topText ">
                <span className="text-wrapper">
                  <span className="letters topText ">
                    Professional Partnership
                  </span>
                </span>
              </p>
              <h6 className="ml6 headText">
                <span className="text-wrapper">
                  <span className="letters headText ">{item.title}</span>
                </span>
              </h6>
              <p className="ml6 subText ">
                <span className="text-wrapper">
                  <span className="letters subText ">{item.quote}</span>
                </span>
              </p>
              <NavLink
                to={item.link}
                style={{ color: "white", textDecoration: "none" }}
              >
                {" "}
                <button className="ml6 button ">
                  <span className="text-wrapper">
                    <span className="letters button ">{item.button}</span>
                  </span>
                  <div className="line"></div>
                </button>
              </NavLink>
            </div>
          );
        })}
      </div>
      <div className="carousel">
        <div className="carouselWrap">
          <MdKeyboardArrowLeft className="btn" onClick={goLeft} />
          {sliderArr.map((item, index) => (
            <div
              key={index}
              onClick={() => carouselChange(index)}
              className={
                index == state.isActive
                  ? "carouselItem isSelected"
                  : "carouselItem"
              }
            >
              <div className="pageWrap">
                <span className="num">0{index + 1}</span>
              </div>
            </div>
          ))}
          <MdKeyboardArrowRight className="btn" onClick={goRight} />
        </div>
      </div>
    </section>
  );
}
