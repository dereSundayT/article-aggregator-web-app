
const dashboardPrefix = '/dashboard';

export const urls = {
    home: '/',
    login: '/login',
    register: '/register',
    //Dashboard
    dashboard: `${dashboardPrefix}`,
    articles: `${dashboardPrefix}/articles`,
    articleDetails: `${dashboardPrefix}/articles/:id`,

    settings: `${dashboardPrefix}/user/settings`,
    userProfile: `${dashboardPrefix}/user/profile`,

}