import React, { useState } from "react";
import "./SignUp.scss";
import { Controller, Scene } from "react-scrollmagic";
export default function SignUp() {
  const [inputArray, setInputArray] = useState([
    {
      name: "First Name",
      content: "inputGroup",
      condition: "firstName",
    },
    {
      name: "Last Name",
      content: "inputGroup",
      condition: "lastName",
    },
    {
      name: "Email",
      content: "inputGroup",
      condition: "email",
    },
    {
      name: "Phone",
      content: "inputGroup",
      condition: "phone",
    },
    {
      name: "Company Name",
      content: "inputGroup",
      condition: "company",
    },
    {
      name: "Website",
      content: "inputGroup",
      condition: "website",
    },
    {
      name: "Address",
      content: "inputGroup",
      condition: "address",
    },
    {
      name: "Estimated Date of First Order",
      content: "inputGroup",
      condition: "estimated",
    },
    {
      name: "City",
      content: "inputGroup",
      condition: "city",
    },
    {
      name: "Country",
      content: "inputGroup",
      condition: "country",
    },
    {
      name: "Pounds of Coffee Per Week",
      content: "inputGroup",
      condition: "pound",
    },
    {
      name: "State",
      content: "inputGroup",
      condition: "state",
    },
  ]);
  function inputFocus(index, isFocused) {
    if (isFocused) {
      let newArr = [...inputArray];
      newArr[index].content = "inputGroup focus";
      setInputArray(newArr);
    } else {
      let newArr = [...inputArray];
      newArr[index].content = "inputGroup";
      setInputArray(newArr);
    }
  }
  const onScroll = (index) =>{
    document.querySelector('.signUp').classList.add('fade')
  }
  const onLeave = (index)=>{
    document.querySelector('.signUp').classList.remove('fade')
  }
  const sendInfo = (e)=>{
    e.preventDefault()
    document.querySelector('.wholesaleNotify').classList.add('success')
    const timeout = setTimeout(()=>{
      document.querySelector('.wholesaleNotify').classList.remove('success')

    },3000)
    return ()=>{
      clearTimeout(timeout)
    }
  }
  return (
    <div className="signUp">
      <p className="signUpTitle">Sign Me Up</p>
      <p className="signUpSubTitle">
        Have questions or ready to get started? Fill out the form below and
        we'll be in touch.
      </p>

      <form onSubmit={(e)=>sendInfo(e)} className="signUpForm">
        <p className="signUpTitle">Your Info</p>
        <div className="inputGrid">
          {inputArray.slice(0, 4).map((item, index) => {
            return (
              <Controller key={index} >
                <Scene 
                triggerElement='.signUpTitle'
                >
                  {(progress, event) => {
                    if (event.type == "start") {
                      onScroll(index);
                    }
                    if (event.type == "leave") {
                      onLeave(index);
                    }
                    return(
                        <div key={index} className={item.content}>
                      <label
                        onClick={() => inputFocus(index, true)}
                        className="labelInput"
                        htmlFor={item.condition}
                      >
                        {item.name}*
                      </label>
                      <input
                      required
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
                        type="text"
                        name={item.condition}
                        id={item.condition}
                        className="input"
                      />
                    </div>
                    )
                  }}
                </Scene>
              </Controller>
            );
          })}
        </div>
        <p className="signUpTitle">Company</p>
        <div className="inputGrid">
          {inputArray.slice(4, 12).map((item, index) => {
            index = index + 4;
            return (
                <Controller key={index} >
                  <Scene 
                  triggerElement='.signUpTitle'
                  >
                    {(progress, event) => {
                      if (event.type == "start") {
                        onScroll(index);
                      }
                      if (event.type == "leave") {
                        onLeave(index);
                      }
                      return(
              <div key={index} className={item.content}>
                <label
                  onClick={() => inputFocus(index, true)}
                  className="labelInput"
                  htmlFor={item.condition}
                >
                  {item.name}*
                </label>
                <input
                required
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
                  type="text"
                  name={item.condition}
                  id={item.condition}
                  className="input"
                />
              </div>
                   )
                }}
              </Scene>
            </Controller>
          );
          })}
        </div>

        <button type="submit" className="signUpBtn">
          Send
        </button>
      </form>
    </div>
  );
}
