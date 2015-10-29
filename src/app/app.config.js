(function() {
    'use strict';

    angular
      .module('app')
      .config(configure);

    configure.$inject = ['$stateProvider', '$urlRouterProvider'];

    function configure($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');

        // $stateProvider
        //   .state('home', {
        //       url: "/home",
        //       templateUrl: "views/home.html"
        //   })
        // ;
    }
})();
