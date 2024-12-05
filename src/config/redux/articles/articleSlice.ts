import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {ArticleModel} from "../../models/articleModel";
import {fetchArticles} from "./articleAction";

export interface ArticleState {
    isArticleLoading: boolean;
    articles: ArticleModel[];
    error: string|null;
}

const initialState: ArticleState = {
    isArticleLoading: false,
    articles: [],
    error: null
}

export const articleSlice = createSlice({
    name: 'articles',
    initialState,
    reducers: {
        increment: (state) => {

        },
        decrement: (state) => {

        },
        incrementByAmount: (state, action: PayloadAction<number>) => {

        },
    },
    extraReducers: (builder) => {
        //Get Articles
        builder
            .addCase(fetchArticles.pending, (state) => {
                state.isArticleLoading = true;
            })
            .addCase(fetchArticles.fulfilled, (state, action) => {
                state.isArticleLoading = false;
                // state.articles = action.payload;
                state.articles = []
            })
            .addCase(fetchArticles.rejected, (state, action) => {
                state.isArticleLoading = false;
                state.error = action.error.message ?? 'Something went wrong';
            });
        //End Get Articles
    }
})


export const { increment, decrement, incrementByAmount } = articleSlice.actions

export default articleSlice.reducer