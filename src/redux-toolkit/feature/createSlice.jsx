
import { createAsyncThunk } from '@reduxjs/toolkit';
import { loginAPI, registerAPI } from './authApi';


// LOGIN THUNK
export const loginUser = createAsyncThunk(
    'auth/loginUser',

    async (userData, { rejectWithValue }) => {
        try {
            const response = await loginAPI(userData);

            return response;

        } catch (error) {

            return rejectWithValue(
                error.response?.data?.message ||
                error.message ||
                'Login failed'
            );

        }
    }
);

// REGISTER THUNK
export const registerUser = createAsyncThunk(
    'auth/registerUser',

    async (userData, { rejectWithValue }) => {
        try {
            const response = await registerAPI(userData);

            return response;

        } catch (error) {
            return rejectWithValue(
                error.response?.data?.message ||
                error.message ||
                'Registration failed'
            );
        }
    }
);
