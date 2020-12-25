import React from "react";
import "./EditForm.scss";
import {
  AiOutlineMail,
  AiOutlineEnvironment,
  AiOutlineProfile,
  AiOutlinePhone,
  AiFillBank,
  AiOutlineCoffee,
} from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
export default function EditForm() {
  const inputArr = [
    {
      name: "First Name",
      content: "inputGroup",
      condition: "firstName",
    },
    {
      name: "Address",
      content: "inputGroup",
      condition: "address",
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
  ];
  const onFocusInput = (index)=>{
      var input = document.querySelectorAll('.inputFormGroup')[index]
      input.classList.add('onFocus')
  }
  const openEditForm = () => {
      document.querySelector('.hiddenForm').classList.add('open')
  };
  const onSave = (e) =>{
    e.preventDefault()
    document.querySelector('.saveNotify').classList.add('success')
    document.querySelector('.hiddenForm').classList.remove('open')
    const timeout = setTimeout(()=>{
      document.querySelector('.saveNotify').classList.remove('success')

    },3000)
    return ()=>{
      clearTimeout(timeout)
    }
  }
  return (
   <>
   <div className='formTitle'>
      <h5>Your Profile</h5>
   </div>
    <div className="editForm">
      
      <div className="formDetail">
        <h6>
          <AiOutlineProfile className="icon" /> Mint Tran
        </h6>
        <p>
          <AiOutlineCoffee className="icon" /> 7 th July, 1999
        </p>
        <p>
          <AiOutlineMail className="icon" /> minttran .9002 @gmail.com
        </p>
        <p>
          <AiOutlinePhone className="icon" /> 0962448869
        </p>
        <p>
          <AiOutlineEnvironment className="icon" /> 81 st Wall Street, New York,
          US
        </p>
        <p>
          <AiFillBank className="icon" /> The Coffee House
        </p>
        <div>
          <a
            className="link"
            style={{ color: "#222", textDecoration: "none" }}
            onClick={() => {
              openEditForm();
            }}
          >
            <button>Edit Profile</button>
          </a>
          <NavLink
            className="link"
            style={{ color: "#222", textDecoration: "none" }}
            to="/account"
          >
            <button>
              <BsArrowRight className="icon" />
              Back to account page
            </button>
          </NavLink>
        </div>
      </div>
      <div className="hiddenForm">
        {inputArr.map((item, index) => (
          <div key={index} className="inputFormGroup">
            <label>{item.name}</label>
            <div>
              <input className='formInput' onFocus={()=>onFocusInput(index)} type="text" placeholder="" required />
            </div>
            <div className="line"></div>
          </div>
        ))}

        <div className="formBtn">
          <button>Clear</button>
          <button onClick={(e)=>{onSave(e)}}>Save</button>
        </div>
      </div>
    </div>
   </>
  );
}
