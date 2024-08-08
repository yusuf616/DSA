
import * as Actions from '../actions/Actions'

const initialState = {
    user: {},
    sidebarItems:[],
    score:{},
}







export const reducer = (state = { ...initialState}, action) => {

    const newState = state;

    switch (action.type) {
        
        case Actions.SET_USER:
            return {...newState,user: action?.payload}
        case Actions.SET_SIDEBAR_ITEMS:
            return {...newState,sidebarItems:action.payload}
        case Actions.SET_SCORE:
            return {...newState,score:action.payload}
        default:
            return newState
    }
}