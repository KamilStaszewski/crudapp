import { UI_ACTIONS } from '../constants/action_types';

export function updateName(userName) {
  return (dispatch) => {
    dispatch({ type: UI_ACTIONS.UPDATE_NAME, data: userName });
  };
}

export function incrementCount() {
  return (dispatch, getState) => {
    const { count } = getState().ui;
    return dispatch({ type: UI_ACTIONS.INCREMENT_COUNT, data: count + 1 });
  };
}

export function fetchData() {
  return (dispatch) => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(resp => resp.json())
    .then(data => dispatch({type: UI_ACTIONS.SET_REPOS, users: data }))
  } 
}

export function addUser() {
  return (dispatch, getState) => {
    const { users } = getState().ui
    console.log(users)
    dispatch({ type: UI_ACTIONS.ADD_USER, users:[users, {id: 3, name: 'Kamil', email: 'lala'}] });
  }
}