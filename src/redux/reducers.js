import { combineReducers } from 'redux';
import {
  LOGIN,
  LOGOUT,
  ADD_MESSAGE
} from './actions';
const initialState = {
    login: false,
    username: '',
    conversation: []
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
const conversation = (state=initialState, action) => {
    switch(action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                conversation: [
                    ...state.conversation,
                    {
                        sender: action.payload.sender,
                        message: action.payload.message
                    }
                ]
            }
        default:
            return state;
    }
}
const chatApp = combineReducers({
    login,
    conversation
});
export default chatApp;