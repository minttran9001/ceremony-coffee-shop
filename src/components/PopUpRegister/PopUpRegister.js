import React ,{useEffect, useState} from 'react'
import './PopUpRegister.scss'
import { AiOutlineClose} from 'react-icons/ai'
export default function PopUpRegister()
{
    const [popUp,setPopUp] =useState('popUp');
    // useEffect(()=>{
    //     var timeout = setTimeout(()=>{
    //         setPopUp('popUp show')
    //         document.body.style.overflowY = 'hidden'
    //     },4000)
    //     return ()=>{
    //         clearTimeout(timeout)
    //     }
    // },[])
    function closePopUp()
    {
        setPopUp('popUp')
        document.body.style.overflowY = 'scroll'
    }
    return (
        <div className={popUp}>
            <div className='wrapPopup'>
            <div onClick={()=>closePopUp()} className='close'>
                <AiOutlineClose className='icon'/>
            </div>
            <div className='background'>
                <img src={require('../../images/100ppi/_DSC0377.jpg')}/>
            </div>
            <div className='form'>
                <div className='logo'>
                    <img src={require('../../images/100ppi/logo-black.svg')}/>
                </div>
                <div className='content'>
                    <span>Want to be the first to know our</span>
                    <h6> Lastest Deals And Promotions</h6>
                    <p>Join us every week to taste what’s new at Ceremony and enhance your coffee knowledge.</p>
                </div>
                <div className='email'>
                    <div className='inputGroup'>
                    <input type='text' placeholder='Write Your Email'/>
                    <div className='line'>

                    </div>
                    </div>
                    <button>Yes, Please !</button>
                </div>
                <div className='decline'>
                    <a onClick={()=>closePopUp()} href='#'>No, Thanks !</a>
                </div>
            </div>
            <div className='shadow'>

            </div>
            </div>
        </div>
    )
}