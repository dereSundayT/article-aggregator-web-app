import type {PayloadAction} from '@reduxjs/toolkit'
import {createSlice} from '@reduxjs/toolkit'
import {NavigationModel} from "../../models/model";
import {urls} from "../../url";

const navs:NavigationModel[] = [
    { name: 'Dashboard', href: urls.dashboard, current: true },
    { name: 'Articles', href: urls.articles, current: false },
    { name: 'My Profile', href: urls.userProfile, current: false },
    { name: 'My Preference', href: urls.settings, current: false },
]

export interface AppState {
    navigations: NavigationModel[]

}

const initialState: AppState = {
    navigations : navs

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
})


export const { handleNavigation } = appSlice.actions
export default appSlice.reducer