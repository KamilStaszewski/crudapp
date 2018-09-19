// SIMPLE REDUCER
import { UI_ACTIONS } from '../constants/action_types';


const initialState = { 
  count: 1,
  userName: 'Berkay Aydin1', 
  webSite: 'http://sbaydin.com',
  users: [],
  name: '',
  email: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
  case UI_ACTIONS.SET_REPOS: 
    return { ...state, users: action.users };
  case UI_ACTIONS.ADD_USER:
    return {...state, users: action.users };
  case UI_ACTIONS.UPDATE_NAME:
    return {...state, name: action.val };
  case UI_ACTIONS.UPDATE_EMAIL:
    return {...state, email: action.val }
  default:
    return state;
  }
};
