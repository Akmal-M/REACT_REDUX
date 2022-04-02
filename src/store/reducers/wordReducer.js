import {ADD_WORD, GET_WORDS, REMOVE_WORD} from "../constants/constants";
const defaultState = {
    words:[]
}
export const wordReducer = (state = defaultState, action) => {
    switch (action.type){
        case (GET_WORDS):
            return ({...state, words: [...action.payload]})
        case (ADD_WORD):
            return ({...state, words:[...state.words, action.payload]})
        case (REMOVE_WORD):
            return ({...state, words: state.words.filter(word => word.id !== action.payload) })
        default:
            return state
    }
}