// SIMPLE REDUCER
import { UI_ACTIONS } from '../constants/action_types';

const initialState = { 
  count: 1,
  userName: 'Berkay Aydin', 
  webSite: 'http://sbaydin.com',
  users: [] 
}

export default (state = initialState, action) => {
  switch (action.type) {
  case UI_ACTIONS.UPDATE_NAME:
    return { ...state, userName: action.data };
  case UI_ACTIONS.INCREMENT_COUNT:
    return { ...state, count: action.data };
  case UI_ACTIONS.SET_REPOS: 
    return { ...state, users: action.users };
  case UI_ACTIONS.ADD_USER:
    return {...state, users: action.users }
  default:
    return state;
  }
};
