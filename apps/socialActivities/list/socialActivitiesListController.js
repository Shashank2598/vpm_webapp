angular
    .module('mainApp')
    .controller('socialActivitiesListController',
        function socialActivitiesListController($scope, $state, socialActivitiesService) {
            
            $scope.socialActivities = [];
            socialActivitiesService.getList()
            .then(function (response) {
                $scope.anyRequestOngoing = false;
                // Only first Three activities will be shown on the homepage
                $scope.socialActivities = response.data.results;
            },
                function (error) {
                    $scope.errors = (error);
                    $scope.anyRequestOngoing = false;
                }
            );

        });