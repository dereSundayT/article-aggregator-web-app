import {urls} from "../url";
import {ArticleDetails, ArticleHome, Dashboard, UserPreferenceSettings} from "../../pages/dashboard";

export const dashboardRoutes = [

    {
        url: urls.dashboard,
        component: <Dashboard/>
    },

    {
        url: urls.articles,
        component: <ArticleHome/>
    },

    {
        url: urls.articleDetails,
        component: <ArticleDetails/>
    },
    //Settings Page
    {
        url: urls.settings,
        component: <UserPreferenceSettings/>
    },

]