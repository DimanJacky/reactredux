import {ADD} from "./actionTypes";

export function add() {
    return {
        type: ADD
    }
}

export function asyncAdd(number) {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(add())
        }, 1000)
    }
}