import React from 'react'
import SubscriptionBanner from '../components/SubscriptionBanner/SubscriptionBanner'
import SubscriptionSet from '../components/SubscriptionSet/SubscriptionSet'
import Product from '../components/Products/Products'
import SubscriptionBuild from '../components/SubscriptionBuild/SubscriptionBuild'
export default function Subscription()
{
    return(
        <div >
            <SubscriptionBanner/>
            <SubscriptionSet/>
            <SubscriptionBuild/>
        </div>
    )
}