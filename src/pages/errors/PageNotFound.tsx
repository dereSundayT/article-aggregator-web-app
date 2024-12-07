import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import {Header} from "../auth/component";
import {useSelector} from "react-redux";
import {RootState} from "../../config/redux/store";
import {urls} from "../../config/url";

export const PageNotFound: React.FC = () => {
    const {token} = useSelector((state: RootState) => state.user);
    const [redirectUrl , setRedirectUrl] = useState("")


    useEffect(() => {
        if(token){
            setRedirectUrl(urls.dashboard)
        }else{
            setRedirectUrl(urls.home)
        }
    }, []);

    return (

        <div className="flex flex-col items-center justify-center h-screen text-center bg-gray-100">
            <Header/>
            <div className="w-48 h-48 mb-4">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-full h-full text-gray-500"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 9v2m0 4h.01M12 5a7 7 0 100 14 7 7 0 000-14z"
                    />
                </svg>
            </div>
            <h1 className="text-2xl font-semibold text-gray-700">Page Not Found</h1>
            <p className="text-gray-500 mb-4">Sorry, the page you are looking for does not exist.</p>
            <Link to={redirectUrl??""} className="text-indigo-600 hover:underline">
                Go back to Home
            </Link>
        </div>
    );
};