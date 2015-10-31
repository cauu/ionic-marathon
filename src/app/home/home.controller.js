(function() {
    'use strict';

    angular
      .module('app.home', [])
      .controller('HomeController', HomeController)
    ;

    HomeController.$inject = ['$scope', 'WarningUtils'];

    function HomeController($scope, WarningUtils) {
        $scope.showWarning = _showWarning;


        function _showWarning() {
            console.log('showWarning is called');
            WarningUtils.showWarning('test', 'info', 2000, function(){});
        }
    }
})();
