import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./slice";
import { filterReducer } from "./slice";
// import { authReducer }

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: filterReducer,
    },
});