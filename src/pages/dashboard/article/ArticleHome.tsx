import React from "react";

import {DashboardLayoutWrapper} from "../DashboardLayoutWrapper";
import {remoteUrl, urls} from "../../../config/url";
import {Link} from "react-router-dom";
import {ArticleItems} from "./ArticleItems";


export const ArticleHome: React.FC = () => {
    return (
        <DashboardLayoutWrapper pageTitle={"News Feed"}>
            <div className="bg-white">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">

                    <div className="mx-auto mb-5 max-w-2xl lg:mx-0">
                        <p className="text-pretty text-lg  tracking-tight text-gray-500">Articles base on preference</p>
                        <Link to={urls.settings} className="mt-2 text-sm underline">Customize your feeds</Link>
                    </div>
                    <ArticleItems article_url={remoteUrl.user_article_preference} />
                </div>
            </div>
        </DashboardLayoutWrapper>

    )
}
