import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

// Добавление токена

const token = {
    setToken(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    },
};

// Регистрация пользователя

export const register = createAsyncThunk('auth/register',
    async (credentials, thunkAPI) => {
    try {
        const { data } = await axios.post('users/signup', credentials);
        token.setToken(data.token);
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

// Логика входа

export const logIn = createAsyncThunk('auth/login',
    async (credentials, thunkAPI) => {
    try {
        const { data } = await axios.post('users/login', credentials);
        token.setToken(data.token);
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

// Логика выхода

export const logOut = createAsyncThunk('auth/logout',
    async (_, thunkAPI) => {
    try {
        await axios.post('/users/logout');
        token.unset();
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

// Возвращаем текущего пользователя

export const fetchCurrentUser = createAsyncThunk(
    'auth/refresh',
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const persistedToken = state.auth.token;

        if (persistedToken === null) {
            return thunkAPI.rejectWithValue();
        }
        try {
            token.setToken(persistedToken);
            const { data } = await axios.get('/users/current');
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    },
);