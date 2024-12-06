import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {
    ArticleApiResponseModel,
    ArticleFilterModel, ArticleFilterProps,
    ArticleModel,
    ArticlePaginationModel
} from "../../models/articleModel";
import {fetchArticles} from "./articleAction";


export interface ArticleState {
    isArticleLoading: boolean;
    articleFilter : ArticleFilterModel;
    articles: ArticleModel[];
    paginationLinks: ArticlePaginationModel|null;
    error: string|null;
    isArticleModalOpen: boolean;
}

const initialState: ArticleState = {
    isArticleLoading: false,
    articles: [],
    paginationLinks: null,
    error: null,
    isArticleModalOpen: false,
    articleFilter:ArticleFilterProps
}

export const articleSlice = createSlice({
    name: 'articles',
    initialState,
    reducers: {
        handleArticleModal: (state) => {
            state.isArticleModalOpen = !state.isArticleModalOpen;
        },
        handleArticleFilter: (state, action: PayloadAction<ArticleFilterModel>) => {
            state.articleFilter = action.payload;
        }
    },
    extraReducers: (builder) => {
        //Get Articles
        builder
            .addCase(fetchArticles.pending, (state) => {
                state.isArticleLoading = true;
            })
            .addCase(fetchArticles.fulfilled, (state, action) => {
                state.isArticleLoading = false;
                 const {data, pagination} = action.payload as ArticleApiResponseModel;
                state.articles = data;
                state.paginationLinks = pagination;
            })
            .addCase(fetchArticles.rejected, (state, action) => {
                state.isArticleLoading = false;
                state.error = action.error.message ?? 'Something went wrong';
            });
        //End Get Articles
    }
})


export const {handleArticleModal,handleArticleFilter} = articleSlice.actions

export default articleSlice.reducer