import React from "react";
import {ArticleModel} from "../../../../config/models/articleModel";




interface ArticleItemProps {
    article: ArticleModel
}

export const ArticleItem: React.FC<ArticleItemProps> = ({article}) => {
    return (
        <>
            <article key={article.id} className="flex max-w-xl flex-col items-start justify-between">
                <div className="flex items-center gap-x-4 text-xs">
                    <time dateTime={article.datetime} className="text-gray-500">
                        {article.date}
                    </time>
                    <a
                        href={article.category.href}
                        className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                    >
                        {article.category.title}
                    </a>
                </div>
                <div className="group relative">
                    <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                        <a href={article.href}>
                            <span className="absolute inset-0"/>
                            {article.title}
                        </a>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">{article.description}</p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                    <img alt="" src={article.author.imageUrl} className="size-10 rounded-full bg-gray-50"/>
                    <div className="text-sm/6">
                        <p className="font-semibold text-gray-900">
                            <a href={article.author.href}>
                                <span className="absolute inset-0"/>
                                {article.author.name}
                            </a>
                        </p>
                        <p className="text-gray-600">{article.author.role}</p>
                    </div>
                </div>
            </article>
        </>
    )
}