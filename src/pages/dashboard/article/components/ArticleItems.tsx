import {ArticleItem} from "./ArticleItem";
import React, {useEffect} from "react";

import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../../../config/redux/store";
import {fetchArticles} from "../../../../config/redux/articles/articleAction";





export const ArticleItems: React.FC= () => {
    const {articles,isArticleLoading,error} = useSelector((state: RootState) => state.articles)
    const dispatch = useDispatch<AppDispatch>();

    useEffect(()=>{
        dispatch(fetchArticles())
    },[])


    return (
        <>
            <div
                className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                {articles.map((article) => (
                    <ArticleItem key={article.id} article={article}/>
                ))}
            </div>
        </>

    )
}