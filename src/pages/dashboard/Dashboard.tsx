
import React from "react";
import {DashboardLayoutWrapper} from "./DashboardLayoutWrapper";
import {ArticleFilter, ArticleItems} from "./article/components";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../config/redux/store";
import {handleArticleModal} from "../../config/redux/articles/articleSlice";



export const  Dashboard:React.FC = () =>{

    return (
        <DashboardLayoutWrapper pageTitle={"Articles Home"}>
            <ArticleFilter/>
            <ArticleItems/>
        </DashboardLayoutWrapper>
    )
}
