import {gsap,Power1} from 'gsap'
import React from 'react'
import { Controller, Scene } from 'react-scrollmagic'
import './OurInstagram.scss'
export default function OurInstagram() {
    function animation()
    {
        gsap.to('.animImg',1,{
            y:0,
            opacity:1,
            ease:Power1.easeInOut
        })
        gsap.to('.animTitle',1,{
            y:0,
            opacity:1,
            delay:1,
            ease:Power1.easeInOut
        })
    }
    return (
        <Controller>
            <Scene 
                triggerHook={0.4}
            >
               {(progress,event)=>{
                   if(event.type=='start')
                   {
                       animation()
                   }
                   return(
                    <div className='ourInsta'>
                    <div className='ourInstaTitle'>
                        <img src='https://ceremonycoffee.com/wp-content/themes/ceremony/assets/images/ig-logo.png' />
                        <div className='title'>
                            <h5 className='animTitle'>
                                Ceremony Grammed
                            </h5>
                            <p className='animTitle'>
                                Follow along for events, products and more
                            </p>
                        </div>
                    </div>
                    <div className='ourInstaMiddle'>
                        <img className='animImg' src='https://ceremonycoffee.com/wp-content/uploads/fall2020-4-900x900.jpg' />
                    </div>
                    <div className='ourInstaGrid'>
                        <div className='imgGroup'>
                            <span className='animImg'>$</span>
                            <img className='animImg' src='https://ceremonycoffee.com/wp-content/uploads/2CCB5F9B-D80D-43C6-818F-937DCB9A771C-810x900-1.jpg' />
                        </div>
                        <div className='imgGroup'>
                            <span className='animImg'>$</span>
                            <img className='animImg' src='https://ceremonycoffee.com/wp-content/uploads/fall-hero1-900x900.jpg' />
                        </div>
                        <div className='imgGroup'>
                            <span className='animImg'>$</span>
                            <img className='animImg' src='https://ceremonycoffee.com/wp-content/uploads/Screen-Shot-2020-09-22-at-11.29.08-AM-900x900.png' />
                        </div>
                        <div className='imgGroup'>
                            <span className='animImg'>$</span>
                            <img className='animImg' src='https://ceremonycoffee.com/wp-content/uploads/ceremony-coffee-roasters-gift-card-1-1.jpg' />
                        </div>
                        <div className='imgGroup'>
                            <span className='animImg'>$</span>
                            <img className='animImg' src='https://ceremonycoffee.com/wp-content/uploads/Screen-Shot-2020-03-30-at-4.12.13-PM-900x900.png' />
                        </div>
                        <div className='imgGroup'>
                            <span className='animImg'>$</span>
                            <img className='animImg' src='https://ceremonycoffee.com/wp-content/uploads/whall-6-900x900.jpg' />
                        </div>
                    </div>
                </div>
                   )
               }}
            </Scene>
        </Controller>
    )
}