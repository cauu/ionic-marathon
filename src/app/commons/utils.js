(function() {
    'use strict';

    angular
      .module('app')
      .factory('Utils', Utils) 
    ;

    Utils.$inject = ['$sce'];

    function Utils($sce) {
        var utils = {
            randInt: randInt,
            startsWith: startsWith,
            endsWith: endsWith,
            trim: trim,
            ltrim: ltrim,
            rtrim: rtrim, 
            isEmail: isEmail,
            isUrl: isUrl,
            isTel: isTel,
            toDate: toDate,
            isDate: isDate,
            async: async,
            trustHtml: trustHtml
        };

        function randInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        function startsWith(str, prefix) {
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

        function endsWith(str, suffix) {
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

        function isEmail(str) {
            var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(str);
        }

        function isUrl(str) {
            return (/^(https?):\/\/((?:[a-z0-9.-]|%[0-9A-F]{2}){3,})(?::(\d+))?((?:\/(?:[a-z0-9-._~!$&'()*+,;=:@]|%[0-9A-F]{2})*)*)(?:\?((?:[a-z0-9-._~!$&'()*+,;=:\/?@]|%[0-9A-F]{2})*))?(?:#((?:[a-z0-9-._~!$&'()*+,;=:\/?@]|%[0-9A-F]{2})*))?$/i).test(str);
        }

        function isTel(str) {
            if(!isMainlandTel(str)) {
                return false;
            }
            else {
                return true;
            }

            function isMainlandTel(str) {
                 var _emp=/^\s*|\s*$/g;
                 text=text.replace(_emp,"");
                 var _d=/^1[3578][01379]\d{8}$/g;
                 var _l=/^1[34578][01256]\d{8}$/g;
                 var _y=/^(134[012345678]\d{7}|1[34578][012356789]\d{8})$/g;
                 if(_d.test(text)){
                     return 3;
                 } 
                 else if(_l.test(text)){
                     return 2;
                 }
                 else if(_y.test(text)){
                     return 1;
                 }

                 return 0;
            }
        }

        function toDate(date) {
            if(typeof date === 'number') { return new Date(date); }
            if(typeof date === 'string') { return new Date(date); }
            if(date instanceof Date) { return date; }
            if(date && typeof date.toDate === 'function' && date.toDate() instanceof Date){ return date.toDate(); } // moment Date

        }

        function isDate(date) {
            var d = toDate(date);
            return d instanceof Date && d.toString() !== 'Invalid Date';
        }

        function async(fn) {
            var defer = $q.defer();
            $timeout(function() {
                defer.resolve(fn());
            }, 0);
            return defer.promise;
        }

        function trustHtml(html) {
            return $sce.trustAsHtml(html);
        }
    }
})();
