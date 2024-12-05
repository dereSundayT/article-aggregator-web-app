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
    source: {
        id: number;
        name: string;
    },
    category: {
        id: number;
        name: string;
    },
    author: {
        id: number;
        name: string;
        image_url:string;
        role: string;
    }
}



export interface ArticleApiResponseModel{
    data : ArticleModel[];
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


interface LinksModel {
    url: string;
    label: string;
    active: boolean;
}
