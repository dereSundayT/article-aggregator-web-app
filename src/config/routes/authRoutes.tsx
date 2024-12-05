import {urls} from "../url";
import {Login, Register} from "../../pages/auth";
import {PageNotFound} from "../../pages/errors";


export const authRoutes = [
    {
        url: "*",
        component: <PageNotFound/>
    },
    {
        url: urls.home,
        component: <Login/>
    },
    {
        url: urls.login,
        component: <Login/>
    },
    {
        url: urls.register,
        component: <Register/>
    }
]