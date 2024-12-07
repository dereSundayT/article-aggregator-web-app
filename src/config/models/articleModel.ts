
export interface PaginationProps {
    totalItems: number;
    from: number;
    to: number;
    links: LinksModel[],
    handlePagination: any
    previous?: string;
    next?: string;
}
export interface CategoryModel {
    id: number;
    name: string;
}
export interface SourceModel {
    id: number;
    name: string;
}

export interface AuthorModel {
    id: number;
    name: string;
    image_url:string;
    role: string;
}

export interface ArticleModel    {
    id: number;
    title: string;
    description: string;
    content:string;
    keywords: string;
    image_url: string;
    published_at: string;
    source_id: number;
    category_id: number;
    author_id: number;
    created_at: string;
    updated_at: string;
    source: SourceModel,
    category: CategoryModel,
    author: AuthorModel
}
//ArticleFilterModel
export const  ArticleFilterProps = {
    keywords: "",
    from_date: "",
    to_date: "",
    category_ids: [],
    source_ids: [],
    author_ids: []
}
export interface ArticleFilterModel {
    keywords: string;
    from_date: string;
    to_date: string;
    category_ids: number[];
    source_ids: number[];
    author_ids: number[];
}

export interface ArticleDetailReqPayloadModel{
    token :string,
    article_id: number
}

export interface ArticleDetailRespModel{
    status: boolean,
    message: string,
    data: ArticleModel
}

export interface ArticleReqPayloadModel{
    url:string,
    token :string,
    params: ArticleFilterModel | null
}

export interface  ArticlePaginationModel{
    current_page: number;
    first_page_url: string,
    from: number;
    last_page: number;
    last_page_url: string;
    links: LinksModel[];
    next_page_url: null,
    path: string;
    per_page: number;
    prev_page_url: null,
    to: number;
    total:number;
}
export interface ArticleApiResponseModel{
    data : ArticleModel[];
    pagination: ArticlePaginationModel;

}


export interface LinksModel {
    url: string;
    label: string;
    active: boolean;
}
