import {ADD, ADD_NUMBER} from "./actionTypes";

export function add() {
    return {
        type: ADD
    }
}

export function addNumber(number) {
    return {
        type: ADD_NUMBER,
        payload: number
    }
}

export function asyncAdd(number) {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(add())
        }, 1000)
    }
}