import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import initialData from '../data/Queries.json';

const initialState = {queries: initialData};

const queryReducer = (state = initialState, action) => {
    switch(action.type)
    {
        default:
            return state;
    }
}

const store = createStore(queryReducer,composeWithDevTools());

export default store;