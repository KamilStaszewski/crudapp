// SIMPLE REDUCER
import { UI_ACTIONS } from '../constants/action_types';


const initialState = { 
  users: [],
  name: '',
  email: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
  case UI_ACTIONS.SET_REPOS: 
    return { ...state, users: action.users };
  case UI_ACTIONS.ADD_USER:
    return {...state, users: action.users};
  default:
    return state;
  }
};
