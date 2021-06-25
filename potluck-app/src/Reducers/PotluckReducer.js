import {
    ADD_FEATURE,
    NEW_USER_FEATURE,
    LOGIN_FEATURE,
    GET_POTLUCK,
  } from '../Actions/potluckAction';
  
const initialState = {
  user: {
    user_id:null,
    username: '',
  },
  item: {
    potluck_name: '',
    potluck_location: '',
    potluck_date: '',
    potluck_time: '',
    potluck_description: '',
    organizer: '',
  }
  // potlucks: [],
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

      case GET_POTLUCK:
        return {
          ...state,
          potluck: [action.payload],
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