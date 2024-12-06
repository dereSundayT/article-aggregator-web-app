import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {getUserPreference, loginUser, registerUser, updateUserPreference} from "./userAction";
import {UserPreferenceModel, UserPreferenceProps} from "../../models/userModel";


export interface UserState {
    isUserLoading: boolean;
    user?: any;
    preferences?: UserPreferenceModel;
    error_msg: string;
    success_msg: string;
    userErrors: any
}

const initialState: UserState = {
    isUserLoading: false,
    user: null,
    preferences: UserPreferenceProps,
    error_msg: '',
    success_msg: '',
    userErrors: null

}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
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
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isUserLoading = false;
                state.success_msg = action.payload.message;
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


export const {} = userSlice.actions

export default userSlice.reducer