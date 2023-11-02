import { configureStore } from "@reduxjs/toolkit";
import { authSlice, tweetSlice, uiSlice } from "./";

export const store = configureStore({
    reducer: {
        ui: uiSlice.reducer,
        auth: authSlice.reducer,
        tweet: tweetSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
});