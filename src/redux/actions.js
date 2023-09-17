export const AUTHORIZATION = 'AUTHORIZATION';
export const GET_MESSAGES = 'GET_MESSAGES';
export const GET_USERS = 'GET_USERS';

export const authenticationActionCreator = (login) => {
  return {
    type: AUTHORIZATION,
    login,
  };
};

export const massagesActionCreator = (messages) => {
  return {
    type: GET_MESSAGES,
    messages,
  };
};

export const usersActionCreator = (users) => {
  return {
    type: GET_USERS,
    users,
  };
};