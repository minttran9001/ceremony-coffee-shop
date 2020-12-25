import React from 'react'
import './SignIn.scss'
import Input from '../Input/Input'
import Button from '../Button/Button'
import {NavLink} from 'react-router-dom'
export default function SignIn()
{
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
        <div className='signIn'>
            <img className='beans' src={require('../../images/100ppi/beans2.png')}/>
              <img src={require('../../images/100ppi/120004199_317188836049534_8314362439864175463_n.jpg')}/>
              <div className='loginBox'>
                <h6>
                    Sign In
                </h6>
                <div className='signInForm'>
                    <Input content='Username *' type='text' />
                    <Input content='Password *' type='password' />
                    <NavLink style={{marginRight:50}} to='/register'>You dont have an account ?</NavLink>
                    <button onClick={()=>{handleLogin()}} content='Sign In'><NavLink to='/' style={{color:'#fff',textDecoration:'none'}}>Sign In</NavLink></button>
                </div>
              </div>
        </div>
    )
}
