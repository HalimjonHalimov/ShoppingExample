import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    articles: [],
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
        }
    }
})

export const { getArticleStart, getArticleSucces, getArticleFailure  } = articleSlice.actions;
export default articleSlice.reducer;