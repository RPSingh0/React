import {configureStore} from "@reduxjs/toolkit";
import todoReducer from "./features/todoSlice.js";
import formReducer from "./features/formSlice.js";

const store = configureStore({
    reducer: {
        'todo': todoReducer,
        'form': formReducer,
    }
})

export default store;