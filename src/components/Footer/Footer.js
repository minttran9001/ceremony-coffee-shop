import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import fb from "../../images/facebook.svg";
import ig from "../../images/instagram.svg";
import tw from "../../images/twitter.svg";
import it from "../../images/itunes.svg";
import "./Footer.scss";
import { Back } from "gsap";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";
import {AiOutlineInstagram,AiOutlineGoogle} from 'react-icons/ai'
import {FiFacebook,FiTwitter} from 'react-icons/fi'
export default function Footer() {
  
  return (
    <Controller>
      <Scene

      >
        {(progress, event) => (
          <div className=" footer scrolledFooter">
              <div className='right'>
                  <div className='title'>
                      <span>Want to be the first to know ?</span>
                      <span>Follow us on social:</span>
                  </div>
                  <div className='linkSocial'>
                      <a>Facebook</a>
                      <a>Instagram</a>
                      <a>Pinterest</a>
                  </div>
              </div>
              <div className='left'>
                  <div className='service'>
                    <span>FAQ</span>
                    <span>Shipping</span>
                    <span>Return & Refund Policy</span>
                    <span>Privacy Policy</span>
                    <span>Virtual Styling Experience</span>
                    <span>Contact Us</span>
                  </div>
                  <div className='quote'>
                      <img src={require('../../images/100ppi/tagline.svg')}/>
                  </div>
              </div>
          </div>
        )}
      </Scene>
    </Controller>
  );
}
