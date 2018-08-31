"use strict";

/* Filters */
// ReSharper disable InconsistentNaming
angular.module("ngBus.filters", [])
    .filter("interpolate", ["version", function (version) {
    return function (text) {
        return String(text).replace(/\%VERSION\%/mg, version);
    };
    }])
    .filter("svcDate", [

    "Config", function (Config) {
        return function (text) {
            //console.log(text);
            if (text != null && text !== "") {
                return moment(text).format(Config.defaultConfig.dateFormat);
            }
            return "";
        };
    }
    ])
     .filter("svcTime", [
    "Config", function (Config) {
        return function (text) {
            if (text != null && text !== "") {
                return moment(text).format(Config.defaultConfig.timeFormat);
            }
            return "";
        };
    }
     ])
    .filter("svcDateTime", [
    "Config", function (Config) {
        return function (text) {
            if (text != null && text !== "") {
                return moment(text).format(Config.defaultConfig.dateTimeFormat);
            }
            return "";
        };
    }
    ])
    .filter("svcMoney", function () {
        return function (text) {
            var v = parseInt(text);
            if (isNaN(v)) {
                return 0;
            } else {
                return v.formatMoney(0, ",", ".") + "<sup>&#8363;</sup>";
            }
        };
    }).filter("svcDistance", function () {
        return function (text) {
            var v = parseInt(text);
            if (isNaN(v) || v === 0) {
                return "...";
            } else {
                return Math.ceil(v/1000);
            }
        };
    }).filter("svcDuration", function () {
        return function (text) {
            var v = parseInt(text);
            if (isNaN(v) || v === 0) {
                return "...";
            } else {
                var dr = moment.duration(v, "seconds");
                return dr.humanize();
            }
        };
    }).filter("svcIsUpdating", function () {
        return function (text) {
            return angular.isDefined(text);
        };
    });
//app.filter('svcOption', [
//    'svcCache', function (svcCache) {
//        return function (text, fieldName, optionUrl) {
//            var result = "";
//            var cacheKey = 'options_' + fieldName + '_' + optionUrl;
//            var optcache = svcCache.get(cacheKey);
//            //console.log(cacheKey, optcache);
//            if (typeof (optcache) != "undefined") {
//                for (var k = 0; k < optcache.length; k++) {
//                    if (optcache[k].Value == text) {
//                        result = optcache[k].DisplayText;
//                    }
//                }
//            }
//            return result;
//        };
//    }
//]);