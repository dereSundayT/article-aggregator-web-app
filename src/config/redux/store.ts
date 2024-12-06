import {configureStore} from "@reduxjs/toolkit";

import articleReducer from './articles/articleSlice'
import appReducer from './app/appSlice'
import userReducer from './user/userSlice'


export const store = configureStore({
    reducer: {
        articles: articleReducer,
        app: appReducer,
        user: userReducer
    },
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch