import React from 'react'
import Hero from '../components/Hero/Hero'
import Freshest from '../components/Freshest/Freshest'
import Color from '../components/Color/Color'
import TransitionText from '../components/TransitionText/TransitionText'
import OurInstagram from '../components/OurInstagram/OurInstagram'
export default function Home() {
    return (
        <div>
            <Hero />
            <TransitionText/>
            <Freshest />
            <Color/>
            <OurInstagram/>
        </div>

    )
}