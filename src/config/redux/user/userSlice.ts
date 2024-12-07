import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {
    getUserPreference,
    loginUser,
    logoutUser,
    registerUser,
    updateUserPreference,
    updateUserProfile
} from "./userAction";
import {
    LoginRespModel,
    UpdatePreferenceRespModel, UpdateUserProfileRespModel,
    UserModel,
    UserPreferenceModel,
    UserPreferenceProps
} from "../../models/userModel";


export interface UserState {
    isUserLoading: boolean;
    user: UserModel|null;
    preferences?: UserPreferenceModel;
    error_msg: string;
    success_msg: string;
    userErrors: any;
    token: string;
    showLogoutModal: boolean;

}

const initialState: UserState = {
    isUserLoading: false,
    user: null,
    preferences: UserPreferenceProps,
    error_msg: '',
    success_msg: '',
    userErrors: null,
    token:'',
    showLogoutModal: false

}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        clearErrorMessageFromBackend: (state,action:PayloadAction<any>) => {
            const currentError = action.payload
            delete state.userErrors[currentError]
        },
        clearAllMessages :(state) => {
            state.error_msg = '';
            state.userErrors = null;
            state.success_msg = '';
        },
        handleLogoutModal: (state) => {
            state.showLogoutModal = !state.showLogoutModal
        },
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


        //Update User Profile
        builder
            .addCase(updateUserProfile.pending, (state) => {
                state.isUserLoading = true;
                state.error_msg = '';
                state.userErrors = null;
                state.success_msg = '';
            })
            .addCase(updateUserProfile.fulfilled, (state, action:PayloadAction<UpdateUserProfileRespModel>) => {
                state.isUserLoading = false;
                state.success_msg = action.payload.message;
                state.user = action.payload.data;
            })
            .addCase(updateUserProfile.rejected, (state,action:PayloadAction<any>) => {
                state.isUserLoading = false;
                const {message, data} = action.payload;
                state.error_msg = message ?? "An error occurred";
                state.userErrors = data ?? null;
                state.success_msg = '';
            })

        //*********::::::: Get User Preference :::::::::::::::::::::::::::::::::::*******************
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
            .addCase(getUserPreference.rejected, (state,action:PayloadAction<any>) => {
                state.isUserLoading = false;
                const {message, data} = action.payload;
                state.error_msg = message ?? "An error occurred";
                state.userErrors = data ?? null;
                state.success_msg = '';
            })



        //*********:::::::Update User Preference :::::::::::::::::::::::::::::::::::*******************
        builder
            .addCase(updateUserPreference.pending, (state) => {
                state.isUserLoading = true;
                state.error_msg = '';
                state.userErrors = null;
                state.success_msg = '';
            })
            .addCase(updateUserPreference.fulfilled, (state, action:PayloadAction<UpdatePreferenceRespModel>) => {
                state.isUserLoading = false;
                const {message,data} = action.payload
                state.success_msg = message;
                state.preferences = data;
            })
            .addCase(updateUserPreference.rejected, (state,action:PayloadAction<any>) => {
                state.isUserLoading = false;
                const {message, data} = action.payload;
                state.error_msg = message ?? "An error occurred";
                state.userErrors = data ?? null;
                state.success_msg = '';
            })

        //logoutUser
        builder.addCase(logoutUser.pending, (state) => {
            state.isUserLoading = true;
            state.error_msg = '';
            state.userErrors = null;
            state.success_msg = '';
        })
        .addCase(logoutUser.fulfilled, (state, action) => {
            return initialState
        })
        .addCase(logoutUser.rejected, (state, action: PayloadAction<any>) => {
            const {message, data} = action.payload;
            state.error_msg = message ?? "An error occurred";
            state.userErrors = data ?? null;
            state.success_msg = '';
            state.isUserLoading = false;
        })


    }
})


export const {clearErrorMessageFromBackend,clearAllMessages,handleLogoutModal} = userSlice.actions

export default userSlice.reducer