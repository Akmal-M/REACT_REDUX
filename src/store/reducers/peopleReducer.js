import {GET_PEOPLE, ADD_PERSON, REMOVE_PERSON} from "../constants/constants";

const defaultState = {
    people:[],
}

export const peopleReducer = (state = defaultState, action) => {
    switch (action.type) {
        case(GET_PEOPLE):
            return ({...state, people: [ ...state.people, ...action.payload ]})
        case(ADD_PERSON):
            return ({...state, people: [ ...state.people, action.payload ]})
        case(REMOVE_PERSON):
            return ({...state, people: state.people.filter(person => person.id !== action.payload) })
        default:
            return state
    }
}

