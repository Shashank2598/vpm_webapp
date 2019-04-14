(function () {

    angular
        .module('mainApp')
        .directive('navigation', navigation)

    function navigation() {

        return {
            templateUrl: './apps/navigation/navigation.html',
        };
    }

})();
