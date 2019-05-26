import { combineReducers } from 'redux';
import {
  LOGIN,
  LOGOUT,
  ADD_MESSAGE,
} from './actions';

const login = (state = { login: false, username: '' }, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        login: true,
        username: action.payload.username,
      };
    case LOGOUT:
      return {
        login: false,
        username: '',
      };
    default:
      return state;
  }
};
const conversation = (state = { messages: [] }, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        messages: [
          ...state.messages,
          {
            sender: action.payload.sender,
            message: action.payload.message,
          },
        ],
      };
    default:
      return state;
  }
};
const chatApp = combineReducers({
  login,
  conversation,
});
export default chatApp;
