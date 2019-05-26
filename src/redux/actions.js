export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const ADD_MESSAGE = 'ADD_MESSAGE';

export const login = username => ({
  type: LOGIN,
  payload: { username },
});
export const logout = () => ({ type: LOGOUT });
export const addMessage = (name, message) => ({
  type: ADD_MESSAGE,
  payload: {
    sender: name,
    message,
  },
});
