const baseUrl = 'http://127.0.0.1:8000/api/v1';

export const remoteUrl ={

    login : `${baseUrl}/auth/login`,
    register : `${baseUrl}/auth/register`,

    articles : `${baseUrl}/articles`,
    user_article_preference : `${baseUrl}/articles/user-preference`,
    //
    categories: `${baseUrl}/categories`,
    sources: `${baseUrl}/sources`,
    authors: `${baseUrl}/authors`,
    //User
    preference: `${baseUrl}/user/preference`,
    user: `${baseUrl}/user`,

}