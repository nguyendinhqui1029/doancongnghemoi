"use strict";

angular.module("ngBus.controllers", []);
angular.module("ngBus.services", []);
angular.module("ngBus.config", []);
angular.module("ngBus.directives", []);
angular.module("ngBus.filters", []);

angular.module("ngBus", ["ngRoute", "ngCookies", "ngAnimate", "ngSanitize", "flash", "angularModalService", "ngBus.controllers", "ngBus.services", "ngBus.config", "ngBus.directives", "ngBus.filters"])
    .config(["$routeProvider", "$compileProvider", function ($routeProvider, $compileProvider) {

        $compileProvider.debugInfoEnabled(false);

        var lang = angular.element("html").attr("lang");

        $routeProvider.when("/step1/:departureDate?/:numOfTicket?", {
            templateUrl: function (params) {
                var path;
                switch(lang) {
                    case "en-US":
                        path = "/Content/modules/vetet/partials/step1.en-US.html";
                        break;
                    default :
                        path = "/Content/modules/vetet/partials/step1.html";
                        break;
                }
                return path;
            },
            controller: "Step1Ctrl"
        });
        $routeProvider.when("/step2", {
            templateUrl: function (params) {
                var path;
                switch (lang) {
                    case "en-US":
                        path = "/Content/modules/vetet/partials/step2.en-US.html";
                        break;
                    default:
                        path = "/Content/modules/vetet/partials/step2.html";
                        break;
                }
                return path;
            },
            controller: "Step2Ctrl"
        });
        $routeProvider.when("/step3", {
            templateUrl: function (params) {
                var path;
                switch (lang) {
                    case "en-US":
                        path = "/Content/modules/vetet/partials/step3.en-US.html";
                        break;
                    default:
                        path = "/Content/modules/vetet/partials/step3.html";
                        break;
                }
                return path;
            },
            controller: "Step3Ctrl"
        });
        $routeProvider.when("/step4/:code?", {
            templateUrl: function (params) {
                var path;
                switch (lang) {
                    case "en-US":
                        path = "/Content/modules/vetet/partials/step4.en-US.html";
                        break;
                    default:
                        path = "/Content/modules/vetet/partials/step4.html";
                        break;
                }
                return path;
            },
            controller: "Step4Ctrl"
        });
        $routeProvider.otherwise({ redirectTo: "/step1" });
    }]);