(function() {
    'use strict';

    angular
      .module('app.flex')
      .config(configure);

    configure.$inject = ['$stateProvider'];

    function configure($stateProvider) {
        $stateProvider
          .state('flex', {
              url: "/flex",
              templateUrl: "/flex/flex.html",
              controller: "FlexController"
          })
        ;
    }
})();
