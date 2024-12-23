import React from "react";
import {ArticleModel} from "../../../../config/models/articleModel";
import {Link, useNavigate} from "react-router-dom";
import {urls} from "../../../../config/url";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../../../config/redux/store";
import {handleArticleDetails} from "../../../../config/redux/articles/articleSlice";




interface ArticleItemProps {
    article: ArticleModel
}

export const ArticleItem: React.FC<ArticleItemProps> = ({article}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch<AppDispatch>();

    //
    const handleArticleDetailNavigation = () => {
        dispatch(handleArticleDetails(article))
        return navigate(`${urls.article}/${article.id}`)
    }

    return (
        <>
            <article onClick={()=>handleArticleDetailNavigation()} key={article.id} className="  border border-gray-100 px-5 py-2 flex max-w-xl flex-col items-start justify-between">
                <div className="flex items-center gap-x-4 text-xs">
                    <time dateTime={article.published_at} className="text-gray-500">
                        {article.published_at}
                    </time>
                    <span
                        className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                    >
                        {article.source.name}
                    </span>
                    <span

                        className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                    >
                        {article.category.name}
                    </span>


                </div>
                <div className="group relative">
                    <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                        <Link to={""}>
                            <span className="absolute inset-0"/>
                            {article.title}
                        </Link>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">{article.description}</p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                    <img alt="" src={article.author.image_url} className="size-10 rounded-full bg-gray-50"/>
                    <div className="text-sm/6">
                        <p className="font-semibold text-gray-900">
                            <Link to={""}>
                                <span className="absolute inset-0"/>
                                {article.author.name}
                            </Link>
                        </p>
                        <p className="text-gray-600">{article.author.role}</p>
                    </div>
                </div>
            </article>
        </>
    )
}