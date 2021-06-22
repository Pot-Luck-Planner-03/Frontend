import {
    ADD_FEATURE,
    NEW_USER_FEATURE,
    LOGIN_FEATURE,
  } from '../Actions/PotluckActions';
  
  const initialState = {
    user: {
      username: '',
      password: '',
    }
  };
  
  export const potluckReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_FEATURE:
        return {
          ...state,
          item: action.payload,
        };
  
      case NEW_USER_FEATURE:
        return {
          ...state,
          user: action.payload,
        };
  
      case LOGIN_FEATURE:
        return {
          ...state,
          user: action.payload,
        };
  
      default:
        return state;
    }
  };