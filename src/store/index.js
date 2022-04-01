import {combineReducers, createStore} from "redux";
import {cashReducer} from "./reducers/cashReducer";
import {customerReducer} from "./reducers/customerReducer";
import {trainReducer} from "./reducers/trainReducer";
import {composeWithDevTools } from "redux-devtools-extension"

// Gathering all reducers to give it into index

const rootReducer = combineReducers({
    cashReduce: cashReducer,
    customerReduce: customerReducer,
    trainReducer: trainReducer
})

export const index = createStore(rootReducer, composeWithDevTools())
