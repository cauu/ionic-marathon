(function() {
    'use strict';

    angular
      .module('app')
      .factory('CollectionUtils', CollectionUtils)
    ;

    function CollectionUtils() {
        var service = {
            clear: clear,
            copy: copy,
            toMap: toMap,
            toArray: toArray,
            size: size,
            isEmpty: isEmpty,
            isNotEmpty: isNotEmpty
        }

        return service;

        function clear(col) {
            if(Array.isArray(col)){
                while(col.length > 0){ col.pop(); }
            } else {
                for(var i in col){
                    delete col[i];
                }
            }
        }

        function copy(srcCol, destCol) {
            clear(destCol);
            for(var i in srcCol){
                destCol[i] = angular.copy(srcCol[i]);
            }
        }

        function toMap(arr) {
            var map = {};
            if(Array.isArray(arr)) {
                for(var i in arr) {
                    map[arr[i].id] = arr[i];
                }
            }
            return map;
        }

        function toArray(map) {
            var arr = [];
            for(var i in map) {
                arr.push(map[i]);
            }
            return arr;
        }

        function size(col) {
            if(Array.isArray(col)) {
                return col.length;
            }
            else {
                return Object.keys(col).length;
            }
        }

        function isEmpty(col) { 
            return size(col) === 0; 
        }

        function isNotEmpty(col) {
            return !isEmpty(col);
        }
    }
})();
