import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    city: false
};

const city = createSlice({
    name: "city",
    initialState,
    reducers: {
        setCity: (state, action) => {
            state.city = action.payload;
        }
    }
});

export const { setCity } = city.actions;
export default city.reducer;