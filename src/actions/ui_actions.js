import { UI_ACTIONS } from '../constants/action_types';


export function fetchData() {
  return (dispatch) => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(resp => resp.json())
    .then(data => dispatch({type: UI_ACTIONS.SET_REPOS, users: data }))
  } 
}

// export function handleNameChange(value) {
//   return (dispatch) => {
//     dispatch({ type: UI_ACTIONS.UPDATE_NAME, val: value});
//   };
// }

// export function handleEmailChange(value) {
//   return (dispatch) => {
//     dispatch({ type: UI_ACTIONS.UPDATE_EMAIL, val: value});
//   };
// }


export function addUser(e, name, email) {
  return (dispatch, getState) => {
    e.preventDefault()
    console.log(email)
    const { users } = getState().ui
    dispatch({ type: UI_ACTIONS.ADD_USER, users:[...users, {id: users.length+1, name: name, email: email}] });
  }
}