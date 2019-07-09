angular.module('mainApp')
  .controller('homeController', function ($scope, socialActivitiesService) {
    $scope.myInterval = 1000;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    $scope.socialActivities = [];
    var slides = $scope.slides = [];
    var currIndex = 0;

    $scope.addSlide = function () {
      var newWidth = 600 + slides.length + 1;
      slides.push({
        image: '//unsplash.it/' + newWidth + '/300',
        text: ['Nice image', 'Awesome photograph', 'That is so cool', 'I love that'][slides.length % 4],
        id: currIndex++
      });
    };

    for (var i = 0; i < 4; i++) {
      $scope.addSlide();
    }

    socialActivitiesService.getList()
      .then(function (response) {
        $scope.anyRequestOngoing = false;
        // Only first Three activities will be shown on the homepage
        $scope.socialActivities = response.data.results.slice(0, 3);
      },
        function (error) {
          $scope.errors = (error);
          $scope.anyRequestOngoing = false;
        }
      );
    });
