angular
    .module('mainApp')
    .controller('navigationController',
        function navigationController($scope, $state, userService, navigationService) {
            $scope.isLoggedIn = userService.isLogged;
            $scope.anyRequestOngoing = false;
            $scope.login = function () {
                $state.go('login');
            }
            $scope.logout = function () {
                $scope.anyRequestOngoing = true;
                navigationService.logout()
                    .then(function (response) {
                        $scope.anyRequestOngoing = false;
                        userService.isLogged = false;
                        localStorage.clear('APP-token');
                        alert('Successfully Logged out');
                        $state.reload();
                    },
                        function (error) {
                            $scope.anyRequestOngoing = false;
                        }
                    );
            }
        });
