import React from 'react'
import './ColdBrewBanner.scss'
import anime from 'animejs'
export default function ColdBrewBanner()
{
    const [backGround, setBackGround] = React.useState();
    React.useEffect(()=>{
        window.addEventListener("scroll", parallaxHeader);
        animateText()
    },[])
    function parallaxHeader() {
        let value = window.scrollY;
        setBackGround(value * 0.6 + "px");
      }
    const animateText = () =>{
        var animh5 = document.querySelector(".animH6");
        animh5.innerHTML = animh5.textContent.replace(
          /\S/g,
          "<span class='letter'>$&</span>"
        );
        var animp = document.querySelector(".animP");
        animp.innerHTML = animp.textContent.replace(
          /\S/g,
          "<span class='letter'>$&</span>"
        );
        anime
        .timeline({ loop: true })
        .add({
          targets: [animh5, animp],
          translateX: [40, 0],
          translateZ: 0,
          opacity: [0, 1],
          easing: "easeOutExpo",
          duration: 2200,
          delay: (el, i) => 500 + 50 * i,
        })
        .add({
          targets: [animh5, animp],
          translateX: [0, -30],
          opacity: [1, 0],
          easing: "easeInExpo",
          duration: 2000,
          delay: (el, i) => 100 + 50 * i,
        });

    }
    return(
        <div className='coldBrewBanner'>
            <img  style={{ top: backGround }} src={require('../../images/100ppi/cmy-coldbrew-hero-2-1600x900.jpg')}/>
            <div className='coldBrewTitle'>
                <h6 className='animH6'>Taste the Future of Cold Brew</h6>
                <p className='animP'>
                    Now you can enjoy specialty single origin and nitro cold brews at your business, office, or event. For wholesale orders, delivery is free, and there are no commitments.
                </p>
            </div>
        </div>
    )
}