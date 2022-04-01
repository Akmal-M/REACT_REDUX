import {ADD_CASH, GET_CASH} from "../constants/constants";

export const getCashActionCreator = (payload) => ({type:GET_CASH, payload})
export const setCashActionCreator = (payload) => ({type:ADD_CASH, payload})

