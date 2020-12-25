import React from "react";
import "./SubscriptionBuild.scss";
import { BsArrowRight } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { Controller, Scene } from "react-scrollmagic";
export default function SubscriptionBuild() {
  const [state, setState] = React.useState({
    isActive: 0,
  });
  const [isSelected, setSelected] = React.useState([
   
  ]);
  
  const [selectionArr, setSelectionArr] = React.useState([
    {
      title: "What coffee would you like?",
      description: " What coffee would you like?",
      type: "product",
      selection: [
        {
          isSelected: false,
          id: 1,
          category: "Espresso",
          type: "Tarrazú",
          name: "Costa Rica Nacientes Honey",
          price: 19,
          color: "#FCD8B8",
          img:
            "//cdn.shopify.com/s/files/1/2220/0129/products/CRNacientesHoney.jpg?v=1599848329",
        },
        {
          isSelected: false,
          id: 7,
          category: "Espresso",
          type: "Chiapas",
          name: "Mexico Siltepec",
          price: 15,
          color: "#E7DAD3",
          img:
            "//cdn.shopify.com/s/files/1/2220/0129/products/MexicoSiltepec-2.jpg?v=1598639934",
        },
        {
          isSelected: false,
          id: 2,
          category: "Subscription",
          type: "Huila",
          name: "Colombia El Roble",
          price: 19,
          color: "#DDCDE9",
          img:
            "//cdn.shopify.com/s/files/1/2220/0129/products/ColoElRoblehero.jpg?v=1599157793",
        },
        {
          isSelected: false,
          id: 3,
          category: "Subscription",
          type: "Gedeo",
          name: "Ethiopia Halo Hartume",
          price: 19,
          color: "#FBC2C1",
          img:
            "//cdn.shopify.com/s/files/1/2220/0129/products/EthiopiaHaloHartume.jpg?v=1599157940",
        },
        {
          isSelected: false,
          id: 4,
          category: "Single Origin",
          type: "Copan, Honduras",
          name: "Honduras Perdomo Honey",
          price: 18,
          color: "#DDCDE9",
          img:
            "//cdn.shopify.com/s/files/1/2220/0129/products/hondurasperdomo-hero.jpg?v=1599157862",
        },
        {
          isSelected: false,
          id: 5,
          category: "Decaf",
          type: "Uraga, Guji",
          name: "Enthiopia Laayoo Natural",
          price: 19,
          color: "#FACDE5",
          img:
            "//cdn.shopify.com/s/files/1/2220/0129/products/Eth-Laayyoo-Hero.jpg?v=1599157970",
        },
        {
          isSelected: false,
          id: 6,
          category: "Blend",
          type: "Uraga, Guji",
          name: "Ethiopia Raro ",
          price: 19,
          color: "#CEE3F1",
          img:
            "//cdn.shopify.com/s/files/1/2220/0129/products/rwandahumure1_f75d50bf-8bfc-4ae3-b392-c2129bf77f8a.jpg?v=1598032864",
        },
        {
          isSelected: false,
          id: 8,
          category: "Filter",
          type: "Chemex",
          name: "Chemex Unfolded Half Moon Filters ",
          price: 19,
          color: "#EEEEEE",
          img:
            "//cdn.shopify.com/s/files/1/2220/0129/products/Chemex_Filters_cc4da06a-d0a3-480e-9e0a-4d9f921a4406.jpg?v=1511972047",
        },
        {
          isSelected: false,
          id: 9,
          category: "Filter",
          type: "Uraga, Guji",
          name: "Aeropress Filters ",
          price: 4,
          color: "#EEEEEE",
          img:
            "//cdn.shopify.com/s/files/1/2220/0129/products/Aaeropress_Filters.jpg?v=1511972913",
        },
      ],
    },
    {
      title: "When should we send it?",
      description:
        " Let us know what day to roast your coffee and send it from the roastery.",
      type: "selection",
      selection: [
        {
          isSelected: false,
          name: "Wednesday",
          description: "",
        },
        {
          isSelected: false,
          name: "Thursday",
          description: "",
        },
      ],
    },
    {
      title: "How often do you want to receive it?",
      description:
        " Let us know what day to roast your coffee and send it from the roastery.",
      type: "selection",
      selection: [
        {
          isSelected: false,
          name: "Weekly",
          description: "",
        },
        {
          isSelected: false,
          name: "Every 2 weeks",
          description: "",
        },
        {
          isSelected: false,
          name: "Every 3 weeks",
          description: "",
        },
      ],
    },
    {
      title: "Summary",
      description:
        " Let us know what day to roast your coffee and send it from the roastery.",
      type: "summary",
      selection: [
        {
          isSelected: false,
          id: 6,
          category: "Blend",
          type: "Uraga, Guji",
          name: "Ethiopia Raro ",
          price: 19,
          color: "#CEE3F1",
          img:
            "//cdn.shopify.com/s/files/1/2220/0129/products/rwandahumure1_f75d50bf-8bfc-4ae3-b392-c2129bf77f8a.jpg?v=1598032864",
        },
        {
          isSelected: false,
          id: 8,
          category: "Filter",
          type: "Chemex",
          name: "Chemex Unfolded Half Moon Filters ",
          price: 19,
          color: "#EEEEEE",
          img:
            "//cdn.shopify.com/s/files/1/2220/0129/products/Chemex_Filters_cc4da06a-d0a3-480e-9e0a-4d9f921a4406.jpg?v=1511972047",
        },
        {
          isSelected: false,
          id: 9,
          category: "Filter",
          type: "Uraga, Guji",
          name: "Aeropress Filters ",
          price: 4,
          color: "#EEEEEE",
          img:
            "//cdn.shopify.com/s/files/1/2220/0129/products/Aaeropress_Filters.jpg?v=1511972913",
        },
      ],
    },
  ]);
  React.useEffect(() => {
    const newArr = []

    selectionArr.map((item,index)=>{
      newArr.push({active:-1})
      
    })
setSelected(newArr)
  }, [])
  console.log(isSelected)
  const buildSub = (index) => {
    document
      .getElementsByClassName("selectWrapper")
      .item(state.isActive)
      .classList.remove("isActive");
    document
      .getElementsByClassName("selectWrapper")
      .item(index)
      .classList.add("isActive");
    setState({ isActive: index });
  };

  const openHow = () => {
    document.querySelector(".howWrapper").classList.add("open");
    document.body.style.overflow = "hidden";
  };
  const addToCart = () => {
    document.querySelector(".addedNotify").classList.add("success");
    const timeout = setTimeout(() => {
      document.querySelector(".addedNotify").classList.remove("success");
    }, 3000);
    return () => {
      clearTimeout(timeout);
    };
  };
  const handleSelect = (type, selection, index1, index2, className) => {
    debugger;
    if (selection != "selection") {
      var buildSelect = document.querySelectorAll(className)[index2];
      if (type == "abort") {
        buildSelect.classList.remove("isSelected");
      } else {
        buildSelect.classList.add("isSelected");
      }
    } else {
      var count = 0;
      var checkBefore = 0;
      var buildSelect;
      for (var i = 0; i <= index1 - 1; i++) {
        if (selectionArr[i].type == "selection") {
          checkBefore = checkBefore + 1;
          count = count + selectionArr[i].selection.length - 1;
        }
      }
      if (checkBefore == 0) {
        buildSelect = document.querySelectorAll(className)[index2];
        if (type == "abort") {
          buildSelect.classList.remove("isSelected");
          const newArr = [...isSelected];
          newArr[index1].active = -1;
          setSelected(newArr);
        } else {
          if (isSelected[index1].active  == index2) {
            buildSelect.classList.add("isSelected");
            const newArr = [...isSelected];
            newArr[index1].active = index2;
            setSelected(newArr);
          } else {
            if (isSelected[index1].active != -1) {
              var buildSelectClone = document.querySelectorAll(className)[
                isSelected[index1].active
              ];
              buildSelectClone.classList.remove("isSelected");
              buildSelect.classList.add("isSelected");
              const newArr = [...isSelected];
              newArr[index1].active = index2;
              setSelected(newArr);
            } else {
              buildSelect.classList.add("isSelected");
              const newArr = [...isSelected];
              newArr[index1].active = index2;
              setSelected(newArr);
            }
          }
        }
      } else {
        const newIndex = count + index2 + 1;
        buildSelect = document.querySelectorAll(className)[newIndex];
        if (type == "abort") {
          buildSelect.classList.remove("isSelected");
          const newArr = [...isSelected];
          newArr[index1].active = -1;
          setSelected(newArr);
        } else {
          if (isSelected[index1].active  == newIndex) {
            buildSelect.classList.add("isSelected");
            const newArr = [...isSelected];
            newArr[index1].active = newIndex;
            setSelected(newArr);
          } else {
            if (isSelected[index1].active  != -1) {
              var buildSelectClone = document.querySelectorAll(className)[
                isSelected[index1].active
              ];
              buildSelectClone.classList.remove("isSelected");
              buildSelect.classList.add("isSelected");
              const newArr = [...isSelected];
              newArr[index1].active = newIndex;
              setSelected(newArr);
            } else {
              buildSelect.classList.add("isSelected");
              const newArr = [...isSelected];
              newArr[index1].active = newIndex;
              setSelected(newArr);
            }
          }
        }
      }
    }
  };
  const renderSelect = (item, index1) => {
    if (item.type == "selection") {
      return (
        <>
          {item.selection.map((selection, index2) => (
            <div key={index2} className="buildSelect item">
              <div className="selection">
                <h4>{selection.name}</h4>
                <p>{selection.description}</p>
              </div>
              <div className={"select"}>
                <button
                  onClick={() => {
                    handleSelect(
                      "abort",
                      item.type,
                      index1,
                      index2,
                      ".buildSelect"
                    );
                  }}
                  className="selected"
                >
                  SELECTED
                </button>
                <button
                  onClick={() => {
                    handleSelect(
                      "select",
                      item.type,
                      index1,
                      index2,
                      ".buildSelect"
                    );
                  }}
                  className="unSelect"
                >
                  SELECT
                </button>
              </div>
              {selection.name == "For someone else" ? (
                <div className="giftSelect">
                  <div className="fromTo">
                    <input placeholder="From" type="text" />
                    <input placeholder="To" type="text" />
                  </div>
                  <div className="message">
                    <textarea placeholder="Add a message"></textarea>
                  </div>
                </div>
              ) : (
                <></>
              )}
            </div>
          ))}
        </>
      );
    } else if (item.type == "product") {
      return (
        <>
          {item.selection.map((selection, index2) => (
            <>
              <div
                key={index2}
                className={
                  selection.isSelected
                    ? "buildProduct item isSelected"
                    : "buildProduct item"
                }
              >
                <div className="selection">
                  <img src={selection.img} />
                  <p>{selection.name}</p>
                  <div className="selectGroup">
                    <label>Grind</label>
                    <select>
                      <option>Whole Beans</option>
                      <option>Espresso Grind</option>
                      <option>Stovetop Grind</option>
                      <option>Plunger Grind</option>
                    </select>
                  </div>
                  <div className="selectGroup">
                    <label>Size</label>
                    <select>
                      <option>250g</option>
                      <option>300g</option>
                    </select>
                  </div>
                </div>
                <div className={"select"}>
                  <button
                    onClick={() => {
                      handleSelect(
                        "abort",
                        item.type,
                        index1,
                        index2,
                        ".buildProduct"
                      );
                    }}
                    className="selected"
                  >
                    SELECTED
                  </button>
                  <button
                    onClick={() => {
                      handleSelect(
                        "select",
                        item.type,
                        index1,
                        index2,
                        ".buildProduct"
                      );
                    }}
                    className="unSelect"
                  >
                    SELECT
                  </button>
                </div>
              </div>
            </>
          ))}
        </>
      );
    } else {
      return (
        <>
          <div className="shippingTime item">
            <h5>Delivery : </h5>
            <span>Thursday / Weekly</span>
          </div>
          {item.selection.map((selection, index2) => (
            <>
              <div key={index2} className="buildProduct">
                <div className="selection">
                  <img src={selection.img} />
                  <p>{selection.name}(1)</p>
                  <span>Espresso Grind</span>
                  <span>250g</span>
                  <div className="updateSub">
                    <span>-</span>
                    <span>+</span>
                  </div>
                  <button>Remove</button>
                </div>
              </div>
            </>
          ))}
        </>
      );
    }
  };
  return (
    <Controller>
      <Scene triggerElement=".subBuild" classToggle="fade" triggerHook={0.5}>
        <div id="subbuild" className="subBuild">
          <div className="subTitle">
            <p>Build Your Subscription</p>
          </div>
          <div className="buildContainer">
            <div className="gridItem">
              <div className="buildDes">
                <h5>Cofee Subscription</h5>
                <p>
                  It only takes a two ticks to set up a Coffee Subscription and
                  you'll have fresh coffee regularly delivered to you anywhere
                  in New Zealand. Whatever you want, however you want it,
                  whenever you want it. Subscriptions make getting fresh coffee
                  easy.
                </p>
                <p>Treat yourself or someone else.</p>
              </div>
              <div className="buildSide">
                <span>
                  <NavLink
                    style={{ color: "#222", textDecoration: "none" }}
                    to="/account"
                  >
                    Edit Your Subscription
                  </NavLink>
                </span>
                <BsArrowRight className="icon" />
              </div>
              <div
                onClick={() => {
                  openHow();
                }}
                className="buildSide"
              >
                <span>How it works</span>
                <BsArrowRight className="icon" />
              </div>
              <div className="buildImg">
                <img
                  src={require("../../images/100ppi/Subscriptions-Box_640x.png")}
                />
              </div>
            </div>
            <div className="gridItem second">
              {selectionArr.map((item, index) => (
                <div
                  key={index}
                  onClick={() => {
                    buildSub(index);
                  }}
                  className={
                    state.isActive == index
                      ? "buildOption isActive"
                      : "buildOption"
                  }
                >
                  <span>
                    {index + 1}&nbsp;&nbsp; {item.title}
                  </span>
                  <BsArrowRight className="icon" />
                </div>
              ))}
            </div>
            <div className="gridItem third">
              {selectionArr.map((item, index) => (
                <div
                  className={
                    index == state.isActive
                      ? "selectWrapper isActive"
                      : "selectWrapper"
                  }
                >
                  <div key={index} className="selectionPart">
                    <div className="selectName">
                      <h4>{index + 1 + " " + item.title}</h4>
                      <p>
                        {"    "}
                        &nbsp;&nbsp;&nbsp; {item.description}
                      </p>
                    </div>
                    {item.type == "product" ? (
                      <div className="searchBox">
                        <input type="text" placeholder="Search.." />
                      </div>
                    ) : (
                      <></>
                    )}
                    {renderSelect(item, index)}
                  </div>
                </div>
              ))}

              <div className="subPrice">
                <div className="total">
                  <h4>Total</h4>
                  <p>$170.00</p>
                </div>
                <button
                  onClick={() => {
                    addToCart();
                  }}
                  className="addToCart"
                >
                  Add Subscription to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </Scene>
    </Controller>
  );
}
