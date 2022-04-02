import {ADD_WORD, GET_WORDS, REMOVE_WORD} from "../constants/constants";

export const getWordsActionCreator = payload => ({type:GET_WORDS, payload})
export const addWordActionCreator = payload => ({type:ADD_WORD, payload})
export const removeWordActionCreator = payload => ({type:REMOVE_WORD, payload})
