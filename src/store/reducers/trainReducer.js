import {ADD_PERSON, REMOVE_PERSON} from "../constants/constants";

const defaultState = {
    people:[],
}

export const trainReducer = (state = defaultState, action) => {
    switch (action.type) {
        case(ADD_PERSON):
            return ({...state, people: [ ...state.people, action.payload ]})
        case(REMOVE_PERSON):
            return ({...state, people: state.people.filter(person => person.id !== action.payload) })
        default:
            return state
    }
}

