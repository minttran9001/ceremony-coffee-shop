import React, { useEffect, useState } from "react";
import { useHistory, useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as action from "../../actions/cart/index";
import arrow from "../../images/up-arrow.svg";
import "./ProductDetails.scss";
import { Controller, Scene } from "react-scrollmagic";
import anime from "animejs";
export default function ProductDetails() {
  const [backGround, setBackGround] = useState();
  const [opacity, setOpacity] = useState(0);
  const [backGroundColor, setBackGroundColor] = useState();
  const [marginBottom, setMarginBottom] = useState(0);
  const [scrollValue, setScrollValue] = useState(0);
  const getProduct = useSelector((state) => state.product);
  const dispatch = useDispatch();
  let match = useParams();
  let history = useHistory();
  let location = useLocation();
  const [product, setProduct] = useState({});
  function getById() {
    let product = getProduct.find((x) => x.id == match.productId);
    if (product != null) {
      setProduct(product);
    } else {
      setProduct({
        id: 0,
        category: "",
        type: "",
        name: "",
        price: 0,
        color: "",
        img: "",
      });
    }
  }
  function parallaxHeader() {
    let value = window.scrollY;

    setBackGround(-value * 0.9);
  }
  function addToCart() {
    addToCartNotify()
    dispatch(action.addToCart(product, 1));
  }
  useEffect(() => {
    window.addEventListener("scroll", parallaxHeader);
    var timeout = setTimeout(() => {
      setBackGround(0);
      setOpacity(1);
    }, 1300);
    return () => {
      clearTimeout(timeout);
    };
  }, []);
  const addToCartNotify = () =>{
  
    document.querySelector('.addedNotify').classList.add('success')
    const timeout = setTimeout(()=>{
      document.querySelector('.addedNotify').classList.remove('success')

    },3000)
    return ()=>{
      clearTimeout(timeout)
    }
  }
  useEffect(() => {
    getById();
  }, [match]);
  function triggerStart() {
    setBackGroundColor("#fcfbf9");
    setMarginBottom(150);
  }
  function triggerLeave() {
    setMarginBottom(0);
    setBackGroundColor(product.color);
  }
  return (
    <div style={{ background: backGroundColor }} className="productDetail">
      <div className="details">
        <div className="productImg">
          <img
            className="productImage"
            style={{
              transform: `translateX(${-backGround}px) translateY(${backGround}px)`,
              opacity: opacity,
            }}
            src={product.img}
          />
        </div>
        <Controller>
          <Scene
            triggerElement=".productDetails"
            triggerHook=".6"
            classToggle="fade"
          >
            <div className="productDetails">
              <p className="productType">{product.type}</p>
              <h5 className="productName">{product.name}</h5>
              <p className="productCate">{product.category}</p>
              <p className="productPrice">${product.price}.00</p>
              <p className="productProp">Guava, Blood Orange, Sparkling </p>
              {/* <span className="productQuantity">Quantity</span>
              <input type='number' className="productQuantityNum" placeholder='1'/> */}
              <div className="selectBox">
                <label htmlFor="size">Quantity</label>
                <div>
                <input type='number' className="size productQuantityNum" placeholder='1'/>
                  {/* <img src={arrow} /> */}
                </div>
              </div>
              <div className="selectBox">
                <label htmlFor="size">SIZE</label>
                <div>
                  <select id="size" name="size">
                    <option>12oz</option>
                    <option>5lb</option>
                  </select>
                  <img src={arrow} />
                </div>
              </div>
              <div className="selectBox">
                <label htmlFor="type">GRIND TYPE</label>
                <div>
                  <select id="type" name="type">
                    <option>Whole Bean</option>
                    <option>Espresso</option>
                  </select>
                  <img src={arrow} />
                </div>
              </div>
              <div className="selectBox">
                <label htmlFor="deliver">DELIVER EVERY</label>
                <div>
                  <select id="deliver" name="deliver">
                    <option>2 Weeks</option>
                    <option>1 Weeks</option>
                    <option>1 Time</option>
                  </select>
                  <img src={arrow} />
                </div>
              </div>
              <button className="addToCart" onClick={() => addToCart()}>
                ADD TO CART
              </button>
            </div>
          </Scene>
        </Controller>
      </div>

      <div className="moreDetails">
        <Controller>
          <Scene
            triggerElement=".moreDetailsTitle"
            triggerHook=".5"
            classToggle="fade"
          >
            <div className="moreDetailsTitle">
              <p>ROAST LEVEL 1 - LIGHT</p>
              <h5>A traceable Ethiopia natural lot</h5>
              <hr />
              <p>Dazzling cup full of tropical fruit flavors</p>
              <p>
                The word Laayyoo refers to an indigenous tree in Uraga,
                Ethiopia. It's used as a shade tree, but also has deep roots
                allowing the leaves that fall to have the soil space to create a
                nutrient dense compost and fertilizer. The coffee is processed
                by Ture Waji. His company, Sookoo Coffee, has two washing
                stations in the Guji region, one here in Uraga and one in
                Shakiso. He currently specializes in natural coffees, like this
                lot, and has plans to start growing into washed coffees in the
                next harvest.
              </p>
              <p>
                The Laayyoo is grown at 2100-2350 masl by a group of producers
                from the village of Teraga. Working with our importing partner,
                The Coffee Quest, we know that fifty-seven percent of the total
                costs of this coffee went directly to the farmers. Ture provides
                pre-harvest loans to producers to allow them to pay for
                maintenance labor around the farms. The team at Sookoo provide
                agricultural education in the off season, they have built a
                school for the local children, and built better roads to improve
                the infrastructure for coffee transport.{" "}
              </p>
              <p>
                Ture is known as the "King of Guji" for a reason. This natural
                coffee is a stunner. Dial into an exciting, clean natural with
                notes of pink guava and blood orange. We recommend a 1:16 brew
                ratio, filtered water at 208-210℉, a medium grind, and a 3-3.5
                minute brew cycle.{" "}
              </p>
            </div>
          </Scene>
        </Controller>
        <Controller>
          <Scene
            triggerElement=".moreDetailsColor"
            triggerHook=".6"
            classToggle="fade"
          >
            {(progress, event) => {
              event.type == "start" ? triggerStart() : triggerLeave();
              return (
                <div className="moreDetailsColor">
                  <h5>Serve Ceremony Wherever You Are</h5>
                  <p>
                    There’s a profound sense of partnership that reverberates
                    throughout our wholesale ecosystem. We help build coffee
                    programs to grow. Scroll down to learn more about working
                    with us.
                  </p>
                  <p>
                    Coffee Our offering is built to offer a broad spectrum of
                    fresh options. If you want microlots that burst with fruit,
                    we’re here for you. You want supremely balanced coffees on
                    your menu? Maybe your market demands a focus on roasty,
                    bittersweet coffees? Whatever your preferences, we can’t
                    wait to dive into our offering with you to explore the next
                    coffees on your menu.
                  </p>
                  <img
                    className="trigger"
                    src={require("../../images/100ppi/details.jpg")}
                  />
                </div>
              );
            }}
          </Scene>
        </Controller>
      </div>
    </div>
  );
}
