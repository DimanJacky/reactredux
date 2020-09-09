import {ADD} from "../actions/actionTypes";

const initialState = {
    counter: 0
}

export default function counter(state = initialState, action) {

    switch (action.type) {
        case ADD:
            return {
                counter: state.counter + 1
            }
        default:
            return state
    }
}