import * as type from '../constants/index'

var initialState = 'sideBar'

const myReducer = (state=initialState,action)=>{
    switch (action.type) {
        case type.TOGGLE_SIDEBAR:
           
            if(action.toggle=='open')
            {
                state='sideBar active'
                return state
            
            }
            else{
                state='sideBar'
                return state
            }
           
        default:
            return state;
    }
}

export default myReducer