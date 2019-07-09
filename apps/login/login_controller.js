angular
    .module('mainApp')
    .controller('login', function login($scope, loginService, $state, userService) {

        $scope.passwordNotKnown = false; // Used to handle forgot password case
        $scope.anyRequestOngoing = false;
        $scope.passwordVisible = false;

        $scope.hide = true;
        $scope.show = false;
        $scope.passwordType = 'password';

        $scope.submit = function () {

            // Alerts user if multiple login requests are submitted simultaneously
            $scope.anyRequestOngoing = true;
            var data = {
                "email": $scope.email,
                "password": $scope.password
            };

            // Checks if user submit form for login or for requesting set password link

            if ($scope.passwordNotKnown) {
                var data = {
                    "email": $scope.email,
                };

                loginService.forgotPassword(data)
                    .then(function (response) {
                        //sends set password link
                        $scope.anyRequestOngoing = false;
                        alert("Activation Link sent. Please Check your email.");
                        $state.reload();
                    },
                        function (error) {
                            $scope.errors = (error);
                            $scope.anyRequestOngoing = false;
                        }
                    );
            } else {

                $scope.anyRequestOngoing = true;

                loginService.logUser(data)

                    .then(function (response) {
                        // logs in a user and stores its token in cookies
                        $scope.anyRequestOngoing = false;
                        localStorage.setItem('APP-token', response.data.token);
                        userService.isLogged = true;
                        $state.go('home');
                    },
                        function (error) {
                            $scope.errors = error.data.non_field_errors;
                            $scope.anyRequestOngoing = false;
                        }
                    );
            }
        };

        //function called when show password image is clicked

        $scope.showPassword = function () {

            if ($scope.hideButton) {
                $scope.passwordType = 'text';
                $scope.hide = false;
                $scope.show = true;
            } else {
                $scope.passwordType = 'password';
                $scope.hide = true;
                $scope.show = false;
            }
        }

        // function called when forgot password is clicked
        $scope.forgotPassword = function () {
            $scope.errors = null;

            // set a variable to handle above two cases
            $scope.passwordNotKnown = true;
        }


    });
