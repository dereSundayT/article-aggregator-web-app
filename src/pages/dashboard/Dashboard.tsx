
import React from "react";
import {DashboardLayoutWrapper} from "./DashboardLayoutWrapper";
import {ArticleFilter, ArticleItems} from "./article/components";



export const  Dashboard:React.FC = () =>{

    return (
        <DashboardLayoutWrapper pageTitle={"Articles Home"}>
            <>
                <ArticleFilter/>
                <ArticleItems/>
            </>

        </DashboardLayoutWrapper>
    )
}
