import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./slice";
import { filterReducer } from "./slice";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import { authReducer } from '../auth/auth-slice';
import persistStore from "redux-persist/es/persistStore";

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
};

export const store = configureStore({
    reducer: {
        auth: persistReducer(authPersistConfig, authReducer),
        contacts: contactsReducer,
        filter: filterReducer,
    },
});

export const persistor = persistStore(store);