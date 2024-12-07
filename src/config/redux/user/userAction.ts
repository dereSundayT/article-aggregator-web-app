import {createAsyncThunk} from "@reduxjs/toolkit";
import {ApiResponseModel} from "../../models/model";
import {getRequest, patchRequest, postRequest} from "../../requests";
import {remoteUrl} from "../../url";
import {
    LoginRespModel,
    RegistrationReqPayloadModel,
    UpdatePreferencePayloadModel,
    UpdateUserProfilePayloadModel, UpdateUserProfileRespModel
} from "../../models/userModel";



export const registerUser = createAsyncThunk("user/register", async (payload: RegistrationReqPayloadModel, thunkAPI) => {
    const resp: ApiResponseModel = await postRequest("", remoteUrl.register, payload)
    if (resp.status) {
        return resp
    }
    // return resp
    return thunkAPI.rejectWithValue(resp)
})



export const loginUser = createAsyncThunk("user/login", async (payload: any, thunkAPI) => {
    const resp: ApiResponseModel = await postRequest("", remoteUrl.login, payload)

    if (resp.status) {

        return resp as LoginRespModel
    }
    // return resp
    return thunkAPI.rejectWithValue(resp)
})


//Get User Preference
export const getUserPreference = createAsyncThunk("user/getUserPreference", async (token: string, thunkAPI) => {
    const resp: ApiResponseModel = await getRequest(token, remoteUrl.preference)

    if (resp.status) {
        return resp.data
    }
    // return resp
    return thunkAPI.rejectWithValue(resp)

})

//Update User Preference
export const updateUserPreference = createAsyncThunk("user/updateUserPreference", async (payload:UpdatePreferencePayloadModel, thunkAPI) => {
    const resp: ApiResponseModel = await patchRequest(payload.token, remoteUrl.preference, payload.data)

    if (resp.status) {
        return resp.data
    }
    // return resp
    return thunkAPI.rejectWithValue(resp)

})

export const updateUserProfile = createAsyncThunk("user/updateUserProfile", async (payload:UpdateUserProfilePayloadModel, thunkAPI) => {
    const resp: ApiResponseModel = await patchRequest(payload.token, remoteUrl.user, payload.data)

    if (resp.status) {
        return resp as UpdateUserProfileRespModel
    }
    // return resp
    return thunkAPI.rejectWithValue(resp)

})