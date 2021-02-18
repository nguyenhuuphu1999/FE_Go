import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import home from './home';
import homeStay from './homeStay';

const rootReducer = combineReducers({
    home,
    homeStay,
});

const store = configureStore({
    reducer: rootReducer
});

export default store;