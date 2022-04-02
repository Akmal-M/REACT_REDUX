import {ADD_WORD, REMOVE_WORD} from "../constants/constants";

export const addWordActionCreator = payload => ({type:ADD_WORD, payload})
export const removeWordActionCreator = payload => ({type:REMOVE_WORD, payload})
