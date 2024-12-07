import React, {useEffect} from "react";
import {DashboardNav} from "./components";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../config/redux/store";
import {Navigate} from "react-router-dom";
import {urls} from "../../config/url";
import {clearAllMessages} from "../../config/redux/user/userSlice";


interface DashboardLayoutWrapperProps {
    children: React.ReactNode
    pageTitle: string
}

export const DashboardLayoutWrapper:React.FC<DashboardLayoutWrapperProps> = ({children,pageTitle}) => {
    const {token } = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(clearAllMessages())
    }, []);


    if(!token){
        return <Navigate to={urls.login}/>
    }
    return (
        <>
            <div className="min-h-full">
                <DashboardNav/>

                <header className="bg-white shadow">
                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900">{pageTitle}</h1>
                    </div>
                </header>

                <main>
                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                        {children}
                    </div>
                </main>

            </div>
        </>
    )
}