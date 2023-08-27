import { configureStore } from '@reduxjs/toolkit';
import messageReducer from './messageSlice.js';
import userReducer from './user.slice.js';

export const store = configureStore({
    reducer: {
        message: messageReducer,
        user: userReducer,
    }
});
