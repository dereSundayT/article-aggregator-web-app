import React, {useEffect} from "react";

import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../../config/redux/store";
import {fetchArticles} from "../../../config/redux/articles/articleAction";


import {fetchAdditionalData} from "../../../config/redux/app/appAction";
import {ArticleEmptyState,ArticleEmptyLoadingState,Pagination,ArticleItem} from "./components";

interface ArticleItemsProps {
    article_url: string
}

export const ArticleItems: React.FC<ArticleItemsProps> = ({article_url}) => {
    const {
        articles,
        isArticleLoading,
        error,
        paginationLinks,
        articleFilter
    } = useSelector((state: RootState) => state.articles)
    const {token} = useSelector((state: RootState) => state.user)
    const dispatch = useDispatch<AppDispatch>();

    //Handle a Pagination link clicked
    const handlePagination = (url: string) => {
        if (url) {
            dispatch(fetchArticles({url, token, params: articleFilter}))
        }
    }

    useEffect(() => {
        dispatch(fetchAdditionalData(token))
        dispatch(fetchArticles({url: article_url, token, params: null}))
    }, [])


    return (
        <>

            {
                articles.length === 0 ?<ArticleEmptyState/>
                    :
                    <>
                        <div className="mx-auto mb-10 grid  max-w-2xl grid-cols-1  gap-y-16  gap-x-8 pt-1 sm:mt-1 sm:pt-1 lg:mx-0  lg:max-w-none lg:grid-cols-3">
                            {
                                isArticleLoading
                                    ?
                                    <ArticleEmptyLoadingState totalNo={12}/>
                                    :
                                        articles.map((article) => (
                                            <ArticleItem key={article.id} article={article}/>
                                        ))
                            }
                        </div>
                        <Pagination
                            totalItems={paginationLinks?.total ?? 0}
                            from={paginationLinks?.from ?? 0}
                            to={paginationLinks?.to ?? 0}
                            links={paginationLinks?.links ?? []}
                            handlePagination={handlePagination}
                            previous={paginationLinks?.prev_page_url ?? ""}
                            next={paginationLinks?.next_page_url ?? ""}
                        />
                    </>

            }

        </>

    )
}