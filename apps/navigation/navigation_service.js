(function () {

    angular
        .module('mainApp')
        .service('navigationService', navigationService)

    function navigationService(Restangular) {
        // Make API call to logout service 
        this.logout = function () {
            var restObject = Restangular.one(AUTH_SUFFIX).one(LOGOUT_SUFFIX);
            return restObject.post("");
        }
    }
})();
