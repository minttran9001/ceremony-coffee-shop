import React from 'react'
import './TopSellers.scss'
import Products from '../../components/Products/Products'
export default function TopSellers()
{
    return (
        <div className='topSellers'>
            <div className='topSellersTitle'>
                <p>TOP SELLERS</p>
            </div>
            <Products type='topsellers'/>
        </div>
    )
}