import React from 'react'
import WholeSaleBanner from '../components/WholeSaleBanner/WholeSaleBanner'
import Benefit from '../components/Benefit/Benefit'
import SignUp from '../components/SignUp/SignUp'

export default function WholeSale()
{
    return (
        <>
            <WholeSaleBanner/>
            <Benefit />
            <SignUp/>
        </>
    )
}