import {createAsyncThunk} from "@reduxjs/toolkit";
import {getRequest} from "../../requests";
import {remoteUrl} from "../../url";
import {ApiResponseModel} from "../../models/model";
import {ArticleApiResponseModel, ArticleReqPayloadModel} from "../../models/articleModel";




export const fetchArticles = createAsyncThunk("article/fetchArticles", async (payload:ArticleReqPayloadModel,thunkAPI) => {

    const resp :ApiResponseModel = await getRequest(payload.token, payload.url,payload.params)

    if(resp.status){
        const {data,...pagination} = resp.data
        const articleRes:ArticleApiResponseModel = {
            data,
            pagination
        }
        return articleRes
    }
    // return resp
    return thunkAPI.rejectWithValue(resp)
})

export const fetchUserArticlePreference = createAsyncThunk("article/fetchUserArticlePreference", async (payload:ArticleReqPayloadModel,thunkAPI) => {

    const resp :ApiResponseModel = await getRequest(payload.token, payload.url,payload.params)

    if(resp.status){
        const {data,...pagination} = resp.data
        const articleRes:ArticleApiResponseModel = {
            data,
            pagination
        }
        return articleRes
    }
    // return resp
    return thunkAPI.rejectWithValue(resp)
})
