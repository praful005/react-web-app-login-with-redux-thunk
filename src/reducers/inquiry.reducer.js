import {
    LOGIN_ERROR,
    LOGIN_LOAD,
    LOGIN_SUCCESS,
    USER_LOGOUT
  } from "../actions/types";

const initialState = {
    data : [],
    isLoading:false,
    error:null
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
      case 'LOAD_INQUIRY':
        return {
          ...state,
          isLoading : true,
        };
      case 'ALL_INQUIRY':
        return {
          ...state,
          isLoading : false,
          inquiry:payload.data
        };
      case 'INQUIRY_ERROR':
        return {
          ...state,
          isLoading : false,
          error:payload
        };
      default:
        return state;
    }
  };