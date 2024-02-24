import {configureStore} from "@reduxjs/toolkit";
import todoReducer from "./features/todoSlice.js";
import formReducer from "./features/formSlice.js";
import {loadState, saveState} from "./utilities/localStorage.js";

const preloadedState = loadState();

const store = configureStore({
    reducer: {
        'todo': todoReducer,
        'form': formReducer,
    },
    preloadedState
});

store.subscribe(() => {
    saveState(store.getState());
});

export default store;