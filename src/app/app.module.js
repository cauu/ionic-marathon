(function() {
    'use strict';

    angular
      .module('app', [
          'ionic',

          'ngCordova',
          'LocalForageModule',
          'base64',
          'angular-md5',

          'app.services',
          'app.directives',
          'app.filters',
          'app.home'
      ])
      .config(configure)
    ;

    configure.$inject = ['$provide', '$httpProvider', '$locationProvider'];

    function configure($provide, $httpProvider, $locationProvider) {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false,
            hashPrefix: '!'
        });

    }
})();