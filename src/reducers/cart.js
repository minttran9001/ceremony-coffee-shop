import * as type from '../constants/index'

var initialState = [
]
const isExit =(newCart , id)=>
{
    debugger
       const  index = newCart.findIndex(x => x.item.id ===id);
        if(index!=-1)
        {
            return index;
        }
        else{
            return -1;
        }
}
const myReducer = (state = initialState,action)=>{
    switch (action.type) {
        case type.VIEW_CART:
            return state;
        case type.ADD_TO_CART:
          
            const newCart =[...state];
            var index = isExit(newCart,action.item.id);
            if(index!=-1)
            {
                action.quantity =Number(newCart[index].quantity + action.quantity)
                newCart[index] = {
                    item : action.item,
                    quantity : action.quantity
                }     
                
                return [...newCart]
            }
            else{
                newCart.push({
                    item : action.item,
                    quantity : action.quantity
                })
            
                return [...newCart]
            }
        case type.REMOVE_ITEM:
                const newArrDeleted = [...state]
                let i = newArrDeleted.indexOf(action.id)

                newArrDeleted.splice(i,1)

                return [...newArrDeleted]
        case type.CHANGE_QUANTITY:
                const newArrChange = [...state]
                const id = isExit(newArrChange,action.id)

                if(action.change=='decrease')
                {
                    newArrChange[id].quantity=newArrChange[id].quantity - 1
                }
                else{
                    newArrChange[id].quantity=newArrChange[id].quantity + 1
                }
                return [...newArrChange]
            
        default:
            return state;
    }
}
export default myReducer;