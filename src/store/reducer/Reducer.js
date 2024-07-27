
import * as Actions from '../actions/Actions'

const initialState = {
    user: {},
}







export const reducer = (state = { ...initialState}, action) => {

    const newState = state;

    switch (action.type) {
        default:
            return newState
    }
}