
import { createSlice } from '@reduxjs/toolkit';
import { loginUser, registerUser } from './createSlice';


const initialState = {
    user: null,
    token: null,

    loading: false,
    error: null,

    isAuthenticated: false,
    success: false,
};

const authSlice = createSlice({
    name: 'auth',

    initialState,

    reducers: {
        logout: (state) => {
            state.user = null;
            state.token = null;
            state.isAuthenticated = false;
            state.success = false;
        },

        clearError: (state) => {
            state.error = null;
        },
    },

    extraReducers: (builder) => {

        builder.addCase(loginUser.pending, (state) => {
            state.loading = true;
            state.error = null;
            state.success = false;
        });

        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.loading = false;
            state.success = true;

            state.user = action.payload.user;
            state.token = action.payload.token;

            state.isAuthenticated = true;
        });

        builder.addCase(loginUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.success = false;
        });


        builder.addCase(registerUser.pending, (state) => {
            state.loading = true;
            state.error = null;
            state.success = false;
        });

        builder.addCase(registerUser.fulfilled, (state, action) => {
            state.loading = false;
            state.success = true;
            state.error = null;
        });

        builder.addCase(registerUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.success = false;
        });

    },
});

export const { logout, clearError } = authSlice.actions;

export default authSlice.reducer;
