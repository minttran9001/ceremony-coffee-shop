import React, { useEffect, useRef, useState } from "react";
import "./Header.scss";
import logo from "../../images/ce467266-2063-42cc-9042-7666e41ac6ef_200x200.png";
import {
  AiOutlineUser,
  AiOutlineBars,
  AiOutlineClose,
  AiOutlinePlus,
  AiOutlineMinus,
  AiOutlineShoppingCart,
  AiOutlineSearch,
  AiOutlineLoading3Quarters,
  AiFillAlipaySquare,
  AiOutlineMail,
  AiOutlineEnvironment,
  AiOutlineProfile,
  AiOutlinePhone,
} from "react-icons/ai";
import { FiCamera } from "react-icons/fi";
import { MdInsertEmoticon } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { BsChatDots } from "react-icons/bs";
import fb from "../../images/facebook.svg";
import ig from "../../images/instagram.svg";
import tw from "../../images/twitter.svg";
import it from "../../images/itunes.svg";
import { AiOutlineShopping } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as action from "../../actions/sideBar/index";

import * as action2 from "../../actions/cart/index";
import exit from "../../images/close.svg";
import anime from "animejs";
import SubscriptionDetail from "../SubscriptionDetail/SubscriptionDetail";
import OrderDetail from "../OrderDetail/OrderDetail";
import { REMOVE_ITEM } from "../../constants";
export default function Header() {
  //Declare Hooks
  const dispatch = useDispatch();
  const [open, setOpen] = useState("");
  const [activeClass, setActiveClass] = useState("header");
  const [megaMenu, setMegaMenu] = useState("navItem shop dropdown");
  const [delayHandler, setDelayHandler] = useState(null);
  const [navBar, setNavBar] = useState("navList");
  const [sideBarType, setSideBarType] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loginDenied, setLoginDenied] = useState("");
  const [navItem, setNavItem] = useState(0);
  const [query, setQuery] = useState("");
  const [productSearch, setProductSearch] = useState([]);
  let menuList = useRef();
  const [cartItem, setCartItem] = useState([]);
  const [inputArr, setInputArr] = useState([
    {
      name: "Username",
      content: "inputGroup",
      condition: "username",
    },
    {
      name: "Password",
      content: "inputGroup",
      condition: "password",
    },
  ]);

  const cart = useSelector((state) => state.cart);
  const sideBar = useSelector((state) => state.sideBar);
  const productToSearch = useSelector((state) => state.product);
  const total = cartItem.reduce((a, b) => {
    return (a += b.item.price);
  }, 0);

  useEffect(() => {
    setOpen(sideBar);
  }, [sideBar]);
  useEffect(() => {
    setCartItem(cart);
  }, [cart]);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, true);
  }, []);
  function handleScroll() {
    if (window.scrollY >= 50) {
      setActiveClass("header scrollHeader");
    } else {
      setActiveClass("header");
    }
  }
  function removeItem(id) {
    const remove = action2.removeItem(id);
    dispatch(remove);
  }
  function changeQuantity(id, type) {
    const change = action2.changeQuantity(id, type);
    dispatch(change);
  }
  function handleSearch(e) {
    if (e.target.value != "") {
      const filterd = productToSearch.filter((item) => {
        return (
          item.name.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1
        );
      });
      setProductSearch(filterd);
      setQuery(e.target.value);
    } else {
      setProductSearch([]);
      setQuery(e.target.value);
    }
  }
  console.log(productSearch);
  function openMegaMenu() {
    setDelayHandler(
      setTimeout(() => {
        setMegaMenu("navItem shop dropdown active");
      }, 1000)
    );
  }
  function handleMouseLeave() {
    clearTimeout(delayHandler);
  }
  function closeMegaMenu() {
    setMegaMenu("navItem shop dropdown");
    clearTimeout(delayHandler);
    // setNavBar("navList")
  }
  function openNavBar(classToggle) {
    setNavBar("navList active");
  }
  function closeNavBar() {
    setNavBar("navList");
  }
  function openSideBar(toggle, type) {
    const toggleSideBar = action.toggleSideBar(toggle);
    dispatch(toggleSideBar);
    setSideBarType(type);
  }
  function renderSideBar() {
    if (sideBarType == "cart") {
      return renderCart();
    } else if (sideBarType == "user") {
      return renderAccount();
    } else {
      return renderSearchBox();
    }
  }
  function renderSearchBox() {
    return (
      <>
        <div className="sideBarTitle">
          <p>Search</p>
          <AiOutlineClose
            className="icon"
            onClick={() => openSideBar("close")}
          />
        </div>
        <div className="cart">
          <div className="searchInput">
            <input
              type="text"
              value={query}
              onChange={(e) => handleSearch(e)}
              placeholder="Search..."
            />
          </div>
          <div className="searchItem">
            {productSearch.length > 0 ? (
               productSearch.map((item, index) => (
                <NavLink
                  to={`/shop/${item.id}`}
                  onClick={() => {
                    openSideBar("close");
                  }}
                  className="item"
                >
                  <div className="details">
                    <h6>{item.name}</h6>
                    <p>{item.type}</p>
                    <p>${item.price}.00</p>
                    {/* <NavLink>DETAIL</NavLink> */}
                  </div>
                  <img src={item.img} />
                </NavLink>
              ))
             
            ) : (
              <div className='searchEmpty'> 
                  <p>Search something ...</p>
              </div>
            )}
          </div>
        </div>
      </>
    );
  }
  function renderCart() {
    if (cartItem != "") {
      return (
        <>
          <div className="sideBarTitle">
            <p>Your Cart</p>
            <AiOutlineClose
              className="icon"
              onClick={() => openSideBar("close")}
            />
          </div>
          <div className="cart">
            {cartItem.map((item, index) => {
              return (
                <div key={index} className="cartItem">
                  <img src={item.item.img} />
                  <div className="itemDetail">
                    <p>
                      {item.item.name}({item.quantity})
                    </p>
                    <p>${item.item.price}.00</p>
                    <div className="updateCart">
                      <AiOutlinePlus
                        onClick={() => changeQuantity(item.item.id, "increase")}
                        className="icon"
                      />
                      <AiOutlineMinus
                        onClick={() => changeQuantity(item.item.id, "decrease")}
                        className="icon"
                      />
                    </div>
                    <button
                      onClick={() => {
                        removeItem(item.item.id);
                      }}
                      className="removeItem"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="totalPrice">
            <p>Sub Total : ${total}.00</p>
            <p>VAT : 10%</p>
            <p>Total : ${total - (total * 10) / 100}</p>
          </div>
          <div className="checkOutContainer">
            <button>
              <NavLink
                onClick={() => {
                  openSideBar("close");
                }}
                to="/cart"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                See your Cart
              </NavLink>
            </button>
            <button>
              <NavLink
                onClick={() => {
                  openSideBar("close");
                }}
                to="/checkout"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                Check out
              </NavLink>
            </button>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="sideBarTitle">
            <p>Your Cart</p>
            <AiOutlineClose
              className="icon"
              onClick={() => openSideBar("close")}
            />
          </div>
          <div className="cart">
            <div className="cartEmpty">
              <AiOutlineShopping className="cartIcon" />
              <p>Your cart is empty</p>
            </div>
          </div>
        </>
      );
    }
  }
  function inputFocus(index, isFocused) {
    if (isFocused) {
      let newArr = [...inputArr];
      newArr[index].content = "inputGroup focus";
      setInputArr(newArr);
    } else {
      let newArr = [...inputArr];
      newArr[index].content = "inputGroup";
      setInputArr(newArr);
    }
  }
  function signInHandle(e) {
    e.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username != "client") {
      setLoginDenied("Username doesn't exist");
      setTimeout(() => {
        setLoginDenied("");
      }, 3000);
    } else if (password != "123456") {
      setLoginDenied("Invalid password");
      setTimeout(() => {
        setLoginDenied("");
      }, 3000);
    } else {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setIsLogin(true);
      }, 2000);
    }
  }
  function signOutHandle(e) {
    e.preventDefault();

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsLogin(false);
    }, 2000);
  }
  function renderAccount() {
    if (isLogin) {
      return (
        <>
          <div className="sideBarTitle">
            <p>Your Account</p>
            <AiOutlineClose
              onClick={() => openSideBar("close")}
              className="icon"
            />
          </div>
          {isLoading ? (
            <div className="isLoading">
              <AiOutlineLoading3Quarters className="loadingIcon" />
            </div>
          ) : (
            <></>
          )}
          <div className="cart">
            <div className="account">
              <h5 className="accountTitle">Profile</h5>

              <div className="userDetails">
                <p>
                  {" "}
                  <AiOutlineProfile /> Mint Tran
                </p>
                <p>
                  <AiOutlineMail /> minttran.9002@gmail.com
                </p>
                <p>
                  <AiOutlinePhone /> 0962448869
                </p>
                <p>
                  {" "}
                  <AiOutlineEnvironment /> 81st Wall Street,New York ,US
                </p>
                <NavLink
                  to="/account"
                  onClick={() => {
                    openSideBar("close");
                  }}
                  className="editProfile"
                >
                  View Profile
                </NavLink>
                <div className="orderHistory">
                  <h6>Order History (4)</h6>
                  <div className="yourOrder">
                    <table className="orderTable">
                      <tr>
                        <th>Order no.</th>
                        <th>Order date</th>
                        <th>Bill-to name</th>
                        <th>Total</th>
                      </tr>
                      <tr>
                        <td>SO-1423</td>
                        <td>17th May, 2020</td>
                        <td>Mint Tran</td>
                        <td>$123.00</td>
                      </tr>
                      <tr>
                        <td>SO-1424</td>
                        <td>20th May, 2020</td>
                        <td>Mint Tran</td>
                        <td>$123.00</td>
                      </tr>
                      <tr>
                        <td>SO-1234</td>
                        <td>1st June, 2020</td>
                        <td>Mint Tran</td>
                        <td>$123.00</td>
                      </tr>
                      <tr>
                        <td>SO-1321</td>
                        <td>19th June, 2020</td>
                        <td>Mint Tran</td>
                        <td>$123.00</td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
              <button type="submit" onClick={(e) => signOutHandle(e)}>
                Sign Out
              </button>
            </div>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="sideBarTitle">
            <p>Your Account</p>
            <AiOutlineClose
              onClick={() => openSideBar("close")}
              className="icon"
            />
          </div>
          {isLoading ? (
            <div className="isLoading">
              <AiOutlineLoading3Quarters className="loadingIcon" />
            </div>
          ) : (
            <></>
          )}
          <div className="cart">
            <form onSubmit={(e) => signInHandle(e)} className="signInForm">
              <span className="signInNotification">{loginDenied}</span>
              {inputArr.map((item, index) => (
                <div key={index} className={item.content}>
                  <label
                    onClick={() => inputFocus(index, true)}
                    htmlFor={item.condition}
                  >
                    {item.name}*
                  </label>
                  <input
                    onChange={(e) =>
                      e.target.value == ""
                        ? inputFocus(index, false)
                        : inputFocus(index, true)
                    }
                    onMouseLeave={(e) =>
                      e.target.value == ""
                        ? inputFocus(index, false)
                        : inputFocus(index, true)
                    }
                    onFocus={() => inputFocus(index, true)}
                    autoComplete="off"
                    id={item.condition}
                    type={item.condition == "username" ? "text" : "password"}
                    name={item.condition}
                    className="input"
                  />
                </div>
              ))}
              <a href="#">Forgot your password ? </a>
              <button type="submit">Sign In</button>
              <span className="doYou">
                Do you have an account ?{" "}
                <NavLink
                  className="signUpHere"
                  onClick={() => {
                    openSideBar("close");
                  }}
                  to="/register"
                >
                  Sign up here
                </NavLink>
              </span>
            </form>
          </div>
        </>
      );
    }
  }
  const closeHow = () => {
    document.querySelector(".howWrapper").classList.remove("open");
    document.body.style.overflowY = "scroll";
  };
  const howItWork = () => {
    return (
      <div className="howWrapper">
        <div className="howItWorks">
          <div className="title">
            <h5>How it works</h5>
            <span
              onClick={() => {
                closeHow();
              }}
            >
              X
            </span>
          </div>
          <div className="description">
            <p>
              Our coffee subscription service makes it easy for you to drink
              Supreme. Get your favourite coffee, however you like it, delivered
              right to your door.
            </p>
            <p>
              When first setting up your subscription, an order will be
              generated and sent to you straight away to get you going. Then
              your subscription will move to your chosen shipping day.
            </p>
            <p>
              Your account will only be charged for orders before they ship.
              Orders will be generated and charged the evening before the day
              they ship i.e orders shipped on a Monday will be generated/charged
              on Sunday evening.
            </p>
            <p>
              Gift subscriptions are charged upfront for the duration of the
              gifting period.
            </p>
            <p>
              Once your coffee subscription is set up, you are able to edit your
              subscription. You can increase the amount, skip orders, change
              address etc.
            </p>
            <p>
              If any further help is required, our customer care team are always
              available to lend a hand too.
            </p>
          </div>
        </div>
      </div>
    );
  };
  return (
    <header className={activeClass}>
      <div className="headerBack"></div>
      <div className="container">
        <nav className="nav">
          <ul className="logoArea">
            <li>
              <NavLink
                onClick={() => closeMegaMenu()}
                to="/"
                className="navLink "
                className="logoLink"
              >
                <img src={require("../../images/100ppi/logo-black.svg")} />
                <span>COFFEE ROASTER</span>
              </NavLink>
            </li>
          </ul>
          <ul className={navBar}>
            <ul className="icon">
              <AiOutlineClose onClick={() => closeNavBar()} className="exit" />
            </ul>
            <li className="navItem home">
              <NavLink
                activeClassName="activedLink"
                onClick={() => {
                  closeNavBar();
                  closeMegaMenu();
                }}
                to="/"
                exact
                className="navLink"
              >
                Home
              </NavLink>
            </li>
            <li className="navItem subscription">
              <NavLink
                activeClassName="activedLink"
                onClick={() => {
                  closeNavBar();
                  closeMegaMenu();
                }}
                to="/subscription"
                className="navLink"
              >
                Subscription
              </NavLink>
            </li>
            <li className="navItem wholesale">
              <NavLink
                activeClassName="activedLink"
                onClick={() => {
                  closeNavBar();
                  closeMegaMenu();
                }}
                to="/wholesale"
                className="navLink"
              >
                Wholesale
              </NavLink>
            </li>

            <li className="navItem location">
              <NavLink
                activeClassName="activedLink"
                onClick={() => {
                  closeNavBar();
                  closeMegaMenu();
                }}
                to="/location"
                className="navLink"
              >
                Location
              </NavLink>
            </li>
            <li className="navItem coldbrew">
              <NavLink
                activeClassName="activedLink"
                onClick={() => {
                  closeNavBar();
                  closeMegaMenu();
                }}
                to="/coldbrew"
                className="navLink"
              >
                Cold Brews
              </NavLink>
            </li>
            <li
              onMouseEnter={() => {
                openMegaMenu();
              }}
              onMouseLeave={() => {
                handleMouseLeave();
              }}
              className={megaMenu}
            >
              <NavLink
              activeClassName="activedLink"
                onClick={() => {
                  closeNavBar();
                  closeMegaMenu();
                }}
                to="/shop"
                className="navLink "
              >
                Shop
              </NavLink>
              <ul className="menuArea">
                <div ref={(el) => (menuList = el)} className="menuContainer">
                  <ul className="menuList">
                    <h4>COFFEE</h4>
                    <li className="menuItem">
                      <NavLink to="/" className="menuLink">
                        Single Origin
                      </NavLink>
                    </li>
                    <li className="menuItem">
                      <NavLink to="/" className="menuLink">
                        Blend
                      </NavLink>
                    </li>
                    <li className="menuItem">
                      <NavLink to="/" className="menuLink">
                        Espresso
                      </NavLink>
                    </li>
                    <li className="menuItem">
                      <NavLink to="/" className="menuLink">
                        Decaf
                      </NavLink>
                    </li>
                    <li className="menuItem">
                      <NavLink to="/" className="menuLink">
                        Subscription
                      </NavLink>
                    </li>
                  </ul>
                  <ul className="menuList">
                    <h4>GEAR</h4>
                    <li className="menuItem">
                      <NavLink to="/" className="menuLink">
                        Merch
                      </NavLink>
                    </li>
                    <li className="menuItem">
                      <NavLink to="/" className="menuLink">
                        Brewers
                      </NavLink>
                    </li>
                    <li className="menuItem">
                      <NavLink to="/" className="menuLink">
                        Grinders
                      </NavLink>
                    </li>
                    <li className="menuItem">
                      <NavLink to="/" className="menuLink">
                        Gif Cards
                      </NavLink>
                    </li>
                  </ul>
                </div>
                <div className="rightMenuArea">
                  <div className="menuContent">
                    <video
                      src="https://ceremonycoffee.com/wp-content/uploads/ceremony-coffee-subscriptions-card_1.mp4"
                      autoPlay
                      loop
                      controls
                    />
                    <div className="contentTitle">
                      <p>BUILD YOUR SUBSCRIPTION</p>
                    </div>
                  </div>
                  <div className="menuContent">
                    <img src="https://ceremonycoffee.com/wp-content/uploads/ceremony-coffee-taste-by-color-card.png" />
                    <div className="contentTitle">
                      <p>FEATURED</p>
                      <p>NEW ARRIVAL</p>
                      <p>Mexico Siltecpec</p>
                    </div>
                  </div>
                  <div className="menuContent">
                    <img src="//cdn.shopify.com/s/files/1/2220/0129/products/CRNacientesHoney.jpg?v=1599848329" />
                    <div className="contentTitle">
                      <p>Our </p>
                      <p>Gear</p>
                      <p>We express tastes through specific colors</p>
                    </div>
                  </div>
                </div>
                <img
                  onClick={closeMegaMenu}
                  className="closeMegaMenu"
                  src={exit}
                />
              </ul>
            </li>
            <li className="navItem tools">
              <a
                onClick={() => closeMegaMenu()}
                to="/wholesale"
                className="navLink"
              >
                <div className="shoppingBag">
                  <AiOutlineBars
                    onClick={() => openNavBar("navList active")}
                    className="icon bar"
                  />
                  <AiOutlineUser
                    onClick={() => openSideBar("open", "user")}
                    className="icon"
                  />
                  <AiOutlineSearch
                    onClick={() => openSideBar("open", "search")}
                    className="icon "
                  />
                  <AiOutlineShoppingCart
                    onClick={() => openSideBar("open", "cart")}
                    className="icon"
                  />
                  <span className="bagItemCount">{cartItem.length}</span>
                </div>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      {/* <div className="stickyIcon">
        <img src={fb} />
        <img src={ig} />
        <img src={tw} />
        <img src={it} />
      </div> */}
      {howItWork()}
      <div className="successNotify wholesaleNotify">
        <span>Your infomation is sent !</span>
      </div>
      <div className="successNotify deleteNotify">
        <span>Deleted !</span>
      </div>
      <div className="successNotify addedNotify">
        <span>Added to Cart !</span>
      </div>
      <div className="successNotify checkOutNotify">
        <span>Order successfully !</span>
      </div>
      <div className="successNotify saveNotify">
        <span>Saved !</span>
      </div>
      <div className="successNotify updateNotify">
        <span>Updated !</span>
      </div>
      <div className="successNotify submitNotify">
        <span>Submitted !</span>
      </div>
      <div className="successNotify loggedNotify">
        <span>Hello Mint !</span>
      </div>
      <div className={open}>{renderSideBar()}</div>
      <SubscriptionDetail />
      <OrderDetail view="subDetail" />
      <OrderDetail view="orderDetail" />
    </header>
  );
}
