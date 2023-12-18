import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    articles: [],
    articleDetails: null,
    error: null
}
export const articleSlice = createSlice({
    name: 'article',
    initialState,
    reducers: {
        getArticleStart: (state, action) => {
            state.isLoading = true
        },
        getArticleSucces: (state, action) => {
            state.articles = action.payload
            state.isLoading = false
        },
        getArticleFailure: (state, action) => {
            state.error = action.payload
            state.isLoading = false
        },
        getArticleDetailsStart: (state, action) => {
            state.isLoading = true
        },
        getArticleDetailsSucces: (state, action) => {
            state.isLoading = false
            state.articleDetails = action.payload
        },
        getArticleDetailsFailure: (state, action) => {
            state.isLoading = false
            state.error = action.payload
        }
    }
})

export const { getArticleStart, getArticleSucces, getArticleFailure, getArticleDetailsStart, getArticleDetailsSucces, getArticleDetailsFailure  } = articleSlice.actions;
export default articleSlice.reducer;