import {ArticleItem} from "./ArticleItem";
import React, {useEffect} from "react";

import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../../../config/redux/store";
import {fetchArticles} from "../../../../config/redux/articles/articleAction";
import {ArticleFilter} from "./ArticleFilter";
import {Pagination} from "./Pagination";
import {fetchAdditionalData} from "../../../../config/redux/app/appAction";
import {ArticleEmptyState} from "./ArticleEmptyState";
import {remoteUrl} from "../../../../config/url";


export const ArticleItems: React.FC = () => {
    const {articles, isArticleLoading, error,paginationLinks} = useSelector((state: RootState) => state.articles)
    const {token} = useSelector((state: RootState) => state.app)
    const dispatch = useDispatch<AppDispatch>();

    const handlePagination = (url:string) => {
        if(url){
            console.log(url)
            // dispatch(fetchArticles({url:remoteUrl.articles,token, params: null}))
        }
    }

    useEffect(() => {
        dispatch(fetchAdditionalData(token))
        dispatch(fetchArticles({url:remoteUrl.articles,token, params: null}))
    }, [])


    return (
        <>


            <div
                className="mx-auto mb-10 grid  max-w-2xl grid-cols-1  gap-y-16  gap-x-8 pt-1 sm:mt-1 sm:pt-1 lg:mx-0  lg:max-w-none lg:grid-cols-3">
                {
                    isArticleLoading
                        ?
                        <ArticleEmptyState totalNo={12}/>
                        :
                        articles.map((article) => (
                            <ArticleItem key={article.id} article={article}/>
                        ))
                }
            </div>
            <Pagination
                totalItems={paginationLinks?.total??0}
                from={paginationLinks?.from??0}
                to={paginationLinks?.to??0}
                links={paginationLinks?.links??[]}
                handlePagination={handlePagination}
                previous={paginationLinks?.prev_page_url??""}
                next={paginationLinks?.next_page_url??""}
            />
        </>

    )
}