import {combineReducers} from 'redux'
import cart from './cart'
import product from './product'
import sideBar from './sideBar.js'
const myReducers = combineReducers({
    cart,
    product,
    sideBar,
})
export default myReducers;