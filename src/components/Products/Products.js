import React, { useEffect, useRef, useState, useCallback } from "react";
import "./Product.scss";
import { useDispatch, useSelector } from "react-redux";
import * as action from "../../actions/cart/index";
import sortArrow from "../../images/up-arrow.svg";
import { NavLink } from "react-router-dom";
import { gsap, TweenLite } from "gsap";
import { Controller, Scene } from "react-scrollmagic";
import { CSSTransition, SwitchTransition } from "react-transition-group";
export default function Products(props) {
  const [visible, setVisible] = useState(3);
  const [loading, setLoading] = useState(false);;
  const [products, setProducts] = useState([]);
  const [filterProduct, setFilterProduct] = useState();
  const [category, setCategory] = useState(false);
  const [viewBy, setViewBy] = useState("All Single Origin");
  const getItem = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const addToCart = (item, quantity) => {
    addToCartNotify();
    const addItem = action.addToCart(item, quantity);
    dispatch(addItem);
  };
  useEffect(() => {
    setProducts(getItem);
  }, [getItem]);

  ///Load more

  window.addEventListener("scroll", () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement
    if (clientHeight + scrollTop >= scrollHeight - 600) {
      setLoading(true);
    }
  });
  useEffect(() => {
    if (visible < products.length - 1) {
      const timeout = setTimeout(() => {
        setVisible(visible + 3);
        setLoading(false);
      }, 3000);
      return () => {
        clearTimeout(timeout);
      };
    }else{
      setLoading(false)
    }
  }, [loading]);
  let [char, setChar] = useState(0);
  function productFadeUp(index) {
    var productItem = document.getElementsByClassName("productItem")[index];
    productItem.classList.add("fade");
  }
  function productFadeOut(index) {
    var productItem = document.getElementsByClassName("productItem")[index];
    productItem.classList.remove("fade");
  }
  const addToCartNotify = () => {
    console.log("added");
    document.querySelector(".addedNotify").classList.add("success");
    const timeout = setTimeout(() => {
      document.querySelector(".addedNotify").classList.remove("success");
    }, 3000);
    return () => {
      clearTimeout(timeout);
    };
  };
  function sortHandle(sortBy) {
    if (filterProduct != null) {
      const sortedArray = [...filterProduct];
      if (sortBy == "hightolow") {
        sortedArray.sort(function (a, b) {
          return b.price - a.price;
        });
      } else {
        sortedArray.sort(function (a, b) {
          return a.price - b.price;
        });
      }
      setFilterProduct(sortedArray);
    } else {
      const sortedArray = [...products];
      if (sortBy == "hightolow") {
        sortedArray.sort(function (a, b) {
          return b.price - a.price;
        });
      } else {
        sortedArray.sort(function (a, b) {
          return a.price - b.price;
        });
      }
      setProducts(sortedArray);
    }
  }

  function handleLoading(event) {
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
      setVisible((prev) => prev + 3);
    }, 3000);
    return () => {
      clearTimeout(timeout);
    };
  }
  function viewHandle(viewBy) {
    let filterArray = products.filter((item) => {
      return item.category.toLowerCase().indexOf(viewBy.toLowerCase()) !== -1;
    });
    setViewBy(viewBy);
    setFilterProduct(filterArray);
  }
  function renderByCate() {
    if (category) {
      return (
        <div className="ourCoffee ">
          <div className="title">
            <h6>Our Coffee Gear</h6>
          </div>
          <div className="description">
            <div className="asideContent">
              <div className="des">
                <span>
                  We have everything you need to make great coffee at home.
                </span>
                <p>COFFEE FOR ONE</p>
              </div>
              <div className="image">
                <img
                  src={require("../../images/100ppi/ceremony-coffee-roasters-gear-promo2.jpg")}
                />
              </div>
            </div>
            <div className="asideContent">
              <div className="image">
                <img
                  src={require("../../images/100ppi/ceremony-coffee-roasters-gear-promo.jpg")}
                />
              </div>
              <div className="des">
                <span>
                  Featuring coffee gear that we love from brands like Aeropress,
                  Chemex, Bonavita, and more.
                </span>
                <p><a href='#productGrid' style={{color:'#222',textDecoration:'none'}}>SHOP BELOW</a></p>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="ourCoffee ">
          <div className="title">
            <h6>Our Coffee Roaster</h6>
          </div>
          <div className="description">
            <div className="asideContent">
              <div className="des">
                <span>
                  We have everything you need to make great coffee at home.
                </span>
                <p>COFFEE FOR ONE</p>
              </div>
              <div className="image">
                <img
                  src={require("../../images/100ppi/92945641_550843799150043_4835329670101039652_n.jpg")}
                />
              </div>
            </div>
            <div className="asideContent">
              <div className="image">
                <img
                  src={require("../../images/100ppi/69578051_2385501495106508_5488017913804568493_n.jpg")}
                />
              </div>
              <div className="des">
                <span>
                  Featuring coffee gear that we love from brands like Aeropress,
                  Chemex, Bonavita, and more.
                </span>
                <p><a href='#productGrid' style={{color:'#222',textDecoration:'none'}}>SHOP BELOW</a></p>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
  const [hover, setHover] = useState("productItem");
  return (
    <div  className="productContainer">
      <Controller>
        <Scene triggerHook=".5" triggerElement=".bg1" classToggle="fade">
          <img
            className="backGroundImg bg1"
            src={require("../../images/100ppi/beans3.png")}
          />
        </Scene>
      </Controller>
      <Controller>
        <Scene triggerHook=".5" triggerElement=".bg2" classToggle="fade">
          <img
            className="backGroundImg bg2"
            src={require("../../images/100ppi/beans5.png")}
          />
        </Scene>
      </Controller>
      {props.type != "topsellers" ? (
        <>
          <Controller>
            <Scene
              triggerElement=".category"
              classToggle="fade"
              triggerHook="1"
            >
              <div className="category">
                <div
                  onClick={() => setCategory(false)}
                  className="content left"
                >
                  <p>View Coffee</p>
                  <img
                    src={require("../../images/100ppi/climateprojecthero-1.png")}
                  />
                </div>
                <div
                  onClick={() => setCategory(true)}
                  className="content right"
                >
                  <p>View Gear</p>
                  <img
                    src={require("../../images/100ppi/Bodum_FrenchPress_480x480.png")}
                  />
                </div>
              </div>
            </Scene>
          </Controller>
          <SwitchTransition>
            <CSSTransition
              key={category}
              addEndListener={(node, done) =>
                node.addEventListener("transitionend", done, false)
              }
              timeout={300}
              classNames="my-node"
            >
              {renderByCate()}
            </CSSTransition>
          </SwitchTransition>
          <div className="titleContainer">
            <div className="title">
              <div className="viewBy">
                <div className="viewByTitle">
                  <p>COFFEE VIEWING</p>
                  <p>{viewBy}</p>
                </div>
                <img src={sortArrow} />
              </div>
              <div className="viewDropDown">
                <div
                  onClick={() => viewHandle("Single Origin")}
                  className="option"
                >
                  <input
                    type="radio"
                    className="radio"
                    id="Single"
                    name="Single"
                  />
                  <label htmlFor="Single">Single Origin</label>
                </div>
                <div onClick={() => viewHandle("Blend")} className="option">
                  <input
                    type="radio"
                    className="radio"
                    id="Blend"
                    name="Blend"
                  />
                  <label htmlFor="Blend">Blend</label>
                </div>
                <div onClick={() => viewHandle("Espresso")} className="option">
                  <input
                    type="radio"
                    className="radio"
                    id="Espresso"
                    name="Espresso"
                  />
                  <label htmlFor="Espresso">Espresso</label>
                </div>
                <div onClick={() => viewHandle("Decaf")} className="option">
                  <input
                    type="radio"
                    className="radio"
                    id="Decaf"
                    name="Decaf"
                  />
                  <label htmlFor="Decaf">Decaf</label>
                </div>
                <div
                  onClick={() => viewHandle("Subscription")}
                  className="option"
                >
                  <input
                    type="radio"
                    className="radio"
                    id="Subscription"
                    name="Subscription"
                  />
                  <label htmlFor="Subscription">Subscription</label>
                </div>
              </div>
            </div>
            <div className="sortBy">
              <div className="sortByColor">
                <p>SORT BY</p>
                <div className="sortContent">
                  <h5>STOCKS</h5>
                  <img className="arrow" src={sortArrow} />
                  <div className="sortDropDown">
                    <div
                      onClick={() => sortHandle("lowtohigh")}
                      className="option"
                    >
                      <input
                        type="radio"
                        className="radio"
                        id="lowtohigh"
                        name="lowtohigh"
                      />
                      <label htmlFor="lowtohigh">Low to high</label>
                    </div>
                    <div
                      onClick={() => sortHandle("hightolow")}
                      className="option"
                    >
                      <input
                        type="radio"
                        className="radio"
                        id="hightolow"
                        name="hightolow"
                      />
                      <label htmlFor="hightolow">High to low</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sortByTaste">
                <p>SORT BY</p>
                <div className="sortContent">
                  <h5>PRICE</h5>
                  <img className="arrow" src={sortArrow} />
                  <div className="sortDropDown">
                    <div
                      onClick={() => sortHandle("lowtohigh")}
                      className="option"
                    >
                      <input
                        type="radio"
                        className="radio"
                        id="lowtohigh"
                        name="lowtohigh"
                      />
                      <label htmlFor="lowtohigh">Low to high</label>
                    </div>
                    <div
                      onClick={() => sortHandle("hightolow")}
                      className="option"
                    >
                      <input
                        type="radio"
                        className="radio"
                        id="hightolow"
                        name="hightolow"
                      />
                      <label htmlFor="hightolow">High to low</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}

      <div id="productGrid" className="productGrid">
        {filterProduct == null
          ? products.slice(0, visible).map((item, index) => {
              return (
                <Controller key={index}>
                  <Scene triggerHook={0.5}>
                    {(progress, event) => {
                      if (event.type == "start") {
                        productFadeUp(index);
                      }
                      if (event.type == "leave") {
                        productFadeOut(index);
                      }
                      return (
                        <div key={index} className={hover}>
                      {item.special !='' ?     <div className='special'><p>{item.special}</p></div> :
                      <></>}
                          
                          <NavLink
                            exact
                            to={{
                              pathname: `/shop/${item.id}`,
                              state: item,
                            }}
                          >
                            <img src={item.img} />
                          </NavLink>

                          <div className="productText">
                            <p>{item.type}</p>
                            <p>{item.name}</p>
                            <p>${item.price}.00</p>
                            {index%2==0 ? <button onClick={() => addToCart(item, 1)}>
                              Add to cart
                            </button>:<button>
                              Sold Out
                            </button>}
                          </div>
                        </div>
                      );
                    }}
                  </Scene>
                </Controller>
              );
            })
          : filterProduct.map((item, index) => {
              return (
                <NavLink
                  to={{
                    pathname: `/shop/${item.id}`,
                    state: item,
                  }}
                  exact
                  key={index}
                  className={hover}
                >
                  <img src={item.img} />
                  <div className="productText">
                    <p>{item.type}</p>
                    <p>{item.name}</p>
                    <p>${item.price}.00</p>
                    <button onClick={() => addToCart(item, 1)}>
                      Add to cart
                    </button>
                  </div>
                </NavLink>
              );
            })}
      </div>


        <div className={loading ? "loading" : "loading hidden"}>
          <div className="ball"></div>
          <div className="ball"></div>
          <div className="ball"></div>
        </div>
 
    </div>
  );
}
{
  /* <div className='newArrival'>
              <div className='arrivalTitle'> 
                  <h6>New Arrivals</h6>
              </div>
              <div className='list'>
                 {
                   products.map((item, index) => {
                    return (
                      <div key={index} className='arrivalItem'>
                          <NavLink
                            exact
                            to={{
                              pathname: `/shop/${item.id}`,
                              state: item,
                            }}
                          >
                            <img src={item.img} />
                          </NavLink>

                          <div className="productText">
                            <p>{item.type}</p>
                            <p>{item.name}</p>
                            <p>${item.price}.00</p>
                            <button onClick={() => addToCart(item, 1)}>
                              Add to cart
                            </button>
                          </div>
                        </div>
                    );
                  })
                 }
              </div>
          </div> */
}
