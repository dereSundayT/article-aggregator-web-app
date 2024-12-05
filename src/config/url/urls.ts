
const dashboardPrefix = '/dashboard';

export const urls = {
    home: '/',
    login: '/login',
    register: '/register',
    //Dashboard
    articles: `${dashboardPrefix}/articles`,
    articleDetails: `${dashboardPrefix}/articles/:id`,
    settings: `${dashboardPrefix}/settings`,

}