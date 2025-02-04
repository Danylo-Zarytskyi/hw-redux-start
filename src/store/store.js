import { createStore, combineReducers } from 'redux';

import numberReducer from '../reducers/number.js';
import buttonReducer from '../reducers/button.js';

const rootReducer = combineReducers({
    // reducers
    number: numberReducer,
    button: buttonReducer
});

const store = createStore(rootReducer);

export default store;