import { combineReducers } from 'redux';
import {
  LOGIN,
  LOGOUT
} from './actions';
const initialState = {
    login: false,
    username: ''
};

const login = (state=initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                login: true,
                username: action.payload.username
            }
        case LOGOUT: 
            return {
                ...initialState
            }
        default:
            return state
    }
};
const chatApp = combineReducers({
    login
});
export default chatApp;