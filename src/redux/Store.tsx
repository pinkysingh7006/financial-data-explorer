import { configureStore } from "@reduxjs/toolkit";
import { reducers } from "./Reducers/reducers";
export const store = configureStore({
    reducer: {
        company: reducers,
    },
});
