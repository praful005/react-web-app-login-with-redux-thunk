import {
    LOGIN_ERROR,
    LOGIN_LOAD,
    LOGIN_SUCCESS,
    USER_LOGOUT
  } from "../actions/types";

const initialState = {
    isLoading : false,
    token:null,
    username:null,
    error:null
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
      case LOGIN_LOAD:
        return {
          ...state,
          error:null,
          isLoading : true,
        };
      case LOGIN_SUCCESS:
        return {
          ...state,
          isLoading : false,
          token:payload.token,
          error:null,
        };
      case LOGIN_ERROR:
        return {
          ...state,
          isLoading : false,
          token:null,
          error:payload
        };
      case USER_LOGOUT:
        return {
          ...state,
          isLoading : false,
          token:null,
          error:null
        };
      default:
        return state;
    }
  };