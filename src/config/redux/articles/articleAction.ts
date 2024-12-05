import {createAsyncThunk} from "@reduxjs/toolkit";


export const fetchArticles = createAsyncThunk("article/fetchArticles", async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    return response.json();
})