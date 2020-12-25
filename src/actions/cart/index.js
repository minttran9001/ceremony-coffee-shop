
import * as type from '../../constants/index'

export const viewCart = () => {
    return {
        type: type.VIEW_CART,
    }
}
export const addToCart = (item, quantity) => {
    return {
        type: type.ADD_TO_CART,
        item: item,
        quantity: quantity,
    }
}
export const removeItem = (id) => {
    return {
        type: type.REMOVE_ITEM,
        id : id,
    }
}
export const changeQuantity = (id,change)=>{
    return{
        id:id,
        change:change,
        type:type.CHANGE_QUANTITY
    }
}