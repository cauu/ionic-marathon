(function() {
    'use strict';

    angular
      .module('app', [
          'ionic',

          'ngCordova',
          'base64',
          'angular-md5'
      ])
      .config(configure)
    ;

    configure.$inject = ['$urlRouterProvider', '$provide', '$httpProvider', '$locationProvider'];

    function configure($urlRouterProvider, $provide, $httpProvider) {
        $urlRouterProvider.otherwise('/');

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false,
            hashPrefix: '!'
        });

    }
})();
