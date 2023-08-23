import { configureStore } from "@reduxjs/toolkit";
import RegisterEventReducers from '../reducer/reducerRegister';

export const store = configureStore({
    reducer: {
        reducerE: RegisterEventReducers,

    }
})
