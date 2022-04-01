import {applyMiddleware, combineReducers, createStore} from "redux";
import {cashReducer} from "./reducers/cashReducer";
import {customerReducer} from "./reducers/customerReducer";
import {peopleReducer} from "./reducers/peopleReducer";
import {composeWithDevTools } from "redux-devtools-extension"
import thunk from 'redux-thunk'

// Gathering all reducers to give it into index

const rootReducer = combineReducers({
    cashReduce: cashReducer,
    customerReduce: customerReducer,
    trainReducer: peopleReducer
})

export const index = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
