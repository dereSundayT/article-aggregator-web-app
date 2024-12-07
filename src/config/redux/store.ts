import {combineReducers, configureStore} from "@reduxjs/toolkit";

import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore,  FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER, } from 'redux-persist';

import articleReducer from './articles/articleSlice'
import appReducer from './app/appSlice'
import userReducer from './user/userSlice'



const rootPersistConfig = {
    key: 'root',
    storage:storage,
    whitelist: ["user","app"]
}


const rootReducer = combineReducers({
    articles: articleReducer,
    app: appReducer,
    user: userReducer
})

const persistedReducer = persistReducer(rootPersistConfig, rootReducer)


export const store = configureStore({
    reducer : persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})






export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const persist = persistStore(store)