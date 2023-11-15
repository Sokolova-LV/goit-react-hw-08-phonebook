import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// Регистрация пользователя

const register = createAsyncThunk('auth/register', async credentials => {
    try {
        const { data } = await axios.post('users/signup', credentials);
        return data;
    } catch (error) {
        // обработка ошибки
    }
});

// Логика входа

const logIn = createAsyncThunk('auth/login', async credentials => {
    try {
        const { data } = await axios.post('users/login', credentials);
        return data;
    } catch (error) {
        // обработка ошибки
    }
});