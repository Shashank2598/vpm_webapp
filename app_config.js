(function () {
    angular
        .module('mainApp')
        .config(function ($stateProvider, $urlRouterProvider, RestangularProvider) {

            RestangularProvider.setRequestSuffix("/");
            RestangularProvider.setBaseUrl(API_BASE_URL);
            RestangularProvider.setFullResponse(true);

            $stateProvider
                .state('home', {
                    url: '/home',
                    templateUrl: './apps/home/homePage.html',
                })
                .state('login', {
                    url: '/login',
                    templateUrl: './apps/login/login.html',
                })
                .state('social-activities', {
                    url: '/social-activities',
                    templateUrl: './apps/socialActivities/list/socialActivitiesList.html',
                })
                .state('social-activity-detail', {
                    url: '/social-activity/detail/:id/',
                    templateUrl: './apps/socialActivities/detail/socialActivityDetail.html',
                    params: ['id']
                })
            $urlRouterProvider.otherwise('home');
        })
})();
