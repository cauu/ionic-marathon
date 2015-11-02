(function() {
    'use strict';

    angular
      .module('app.home', [])
      .controller('HomeController', HomeController)
    ;

    HomeController.$inject = ['$scope', 'WarningUtils', '$window', '$ionicSideMenuDelegate'];

    function HomeController($scope, WarningUtils, $window, $ionicSideMenuDelegate) {
        $scope.showWarning = _showWarning;
        $scope.width = _width;
        $scope.openMenu = _openMenu;

        function _showWarning() {
            console.log('showWarning is called');
            WarningUtils.showWarning('test', 'info', 2000, function(){});
        }
        function _width() {
            return $window.innerWidth;
        };

        function _openMenu() {
            $ionicSideMenuDelegate.toggleRight(true);
        };

    }
})();
