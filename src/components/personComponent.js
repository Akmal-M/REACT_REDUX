import {useDispatch, useSelector} from "react-redux";
import {ADD_PERSON, REMOVE_PERSON} from "../store/constants/constants";


const PersonComponent = () => {

    const dispatch = useDispatch()
    const people = useSelector(state => state.trainReducer.people)

    const addPerson = (name) => {
        const person = {
            name,
            id: Date.now()
        }
        dispatch({type: ADD_PERSON, payload: person})
    }

    const removePerson = (person) => {
        dispatch({type: REMOVE_PERSON, payload: person.id})
    }

    return (
        <div>
            <button onClick={() => addPerson(prompt())}>Add Person</button>
            <button onClick={() => removePerson(prompt())}>Remove Person</button>
            {people.map(person =>
                <div onClick={() => removePerson(person)}>
                    {person.name}
                </div>)
            }

        </div>
    )
}

export default PersonComponent