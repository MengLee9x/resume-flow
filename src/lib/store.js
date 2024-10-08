import { configureStore } from "@reduxjs/toolkit";
import userReducer from './features/user/userSlice';
export function makeStore() {
    return configureStore({
        reducer: {
            user: userReducer,
        },
    });
}

export const store = makeStore();