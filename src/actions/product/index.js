import * as type from '../../constants/index'

export const viewProduct = (viewBy)=>{
    return {
        type : type.VIEW_PRODUCT,
        viewBy,
    }
}
export const sortProductBy = (sortBy)=>{
    return {
        type : type.SORT_PRODUCT_BY,
        sortBy,
    }
}
export const getProductById=(productId)=>{
    return{
        type:type.GET_PRODUCT_BY_ID,
        productId,
    }
}

