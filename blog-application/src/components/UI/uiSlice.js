import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    isHeaderOpen: false
}

const uiSlice = createSlice({
    name: 'uiSlice',
    initialState: initialState,
    reducers: {
        toggleHeader(state) {
            state.isHeaderOpen = !state.isHeaderOpen
        }
    }
});

export const {toggleHeader} = uiSlice.actions;
export default uiSlice.reducer;