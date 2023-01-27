import { configureStore } from "@reduxjs/toolkit";
import city from "./city";


const store = configureStore({
    reducer: {
        // Add your reducers here
        city,
    },
});

export default store;