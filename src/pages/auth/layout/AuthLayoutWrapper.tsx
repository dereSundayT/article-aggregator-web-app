import React from "react";
import {Header} from "../component";
import {Link} from "react-router-dom";


interface AuthLayoutWrapperProps {
    children: React.ReactNode;
    pageTitle: string;
    callToActionText: string;
    actionLink: string;
    actionLinkText: string;
}


export const AuthLayoutWrapper: React.FC<AuthLayoutWrapperProps> = ({children,pageTitle,callToActionText,actionLinkText,actionLink}) => {

    return (
        <div className="bg-white">
            <Header/>
            <div className="relative isolate px-6 lg:px-8">

                <div aria-hidden="true"
                     className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
                    <div style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                         className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    />
                </div>

                <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-24">
                    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                            <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                                {pageTitle}
                            </h2>
                        </div>

                        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                            {children}
                            <p className="mt-10 text-center text-sm/6 text-gray-500">
                                {callToActionText}
                                {' '}
                                <Link to={actionLink} className="font-semibold text-indigo-600 hover:text-indigo-500">
                                    {actionLinkText}
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}