import React,{useEffect} from 'react'
import './WholeSaleBanner.scss'
import anime from 'animejs'
export default function WholeSaleBanner()
{  useEffect(() => {
    animateText()
  }, []);
    const animateText = () => {
        var animh5 = document.querySelector(".animH5");
        animh5.innerHTML = animh5.textContent.replace(
          /\S/g,
          "<span class='letter'>$&</span>"
        );
        var animh4 = document.querySelector(".animH4");
        animh4.innerHTML = animh4.textContent.replace(
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
            targets: [animh5,animh4,animp],
            translateX: [40, 0],
            translateZ: 0,
            opacity: [0, 1],
            easing: "easeOutExpo",
            duration: 2200,
            delay: (el, i) => 500 + 50 * i,
          })
          .add({
            targets: [animh5,animh4,animp],
            translateX: [0, -30],
            opacity: [1, 0],
            easing: "easeInExpo",
            duration: 2000,
            delay: (el, i) => 100 + 50 * i,
          });
      };
    return(
        <div  className='wholeSaleBanner'>
            <div  className='wholeTitle'>
                <h6 className='animH5'>
                Serve Ceremony
                </h6>
                <h6 className='animH4'> Wherever You Are</h6>
                <p className='animP'>
                There’s a profound sense of partnership that reverberates throughout our wholesale ecosystem. We help build coffee programs to grow. Scroll down to learn more about working with us.
                </p>
            </div>
            <video src={require('../../images/100ppi/serve.mp4')} loop autoPlay/>
        </div>
    )
}