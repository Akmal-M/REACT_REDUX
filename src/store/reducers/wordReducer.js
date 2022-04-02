import {ADD_WORD, REMOVE_WORD} from "../constants/constants";
const defaultState = {
    words:[]
}
export const wordReducer = (state = defaultState, action) => {
    switch (action.type){
        case (ADD_WORD):
            return ({...state, words:[...state, action.payload]})

        case (REMOVE_WORD):
            return ({...state, words:[...state, action.payload]})
        default:
            return state
    }
}