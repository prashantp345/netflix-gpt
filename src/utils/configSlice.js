import { createSlice } from "@reduxjs/toolkit";

const congifSlice = createSlice({
    name: "config",
    initialState: {
        lang: "en"
    },
    reducers: {
        changeLanguage: (state, action) => {
            state.lang = action.payload;
        }
    }
});

export const { changeLanguage } = congifSlice.actions;

export default congifSlice.reducer;