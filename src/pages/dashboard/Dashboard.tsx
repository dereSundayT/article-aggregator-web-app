
import React from "react";
import {DashboardLayoutWrapper} from "./DashboardLayoutWrapper";

import {remoteUrl} from "../../config/url";
import {ArticleFilter} from "./article/components";
import {ArticleItems} from "./article/ArticleItems";




export const  Dashboard:React.FC = () =>{

    return (
        <DashboardLayoutWrapper pageTitle={"Articles Home"}>
            <ArticleFilter/>
            <ArticleItems article_url={remoteUrl.articles} />
        </DashboardLayoutWrapper>
    )
}
