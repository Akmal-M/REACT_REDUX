import {getPeopleActionCreator} from "../store/actionCreators/peopleActionCreator";

export const fetchPeople = () => {
   return function(dispatch) {
       fetch('https://jsonplaceholder.typicode.com/users')
           .then(response => response.json())
           .then(json => dispatch(getPeopleActionCreator(json)))
   }
}