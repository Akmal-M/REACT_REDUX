import {getWordsActionCreator} from "../store/actionCreators/wordActionCreator";



export const fetchWords = () => {
    return dispatch => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(res => dispatch(getWordsActionCreator(res)) )
            .catch(err => console.log(err.message))
            .finally(() => console.log('done'))
    }
}