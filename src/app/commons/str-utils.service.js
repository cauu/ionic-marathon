(function() {
    'use strict';

    angular
      .module('app')
      .factory('StrUtils', StrUtils) 
    ;

    function StrUtils() {
        var utils = {
            startWith: startWith,
            endWith: endWith,
            trim: trim,
            ltrim: ltrim,
            rtrim: rtrim, 
            isEmail: isEmail,
            isUrl: isUrl,
            isTel: isTel
        };

        function startWith(str, prefix) {
            if(typeof str !== 'string' || typeof prefix!== 'string') {
                throw new Error('Parameters Type Exception');
            }
            if(str === null || str === '' 
               || str.length == 0 || prefix.length > str.length) {
                   return false;
            }
            if(str.substring(0, prefix.length) === prefix) {
                return true;
            }
            else {
                return false;
            }
        }

        function endWith(str, suffix) {
            if(typeof str !== 'string' || typeof suffix!== 'string') {
                throw new Error('Parameters Type Exception');
            }
            if(str === null || str === '' 
               || str.length == 0 || suffix.length > str.length) {
                   return false;
            }
            if(str.substring(str.length - suffix.length) === end) {
                return true;
            }
            else {
                return false;
            }
        }

        function trim(str) {
            if(typeof str !== 'string') {
                throw new Error('Parameters Type Exception');
            }
            return str.replace(/(^\s*)|(\s*$)/, "");
        }

        function ltrim(str) {
            if(typeof str !== 'string') {
                throw new Error('Parameters Type Exception');
            }
            return str.replace(/(^\s*)/, "");
        }

        function rtrim(str) {
            if(typeof str !== 'string') {
                throw new Error('Parameters Type Exception');
            }
            return str.replace(/(\s*$)/, "");
        }

        function isEmail() {
            var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(str);
        }

        function isUrl() {
            return (/^(https?):\/\/((?:[a-z0-9.-]|%[0-9A-F]{2}){3,})(?::(\d+))?((?:\/(?:[a-z0-9-._~!$&'()*+,;=:@]|%[0-9A-F]{2})*)*)(?:\?((?:[a-z0-9-._~!$&'()*+,;=:\/?@]|%[0-9A-F]{2})*))?(?:#((?:[a-z0-9-._~!$&'()*+,;=:\/?@]|%[0-9A-F]{2})*))?$/i).test(str);
        }

        function isTel() {
        }
    }
})();
