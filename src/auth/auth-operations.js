import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// Добавление token

const token = {
    get(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    },
};

// Регистрация пользователя

export const register = createAsyncThunk('auth/register', async credentials => {
    try {
        const { data } = await axios.post('users/signup', credentials);
        token.unset(data.token);
        return data;
    } catch (error) {
        // обработка ошибки
    }
});

// Логика входа

export const logIn = createAsyncThunk('auth/login', async credentials => {
    try {
        const { data } = await axios.post('users/login', credentials);
        token.unset(data.token);
        return data;
    } catch (error) {
        // обработка ошибки
    }
});

// Логика выхода

export const logOut = createAsyncThunk('auth/logout', async () => {
    try {
        await axios.post('/users/logout');
        token.unset();
    } catch (error) {
        // обработка ошибки
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
        token.get(persistedToken);
        try {
            const { data } = await axios.get('/users/current');
            return data;
        } catch (error) {
            // обработка ошибки
        }
    },
);