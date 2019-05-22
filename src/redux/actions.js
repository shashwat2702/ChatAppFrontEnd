export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const ADD_MESSAGE = 'ADD_MESSAGE';

export const login = (username) => {
    return {
        type: LOGIN,
        payload:{username}
    }
};
export const logout = () => {return {type: LOGOUT}};
export const addMessage = (name, message) => {
    return {
        type: ADD_MESSAGE,
        payload:{
            sender: name,
            message: message
        }
    }
};