import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import queryReducer from "../reducers/queryReducer";

const store = createStore(queryReducer, composeWithDevTools());

export default store;
