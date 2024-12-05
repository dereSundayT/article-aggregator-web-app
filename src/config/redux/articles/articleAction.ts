import {createAsyncThunk} from "@reduxjs/toolkit";
import {getRequest} from "../../requests";
import {remoteUrl} from "../../url";
import {ApiResponseModel} from "../../models/model";
import {ArticleApiResponseModel} from "../../models/articleModel";



export const fetchArticles = createAsyncThunk("article/fetchArticles", async (token:string,thunkAPI) => {

    const resp :ApiResponseModel = await getRequest(token, remoteUrl.articles)

    if(resp.status){
        const articleRes:ArticleApiResponseModel = resp.data
        return articleRes
    }
    console.log(resp)
    // return resp
    return thunkAPI.rejectWithValue(resp)


})