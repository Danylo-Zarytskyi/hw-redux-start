import { createStore, combineReducers } from 'redux';

import numberReducer from '../reducers/number.js'

const rootReducer = combineReducers({
    // reducers
    number: numberReducer,
});

const store = createStore(rootReducer);

export default store;