import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../config/redux/store";
import { fetchArticles } from "../../../../config/redux/articles/articleAction";
import { useForm } from "react-hook-form";
import { ArticleFilterModel } from "../../../../config/models/articleModel";
import { ModalWrapper } from "../../../../component";
import { handleArticleFilter, handleArticleModal } from "../../../../config/redux/articles/articleSlice";
import { remoteUrl } from "../../../../config/url";
import {ArticleFilterCtaButton} from "./ArticleFilterCtaButton";
import {GeneralInputField} from "../../../../component/form";

export const ArticleFilter = () => {
    const { categories, sources, authors } = useSelector((state: RootState) => state.app);
    const { token } = useSelector((state: RootState) => state.user);
    const { isArticleModalOpen, articleFilter } = useSelector((state: RootState) => state.articles);
    const dispatch = useDispatch<AppDispatch>();

    const { register, handleSubmit, setValue } = useForm<ArticleFilterModel>();

    const [selectedCategories, setSelectedCategories] = useState<number[]>(articleFilter.category_ids);
    const [selectedSources, setSelectedSources] = useState<number[]>(articleFilter.source_ids);
    const [selectedAuthors, setSelectedAuthors] = useState<number[]>(articleFilter.author_ids);

    useEffect(() => {
        setValue("category_ids", selectedCategories);
        setValue("source_ids", selectedSources);
        setValue("author_ids", selectedAuthors);
    }, [selectedAuthors, selectedCategories, selectedSources, setValue]);

    const handleCategoryChange = (id: number) => {
        setSelectedCategories(prev =>
            prev.includes(id) ? prev.filter(catId => catId !== id) : [...prev, id]
        );
    };

    const handleSourceChange = (id: number) => {
        setSelectedSources(prev =>
            prev.includes(id) ? prev.filter(sourceId => sourceId !== id) : [...prev, id]
        );
    };

    const handleAuthorChange = (id: number) => {
        setSelectedAuthors(prev =>
            prev.includes(id) ? prev.filter(authorId => authorId !== id) : [...prev, id]
        );
    };

    const searchArticle = (data: ArticleFilterModel) => {
        //Set Article Filter
        dispatch(handleArticleFilter(data));
        //Get Articles based on filter
        dispatch(fetchArticles({ url: remoteUrl.articles, token, params: data }));
        handleModal();
    };

    //Show and Hide Modal
    const handleModal = () => {
        dispatch(handleArticleModal());
    };

    return (
        <>
           <ArticleFilterCtaButton  handleModal={handleModal} />

            <ModalWrapper modalTitle={"Article Filter"} isOpen={isArticleModalOpen} setModal={handleModal}>
                <form className="grid grid-cols-4 gap-4 w-full h-full p-4" onSubmit={handleSubmit(searchArticle)}>

                    <div className="flex flex-col col-span-4">
                        <GeneralInputField
                            defaultValue={articleFilter.keywords}
                            register={register}
                            name={"keywords"}
                            label={"Keywords"}
                            error={""}
                            key={"keywords"}
                            inputType={"text"}
                        />
                    </div>

                    <div className="flex flex-col col-span-2">
                        <GeneralInputField
                            defaultValue={articleFilter.from_date}
                            inputType={'date'}
                            register={register}
                            name={"from_date"}
                            label={"From Date"}
                        />
                    </div>

                    <div className="flex flex-col col-span-2">
                        <GeneralInputField
                            defaultValue={articleFilter.to_date}
                            inputType={'date'}
                            register={register}
                            name={"to_date"}
                            label={"To Date"}
                        />
                    </div>

                    <div className="flex flex-col col-span-2">
                        <label className="text-sm font-semibold text-gray-900">Category</label>
                        <div className="mt-1 p-2 border border-gray-300 rounded-md">
                            {categories && categories.length > 0 && categories.map(category => (
                                <div key={category.id}>
                                    <input
                                        type="checkbox"
                                        id={`category_${category.id}`}
                                        value={category.id}
                                        checked={selectedCategories.includes(category.id)}
                                        onChange={() => handleCategoryChange(category.id)}
                                    />
                                    <label htmlFor={`category_${category.id}`} className="ml-2">{category.name}</label>
                                </div>
                            ))}
                        </div>
                    </div>


                    <div className="flex flex-col col-span-2">
                        <label className="text-sm font-semibold text-gray-900">Author</label>
                        <div className="mt-1 p-2 border border-gray-300 rounded-md">
                            {authors && authors.length > 0 && authors.map(author => (
                                <div key={author.id}>
                                    <input
                                        type="checkbox"
                                        id={`author_${author.id}`}
                                        value={author.id}
                                        checked={selectedAuthors.includes(author.id)}
                                        onChange={() => handleAuthorChange(author.id)}
                                    />
                                    <label htmlFor={`source_${author.id}`} className="ml-2">{author.name}</label>
                                </div>
                            ))}
                        </div>
                    </div>


                    <div className="flex flex-col col-span-2">
                        <label className="text-sm font-semibold text-gray-900">Source</label>
                        <div className="mt-1 p-2 border border-gray-300 rounded-md">
                            {sources && sources.length > 0 && sources.map(source => (
                                <div key={source.id}>
                                    <input
                                        type="checkbox"
                                        id={`source_${source.id}`}
                                        value={source.id}
                                        checked={selectedSources.includes(source.id)}
                                        onChange={() => handleSourceChange(source.id)}
                                    />
                                    <label htmlFor={`source_${source.id}`} className="ml-2">{source.name}</label>
                                </div>
                            ))}
                        </div>
                    </div>



                    <div className="flex flex-col col-span-4">
                        <button className="mt-4 bg-blue-500 text-white p-2 rounded-md" type="submit">Apply Filter
                        </button>
                    </div>
                </form>
            </ModalWrapper>
        </>
    );
};