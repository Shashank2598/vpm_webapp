(function () {
    angular
        .module('mainApp')
        .controller('navigationController', navigationController)

    function navigationController($scope) {

        $scope.logout = function () {
            $scope.anyRequestOngoing = true;
            navigationService.logout()
                .then(function (response) {
                        $scope.anyRequestOngoing = false;
                        userDataService.removeData();
                        $state.go('login');
                    },
                    function (error) {
                        $scope.anyRequestOngoing = false;
                    }
                );
        }


    }

})();
