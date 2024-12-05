import React from "react";
import {ArticleItems} from "./components";
import {DashboardLayoutWrapper} from "../DashboardLayoutWrapper";
import {articles} from "../../../config/db";


export const ArticleHome: React.FC = () => {
    return (
        <DashboardLayoutWrapper pageTitle={"Articles"}>
            <div className="bg-white">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">

                    {/*Articles*/}
                    <ArticleItems />
                </div>
            </div>
        </DashboardLayoutWrapper>

    )
}
