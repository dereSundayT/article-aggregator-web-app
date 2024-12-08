const baseUrl = process.env.REACT_APP_API_URL;

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
    logout: `${baseUrl}/user/logout`,

}