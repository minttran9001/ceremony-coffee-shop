import React,{useState} from 'react'
import './Register.scss'
import Input from '../Input/Input'
import Button from '../Button/Button'
import { NavLink } from 'react-router-dom'
export default function Register()
{
    const [inputArray, setInputArray] = useState([
        {
            name: 'First Name',
            content: 'inputGroup',
            condition: 'firstName'
        },
        {
            name: 'Last Name',
            content: 'inputGroup',
            condition: 'lastName',
        },
        {
            name: 'Email',
            content: 'inputGroup',
            condition: 'email',

        },
        {
            name: 'Phone',
            content: 'inputGroup',
            condition: 'phone',
        },
        {
            name: 'Password',
            content: 'inputGroup',
            condition: 'password',
        },
        {
            name: 'Valid Password',
            content: 'inputGroup',
            condition: 'password',
        },
       ])
       const handleLogin = ()=>{
        document.querySelector(".loggedNotify").classList.add("success");
        const timeout = setTimeout(() => {
          document.querySelector(".loggedNotify").classList.remove("success");
        }, 3000);
        return () => {
          clearTimeout(timeout);
        };
       }
    return(
        <div className='register'>
                        <img className='beans' src={require('../../images/100ppi/beans3.png')}/>

              <img src={require('../../images/100ppi/123756455_2700438156888383_2212964200339847941_n.jpg')}/>
              <div className='loginBox'>
                <h6>
                    Sign Up
                </h6>
                <div className='signInForm'>
                   {
                       inputArray.slice(0,4).map((item,index)=>(
                           <Input inputFor='register' content={item.name} type='text'/>
                       ))
                   }
                  
                </div>
                <div className='signInForm'>
                   {
                       inputArray.slice(4,12).map((item,index)=>(
                           <Input inputFor='register' content={item.name} type='text'/>
                       ))
                   }
                  
                </div>
                <button onClick={()=>{handleLogin()}} content='Sign In'><NavLink to='/' style={{color:'#fff',textDecoration:'none'}}>Sign Up</NavLink></button>
              </div>
        </div>
    )
}
