import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from './../reducers/auth'
import ArticlesReducer from './../reducers/articles'

export default configureStore({
    reducer: {
        auth: AuthReducer,
        article: ArticlesReducer
    },
    devTools: process.env.NODE_ENV !== 'production'
})