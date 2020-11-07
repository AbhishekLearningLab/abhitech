/*import {
    CREATE_QUERY,
    CLEAR_QUERY
  } from "../constant/types";*/
  
  // actions
  export const addQuery = (query) => ({
    type: "CREATE_QUERY",
    payload: query,
  });
  
  // clear selected contacts
  export const clearAllQuery = () => ({
    type: "CLEAR_QUERY",
  });
  