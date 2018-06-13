import usersApi from '../api/usersApi';
import * as types from './action-types';

export function loginSuccess(documentList) {
  return { type: types.LOAD_DOCUMENT_LIST_SUCCESS, documentList };
}

export function loginError(error) {
  return { type: types.LOAD_DOCUMENT_LIST_ERROR, error };
}

export function login(user) {
  return function dispatchLogin(dispatch) {
    return usersApi
      .login(user)
      .then((result) => {
        dispatch(loginSuccess(result));
      })
      .catch((error) => {
        dispatch(loginError(error));
      });
  };
}
