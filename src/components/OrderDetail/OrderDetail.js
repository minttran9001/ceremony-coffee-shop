import React from 'react'

import './OrderDetail.scss'
import {AiOutlineClose} from 'react-icons/ai'
export default function OrderDetail (props)
{
    const closeOrder = () =>{
       if(props.view == 'subDetail')
       {
        document.querySelector('.subModal').classList.remove('fade')
       }
       else{
        document.querySelector('.orderModal').classList.remove('fade')

       }
      }
    return (
        <div className={props.view=='subDetail' ? 'orderDetail subModal' : 'orderDetail orderModal'}>
            <div className='orderTable'>
                <div className='title'>
                    <h5>{props.view=='subDetail' ? 'Subscription Details' : 'Order Details'}</h5>
                    <AiOutlineClose onClick={()=>{closeOrder()}} className='icon'/>
                </div>
                <div className='row rowHead'>
                    <div className='col'>
                        No.
                    </div>
                    <div className='col'>
                        Item
                    </div>
                    <div className='col'>
                        Quantity
                    </div>
                    <div className='col'>
                        Unit Price
                    </div>
                    <div className='col'>
                        Total Price
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        1.
                    </div>
                    <div className='col'>
                        <img src='//cdn.shopify.com/s/files/1/2220/0129/products/MexicoSiltepec-2.jpg?v=1598639934'/>
                        <div className='itemOr'>
                            <span>Mexico Siltepec</span>
                            <span>Thursday / Weekly</span>
                            <span>12oz</span>
                        </div>
                    </div>
                    <div className='col'>
                        <span>1</span>
                    </div>
                    <div className='col'>
                        <span>$12.00</span>
                    </div>
                    <div className='col'>
                        <span>$12.00</span>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                       2.
                    </div>
                    <div className='col'>
                        <img src='//cdn.shopify.com/s/files/1/2220/0129/products/ColoElRoblehero.jpg?v=1599157793'/>
                        <div className='itemOr'>
                            <span>Colombia El Roble</span>

                            <span>12oz</span>
                        </div>
                    </div>
                    <div className='col'>
                        <span>2</span>
                    </div>
                    <div className='col'>
                        <span>$12.00</span>
                    </div>
                    <div className='col'>
                        <span>$24.00</span>
                    </div>
                </div>
            </div>
        </div>
    )
}