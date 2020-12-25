import * as type from '../../constants/index'

export const toggleSideBar = (toggle)=>{
    return {
        type : type.TOGGLE_SIDEBAR,
        toggle,
    }
}