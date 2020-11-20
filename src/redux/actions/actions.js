import {ADD, ADD_NUMBER, SEND_MESSAGE} from "./actionTypes";

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

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});
