import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {getUserPreference, loginUser, registerUser, updateUserPreference} from "./userAction";
import {LoginRespModel, UserModel, UserPreferenceModel, UserPreferenceProps} from "../../models/userModel";


export interface UserState {
    isUserLoading: boolean;
    user: UserModel|null;
    preferences?: UserPreferenceModel;
    error_msg: string;
    success_msg: string;
    userErrors: any;
    token: string;

}

const initialState: UserState = {
    isUserLoading: false,
    user: null,
    preferences: UserPreferenceProps,
    error_msg: '',
    success_msg: '',
    userErrors: null,
    token:'',

}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        clearErrorMessageFromBackend: (state,action:PayloadAction<any>) => {
            const currentError = action.payload
            delete state.userErrors[currentError]
        }
    },
    extraReducers: (builder) => {
        //Register
        builder
            .addCase(registerUser.pending, (state) => {
                state.isUserLoading = true;
                state.error_msg = '';
                state.userErrors = null;
                state.success_msg = '';
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.isUserLoading = false;
                state.success_msg = action.payload.message;
            })
            .addCase(registerUser.rejected, (state, action: PayloadAction<any>) => {
                const {message, data} = action.payload;
                state.error_msg = message ?? "An error occurred";
                state.userErrors = data ?? null;
                state.success_msg = '';
                state.isUserLoading = false;
            })

        //Login
        builder
            .addCase(loginUser.pending, (state) => {
                state.isUserLoading = true;
                state.error_msg = '';
                state.userErrors = null;
                state.success_msg = '';
            })
            .addCase(loginUser.fulfilled, (state, action:PayloadAction<LoginRespModel>) => {
                state.isUserLoading = false;
                const {message,data} = action.payload
                state.success_msg = action.payload.message;
                state.user =  data.user;
                state.success_msg = message;
                state.token = data.token;
            })
            .addCase(loginUser.rejected, (state, action: PayloadAction<any>) => {
                const {message, data} = action.payload;
                state.error_msg = message ?? "An error occurred";
                state.userErrors = data ?? null;
                state.success_msg = '';
                state.isUserLoading = false;
            })



        //::::::: Get User Preference
        builder
            .addCase(getUserPreference.pending, (state) => {
                state.isUserLoading = true;
                state.error_msg = '';
                state.userErrors = null;
                state.success_msg = '';
            })
            .addCase(getUserPreference.fulfilled, (state, action) => {
                state.isUserLoading = false;
                state.preferences = action.payload;
            })
            .addCase(getUserPreference.rejected, (state) => {
                state.isUserLoading = false;
            })



        //Update User Preference
        builder
            .addCase(updateUserPreference.pending, (state) => {
                state.isUserLoading = true;
            })
            .addCase(updateUserPreference.fulfilled, (state, action) => {
                state.isUserLoading = false;
                state.preferences = action.payload;
            })
            .addCase(updateUserPreference.rejected, (state) => {
                state.isUserLoading = false;
            })


    }
})


export const {clearErrorMessageFromBackend} = userSlice.actions

export default userSlice.reducer