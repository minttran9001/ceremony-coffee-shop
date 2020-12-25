import React, { useEffect, useRef, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { gsap, TweenLite } from "gsap";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ContactUs from "./components/ContactUs/ContactUs";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import SignIn from "./pages/SignIn";
import ProductDetails from "./pages/ProductDetails";
import Subscription from "./pages/Subscription";
import WholeSale from "./pages/WholeSale";
import ColdBrew from "./pages/ColdBrew";
import Register from './pages/Register'
import Location from "./pages/Location";
import Cart from './pages/Cart'
import EditSubscription from './pages/EditSubscription'
import LocationDetails from "./pages/LocationDetails";
import { useSelector, useDispatch } from "react-redux";
import Account from "./pages/Account";
import Fade from "./transition/transition";
import Highway from "@dogstudio/highway";
import PopUpRegister from "./components/PopUpRegister/PopUpRegister";
import Checkout from "./components/Checkout/Checkout";
import EditProfile from './pages/EditProfile'
const routes = [
  { path: "/ceremony-coffee-shop", name: "Home", Component: Home },
  { path: "/shop", name: "Shop", Component: Shop },
  {
    path: "/shop/:productId",
    name: "ProductDetails",
    Component: ProductDetails,
  },
  { path: "/subscription", name: "Subscription", Component: Subscription },
  { path: "/wholesale", name: "WholeSale", Component: WholeSale },
  { path: "/signin", name: "SignIn", Component: SignIn },
  { path: "/coldbrew", name: "Cold Brew", Component: ColdBrew },
  { path: "/location", name: "Location", Component: Location },
  {
    path: "/location/:locationId",
    name: "Location Detail",
    Component: LocationDetails,
  },
  { path: "/account", name: "Account", Component: Account },
  { path: "/profile", name: "EditProfile", Component: EditProfile },
  { path: "/subedit", name: "EditSubscription", Component: EditSubscription },
  { path: "/register", name: "Register", Component: Register },
  { path: "/cart", name: "Cart", Component: Cart },
  { path: "/checkout", name: "Cart", Component: Checkout },
];
function App() {
  let dom = useRef(null);
  let layer1 = useRef(null);
  let layer2 = useRef(null);
  let layer3 = useRef(null);
  let overlay = useRef(null);
  let layerp1 = useRef(null);
  let layerp2 = useRef(null);
  let layerp3 = useRef(null);
  let bgLayer1 = useRef(null);
  let bgLayer2 = useRef(null);
  let bgLayer3 = useRef(null);
  let shawdow1 = useRef(null);
  let shawdow2 = useRef(null);
  let shawdow3 = useRef(null);
  const [sidebar, setSideBar] = useState();
  const sideBar = useSelector((state) => state.sideBar);
  const [loading, setLoading] = useState(true);

  // useEffect(()=>{
  //   window.addEventListener('mousemove',cursor)
  //   window.addEventListener('click', cursorClick)
  // },[])
  // function cursor(e)
  //     {
  //       const mouseCursor = document.querySelector('.cursor');
  //       mouseCursor.style.top= (e.pageY - 15) + 'px';
  //       mouseCursor.style.left=(e.pageX - 15)+ 'px';
  //     }
  //   function cursorClick()
  //   {
  //     const mouseCursor = document.querySelector('.cursor');
  //     console.log(mouseCursor);
  //    mouseCursor.classList.add('cursorClick')
  //    setTimeout(()=>
  //    {
  //      mouseCursor.classList.remove('cursorClick')
  //    }
  //    ,500)
  //   }
  useEffect(() => {
    if (sideBar == "sideBar active") {
      document.getElementById("page").style.transform = "translateX(-400px)";
    } else {
      document.getElementById("page").style.transform = "translateX(0)";
    }
  }, [sideBar]);
  const onEnter = (node) => {
    gsap.from(node.children[0], 0.6, {
      y: 40,
      delay: 0.6,
      ease: "power3.InOut",
      opacity: 0,
      stagger: {
        amount: 0.6,
      },
    });
  };
  const onExit = (node) => {
    gsap.to(node.children[0], 0.6, {
      y: 40,
      delay: 0.6,
      ease: "power3.InOut",
      opacity: 0,
      stagger: {
        amount: 0.6,
      },
    });
  };
  useEffect(() => {
    TweenLite.from(layerp1, 1, { autoAlpha: 0, y: 100, delay: 0.5 });
    TweenLite.from(layerp2, 1, { autoAlpha: 0, y: 100, delay: 0.7 });
    TweenLite.from(layerp3, 1, { autoAlpha: 0, y: 100, delay: 0.9 });
    gsap.to(layer1, {
      y: "-100vh",
      delay: 2.5,
    });
    gsap.to(layer2, {
      y: "-100vh",
      delay: 2.7,
    });
    gsap.to(layer3, {
      y: "-100vh",
      delay: 2.9,
    });
    gsap.to(shawdow1, {
      y: "-100vh",
      delay: 2.5,
    });
    gsap.to(shawdow2, {
      y: "-100vh",
      delay: 2.7,
    });
    gsap.to(shawdow3, {
      y: "-100vh",
      delay: 2.9,
    });
    gsap.to(bgLayer1, {
      y: "-100vh",
      delay: 2.5,
    });
    gsap.to(bgLayer2, {
      y: "-100vh",
      delay: 2.7,
    });
    gsap.to(bgLayer3, {
      y: "-100vh",
      delay: 2.9,
    });
   
    gsap
      .to(overlay, {
        y: "-100vh",
        delay: 3,
      })
      .then(() => {
        document.body.style.overflowY = "scroll";
      });

    //  new Highway.Core({
    //     transitions:{
    //       default : Fade
    //     }
    //   })
  }, []);
  return (
    <>
      <div ref={(el) => (dom = el)} className="App">
        <ScrollToTop>
          <Header id="page" />
          <Route
            render={({ location }) => (
              <TransitionGroup>
                <Switch location={location}>
                  {routes.map(({ path, Component, name }) => {
                    return (
                      <Route key={path} path={path} exact>
                        {(e) => {
                          return (
                            <CSSTransition
                              in={e.match != null}
                              timeout={600}
                              classNames="page"
                              addEndListener={(node, done) =>
                                node.addEventListener(
                                  "transitionend",
                                  done,
                                  false
                                )
                              }
                              unmountOnExit
                            >
                              <article
                                id="page"
                                data-router-wrapper
                                className="page"
                              >
                                <Component
                                  data-router-view={name.toLowerCase()}
                                  className={name.toLowerCase()}
                                />
                              </article>
                            </CSSTransition>
                          );
                        }}
                      </Route>
                    );
                  })}
                </Switch>
              </TransitionGroup>
            )}
          />

          <div ref={(el) => (overlay = el)} className="overlay">
            <div ref={(el) => (layer1 = el)} className="layer layer-1">
              <div ref={(el) => (shawdow1 = el)}  ></div>
              <div className="bgLayer">
                <div
                  ref={(el) => (bgLayer1 = el)}
                  style={{color:'#fff'}}
                />
              </div>
              <p ref={(el) => (layerp1 = el)}>Coffee</p>
            </div>
            <div ref={(el) => (layer2 = el)} className="layer layer-2">
              <div ref={(el) => (shawdow2 = el)}  ></div>
              <div className="bgLayer">
              <div
                  ref={(el) => (bgLayer2 = el)}
                  style={{color:'#fff'}}
                />
              </div>
              <p ref={(el) => (layerp2 = el)}>Makes</p>
            </div>
            <div ref={(el) => (layer3 = el)} className="layer layer-3">
              <div ref={(el) => (shawdow3 = el)}  ></div>
              <div className="bgLayer">
              <div
                  ref={(el) => (bgLayer3 = el)}
                  style={{color:'#fff'}}
                />
              </div>
              <p ref={(el) => (layerp3 = el)}>Life Better</p>
            </div>
          </div>
          <ContactUs />
          <Footer />
        </ScrollToTop>
        {/* <div className='cursor'></div> */}
      </div>
      <PopUpRegister />
    </>
  );
}

export default App;
