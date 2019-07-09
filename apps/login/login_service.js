angular
    .module('mainApp')
    .service('loginService', function loginService(Restangular) {
        // Make API call to login service 
        this.logUser = function logUser(data) {
            var restObject = Restangular.one(LOGIN_SUFFIX);
            return restObject.post("", data);
        }
        this.forgotPassword = function forgotPassword(data) {
            var restObject = Restangular.one(AUTH_SUFFIX).one(FORGOT_PASSWORD_REQUEST_SUFFIX);
            return restObject.post("", data);
        }
    });
