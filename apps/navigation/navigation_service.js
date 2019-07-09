angular
    .module('mainApp')
    .service('navigationService', function navigationService(Restangular) {
        this.logout = function () {
            var restObject = Restangular.one(LOGOUT_SUFFIX);
            return restObject.post("");
        }
    });
