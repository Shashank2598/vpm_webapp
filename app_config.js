(function () {
    angular
        .module('mainApp')
        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('home', {
                    url: '/home',
                    templateUrl: './apps/home/homePage.html',
                })
            $urlRouterProvider.otherwise('home');
        })
})();
