(function() {
    'use strict';

    angular
      .module('app.home')
      .config(configure);

    configure.$inject = ['$stateProvider', '$urlRouterProvider'];

    function configure($stateProvider, $urlRouterProvider) {
        $stateProvider
          .state('home', {
              url: "/home",
              templateUrl: "/home/home.html",
              controller: "HomeController"
          })
        ;
    }
})();
