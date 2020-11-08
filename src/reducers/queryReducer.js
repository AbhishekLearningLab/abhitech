import initialData from '../data/Queries.json';
  
  const intialState = {
    queries: initialData
  };
  
  export const queryReducer = (state = intialState, action) => {
    switch (action.type) {
      case "CREATE_QUERY":
        return {
          ...state,
          queries: [action.payload, ...state.queries],
        };
        
      default:
        return state;
    }
  }; 

  export default queryReducer;