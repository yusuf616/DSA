
import * as Actions from '../actions/Actions'

const initialState = {
    user: {},
}







export const reducer = (state = { ...initialState}, action) => {

    const newState = state;

    switch (action.type) {
        case Actions.SET_USER:
            return {...newState,user: action?.payload}
        default:
            return newState
    }
}