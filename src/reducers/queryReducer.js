import initialData from '../data/Queries.json';
import {
    CREATE_QUERY,
    CLEAR_QUERY
  } from "../constant/types";
  
  const intialState = {
    queries: initialData,
  };
  
  export const contactReducer = (state = intialState, action) => {
    switch (action.type) {
      case "CREATE_QUERY":
        return {
          ...state,
          queries: [action.payload, ...state.queries],
        };
        
      case "CLEAR_QUERY":
        return {
          ...state,
          selectedQueries: [],
        };
      default:
        return state;
    }
  };
  