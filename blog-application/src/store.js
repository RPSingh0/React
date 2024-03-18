import {configureStore} from "@reduxjs/toolkit";
import uiReducer from './components/UI/uiSlice.js';

const store = configureStore({
    reducer: {
        'ui': uiReducer
    }
});

export default store;