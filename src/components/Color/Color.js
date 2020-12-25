import React, { useEffect, useState } from 'react'
import './Color.scss'
import { Controller, Scene } from 'react-scrollmagic'
import colorImg from '../../images/100ppi/home_wanchai_shorter.mp4'
import { gsap, Power1 } from 'gsap'
import { NavLink } from 'react-router-dom'
export default function Color() {
    const animationRight = () => {
        gsap.to('.colorTitle', 1, {
            opacity: 1,
            y: 0,
            ease: Power1.easeIn
        })
        gsap.to('.animH5', 1, {
            opacity: 1,
            y: 0,
            ease: Power1.easeIn
        })
        gsap.to('.animButton', 1, {
            opacity: 1,
            y: 0,
            ease: Power1.easeIn
        })
        gsap.to('.video', 1, {
            opacity: 1,
            x: 0,
        })
    }

    return (
        <Controller>
            <Scene
                triggerHook={0.6}
            >
                {
                    (progress, event) => {
                        if (event.type == 'start') {
                            animationRight()
                        }
                        return (
                            <div className='color'>
                               
                                <div className='colorText'>
                                    <p className='colorTitle'>
                                        LET COLOR GUIDE YOU
                                    </p>
                                    <h5 className='animH5'>
                                        Cold Brew Drinks
                                     </h5>
                                     <span className='animH5'>
                                     Now you can enjoy specialty single origin and nitro cold brews at your business, office, or event. For wholesale orders, delivery is free, and there are no commitments.
                                     </span>
                                   <NavLink style={{color:'#222',textDecoration:'none'}} to='/coldbrew'> <button className='animButton'>
                                        EXPLORE THE COLOR SPECTRUM
                                </button></NavLink>
                                </div>
                                <video className='video' src={require('../../images/100ppi/coldbrew-service.mp4')} loop controls autoPlay />
                            </div>
                        )

                    }
                }

            </Scene>
        </Controller>

    )
}