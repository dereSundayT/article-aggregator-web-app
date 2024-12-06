import type {PayloadAction} from '@reduxjs/toolkit'
import {createSlice} from '@reduxjs/toolkit'
import {NavigationModel} from "../../models/model";
import {urls} from "../../url";
import {AuthorModel, CategoryModel, SourceModel} from "../../models/articleModel";
import {fetchAdditionalData} from "./appAction";

const navs:NavigationModel[] = [
    { name: 'Dashboard', href: urls.dashboard, current: true },
    { name: 'Articles', href: urls.articles, current: false },
    { name: 'My Profile', href: urls.userProfile, current: false },
    { name: 'My Preference', href: urls.settings, current: false },
]

export interface AppState {
    navigations: NavigationModel[]
    token: string
    categories: CategoryModel[]
    authors: AuthorModel[]
    sources: SourceModel[]
    isAppLoading: boolean


}

const initialState: AppState = {
    navigations : navs,
    token:"1|WnYC1yfIt9fSzMTgMhAK0K3vlSGfo2lfOhcSeDdE3f478d17",
    categories:[],
    authors:[],
    sources:[],
    isAppLoading: false

}

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        //Navigation
        handleNavigation: (state,action:PayloadAction<NavigationModel>) => {
            const navigation = action.payload
            state.navigations = state.navigations.map(navItem => {
                if (navItem.name === navigation.name) {
                    return {...navItem, current: true}
                } else {
                    return {...navItem, current: false}
                }
            })
        },
        //End Navigation

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAdditionalData.pending, (state) => {
                state.isAppLoading = true;
            })
            .addCase(fetchAdditionalData.fulfilled, (state, action) => {
                state.isAppLoading = false;
                state.categories = action.payload.categories
                state.authors = action.payload.authors
                state.sources = action.payload.sources
            })
            .addCase(fetchAdditionalData.rejected, (state) => {
                state.isAppLoading = false;
            })
        //::
    }
})


export const { handleNavigation } = appSlice.actions
export default appSlice.reducer