import React, {useEffect} from "react";

import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../../config/redux/store";
import {fetchArticles} from "../../../config/redux/articles/articleAction";


import {fetchAdditionalData} from "../../../config/redux/app/appAction";
import {ArticleEmptyState, ArticleEmptyLoadingState, Pagination, ArticleItem} from "./components";

interface ArticleItemsProps {
    article_url: string
}

export const ArticleItems: React.FC<ArticleItemsProps> = ({article_url}) => {
    const {
        articles,
        isArticleLoading,
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
    }, [article_url, dispatch, token])


    return (
        <>
            {
                isArticleLoading
                    ?
                    <div className="article-wrapper">
                        <ArticleEmptyLoadingState totalNo={12}/>
                    </div>
                    :
                    articles.length === 0
                        ?
                        <ArticleEmptyState/>
                        :
                        <div className="article-wrapper">
                            {articles.map((article) => (
                                <ArticleItem key={article.id} article={article}/>
                            ))
                            }
                        </div>

            }

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

    )
}