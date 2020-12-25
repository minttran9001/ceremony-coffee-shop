import React from 'react'
import ProductDetail from '../components/ProductDetails/ProductDetails'
import TopSellers from '../components/TopSellers/TopSellers'
import ProductReviews from '../components/ProductReviews/ProductReviews'
export default function ProductDetails() {
    return (
        <>
            <ProductDetail />
            <ProductReviews/>
            <TopSellers />
        </>
    )
}