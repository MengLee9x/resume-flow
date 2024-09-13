import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
    isLoading: false,
    error: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
            state.isLoading = false;
            state.error = null;
        },
        clearUser: (state) => {
            state.user = null;
            state.isLoading = false;
            state.error = null;
        },
        setLoading: (state) => {
            state.isLoading = true;
        },
        setError: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
    },
});

export const { setUser, clearUser, setLoading, setError } = userSlice.actions;

export default userSlice.reducer;