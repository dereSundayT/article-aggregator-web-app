import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../../config/redux/store";
import { DashboardLayoutWrapper } from "../DashboardLayoutWrapper";
import {fetchArticleDetails} from "../../../config/redux/articles/articleAction";
import {useParams} from "react-router-dom";
import {ArticleEmptyLoadingState, ArticleEmptyState} from "./components";

export const ArticleDetails: React.FC = () => {
    const { article ,isArticleLoading} = useSelector((state: RootState) => state.articles);
    const { token } = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch<AppDispatch>();
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        if (id) {
            dispatch(fetchArticleDetails({ token, article_id: parseInt(id) }));
        }
    }, [token,article, id,dispatch]);



    return (
        <DashboardLayoutWrapper pageTitle={article?.title ?? ""}>
            {
                isArticleLoading ?
                    <ArticleEmptyLoadingState totalNo={1}/>

                    :
                !article ?
                    <ArticleEmptyState/>
                    :
                    <div className="max-w-4xl mx-auto p-4">
                        <div className="mb-4">
                            <h1 className="text-3xl font-bold"></h1>
                            <p className="text-gray-500">{article.published_at}</p>
                        </div>

                        <div className="mb-4">
                            <h2 className="text-xl font-semibold">Author</h2>
                            <div className="flex items-center mt-2">
                                <img src={article?.author?.image_url} alt={article?.author?.name}
                                     className="w-10 h-10 rounded-full mr-2"/>
                                <div>
                                    <p className="font-semibold">{article?.author?.name}</p>
                                    <p className="text-gray-600">{article?.author?.role}</p>
                                </div>
                            </div>
                        </div>
                        <div className="mb-4">
                            <h2 className="text-xl font-semibold">Category</h2>
                            <p className="text-gray-600">{article?.category?.name}</p>
                        </div>
                        <div className="mb-4">
                            <img src={article.image_url} alt={article?.title} className="w-full h-auto rounded"/>
                        </div>


                        <div className="mb-4">
                            <h2 className="text-xl font-semibold">Description</h2>
                            <p className="text-gray-700">{article.description}</p>
                        </div>
                        <div className="mb-4">
                            <h2 className="text-xl font-semibold">Content</h2>
                            <p className="text-gray-700">{article.content}</p>
                        </div>
                    </div>
            }

        </DashboardLayoutWrapper>
    );
};