import {combineReducers} from "redux";
import { reducer as formReducer } from 'redux-form'

import counterReducer from "./reducers/counter";
import dialogsReducer from "./reducers/dialogs-reducer";

export default combineReducers({
    counterReducer,
    dialogsReducer,
    form: formReducer
})
