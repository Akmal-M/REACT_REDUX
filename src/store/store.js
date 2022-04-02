import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {wordReducer} from "./reducers/wordReducer";
import {composeWithDevTools} from 'redux-devtools-extension'


const rootReducer = combineReducers({
    wordReduce: wordReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))