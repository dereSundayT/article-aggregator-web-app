import React from "react";
import {DashboardNav} from "./components";




interface DashboardLayoutWrapperProps {
    children: React.ReactNode
    pageTitle: string
}



export const DashboardLayoutWrapper:React.FC<DashboardLayoutWrapperProps> = ({children,pageTitle}) => {
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