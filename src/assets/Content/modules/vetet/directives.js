"use strict";
// ReSharper disable InconsistentNaming
/* Directives */
angular.module("ngBus.directives", [])
    .directive("appVersion", [
        "version", function(version) {
            return function(scope, elm, attrs) {
                elm.text(version);
            };
        }
    ])
    .directive("dateselect", [

        "Config",  function (Config) {
            return {
                require: "ngModel",
                //restrict: "A",
                link: function (scope, el, attrs, ngModel) {

                    //var d = scope.$eval(attrs.ngModel);

                    //console.log(attrs.endday);
                    var lang = angular.element("html").attr("lang");
                    //console.log(lang);
                    switch (lang) {
                        case "en-US":
                            $(el).datepicker({
                                language: "en",
                                format: Config.defaultConfig.datePickerFormat,
                                autoclose: true
                            });
                            break;
                        default:
                            $(el).datepicker({
                                language: Config.defaultConfig.datePickerLang,
                                format: Config.defaultConfig.datePickerFormat,
                                autoclose: true,
                                weekStart: 1
                            });
                            break;
                    }
                  

                    var startDate = moment(attrs.mindate, "DD-MM-YYYY");
                    var endDate = moment(attrs.maxdate, "DD-MM-YYYY");
                    if (startDate != null && startDate._isAMomentObject) {
                        //console.log(startDate);
                        $(el).datepicker("setStartDate", startDate.toDate());
                    }
                    if (endDate != null && endDate._isAMomentObject) {
                        //console.log(endDate);
                        $(el).datepicker("setEndDate", endDate.toDate());
                    }

                    $(el).on("changeDate", function (e) {
                        ngModel.$setViewValue(moment(e.date).format(Config.defaultConfig.dateFormat));
                    });
                   
                    //console.log(d);

                    //var ngModelGet = $parse(attr.ngModel);
                    //console.log(scope.info);


                    //if ($(el).datepicker("getDate") == null) {
                    //    $(el).datepicker("update", moment().add(1, "days").startOf("day").toDate());
                    //}

                    el.closest(".controls").find("i").on("click", function(e) {
                        e.preventDefault();
                        $(el).datepicker("show");
                    });

                    ngModel.$parsers.push(function (data) {
                        return moment(data, Config.defaultConfig.dateFormat).startOf("day");
                    });

                    ngModel.$formatters.shift();
                    ngModel.$formatters.push(function (data) {
                        if (typeof data != "undefined" && data != null) {
                            return data.startOf("day").format(Config.defaultConfig.dateFormat);
                        }
                        return "";
                    });

                    //$(el).datepicker("update");

                    //$(el).datepicker("update", d.toDate());

                    //scope.$watch(attr.ngModel, function () {
                    //    console.log(scope[attr.ngModel]);
                    //    console.log(ngModel.$viewValue);
                    //    console.log("Changed to " + ngModelGet(scope));
                    //});

                    //ngModel.$render();

                    //ngModel.$setViewValue(moment().add(1, "days").startOf("day").format(Config.defaultConfig.dateFormat));
                }
            };
        }
    ])
    .directive("datetimeselect", [
        "Config", function(Config) {
            return {
                restrict: "A",
                require: "ngModel",
                link: function(scope, el, attr, ngModel) {
                    $(el).datetimepicker({
                        format: Config.defaultConfig.dateTimeFormat
                    });

                    el.on("dp.change", function(event) {
                        scope.$apply(function() {
                            var date = moment(event.date);
                            ngModel.$setViewValue(date.format(Config.defaultConfig.dateTimeFormat));
                        });
                    });

                    ngModel.$parsers.push(function(data) {
                        return data;
                    });
                    ngModel.$formatters.push(function(data) {
                        return moment(data).format(Config.defaultConfig.dateTimeFormat);
                    });
                }
            };
        }
    ])
    .directive("timeselect", [
        "Config", function(Config) {
            return {
                require: "ngModel",
                link: function(scope, el, attr, ngModel) {
                    $(el).timepicker({
                        showMeridian: false,
                        showInputs: false
                    });
                    //el.on('changeTime.timepicker', function (e) {
                    //    scope.$apply(function () {
                    //        ngModel.$setViewValue(e.value);
                    //    });
                    //});
                    el.next().find("i").on("click", function(e) {
                        e.preventDefault();
                        $(el).timepicker("showWidget");
                    });
                    ngModel.$parsers.push(function(data) {
                        return moment(data, Config.defaultConfig.timeFormat);
                    });
                    ngModel.$formatters.push(function(data) {
                        return data.format(Config.defaultConfig.timeFormat);
                    });
                }
            };
        }
    ])
    .directive("ngConfirmClick", [
        function() {
            return {
                restrict: "A",
                link: function(scope, element, attrs) {
                    element.bind("click", function() {
                        var message = attrs.ngConfirmMessage;
                        if (message && confirm(message)) {
                            scope.$apply(attrs.ngConfirmClick);
                        }
                    });
                }
            };
        }
    ])
    .directive("svcPagination", [
        function() {
            return {
                restrict: "E",
                link: function(scope, element, attrs) {
                    scope.$watchGroup(["totalRecord", "currentPage"], function() {
                        //var pages = [];
                        var totalPage = Math.ceil(parseInt(attrs.totalRecord) / (parseInt(attrs.limit)));

                        var numPrevPages = 5;
                        var numNextPages = 5;

                        var prevPagesArr = [];
                        for (var i = scope.currentPage - numPrevPages; i < scope.currentPage; i++) {
                            if (i >= 1) {
                                prevPagesArr.push(i);
                            }
                        }

                        var nextPagesArr = [];
                        for (var j = scope.currentPage + 1; j < scope.currentPage + numNextPages; j++) {
                            if (j <= totalPage) {
                                nextPagesArr.push(j);
                            }
                        }

                        scope.prevPagesArr = prevPagesArr;
                        scope.nextPagesArr = nextPagesArr;
                        scope.totalPage = totalPage;
                    });
                    scope.setCurrent = function(c) {
                        scope.currentPage = c;
                        scope.offset = (c - 1) * attrs.limit;
                        scope.reload();
                    };
                },
                templateUrl: "/js/modules/bus/partials/pagination.html"
            };
        }
    ]).directive("loader", ["$rootScope", function($rootScope) {
            return function($scope, element, attrs) {
                $scope.$on("loader_show", function() {
                    return element.removeClass("hidden");
                });
                return $scope.$on("loader_hide", function() {
                    return element.addClass("hidden");
                });
            };
        }
    ]).directive("vietnamPhone", function () {
        return {

            // limit usage to argument only
            restrict: "A",

            // require NgModelController, i.e. require a controller of ngModel directive
            require: "ngModel",

            // create linking function and pass in our NgModelController as a 4th argument
            link: function (scope, element, attr, ctrl) {
                function customValidator(ngModelValue) {

                    if (ngModelValue != null && ngModelValue !== "") {
                        // check if contains number
                        // if it does contain number, set our custom `numberValidator`  to valid/true
                        // otherwise set it to non-valid/false
                        if (/^0\d{9,10}$/.test(ngModelValue)) {
                            ctrl.$setValidity("futaNumber", true);
                        } else {
                            ctrl.$setValidity("futaNumber", false);
                        }
                    } else {
                        ctrl.$setValidity("futaNumber", true);
                    }
                    // we need to return our ngModelValue, to be displayed to the user(value of the input)
                    return ngModelValue;
                }

                // we need to add our customValidator function to an array of other(build-in or custom) functions
                // I have not notice any performance issues, but it would be worth investigating how much
                // effect does this have on the performance of the app
                ctrl.$parsers.push(customValidator);
            }
        };
    }).directive("snNumber", function () {
        return {

            // limit usage to argument only
            restrict: "A",

            // require NgModelController, i.e. require a controller of ngModel directive
            require: "ngModel",

            // create linking function and pass in our NgModelController as a 4th argument
            link: function (scope, element, attr, ctrl) {
                function customValidator(ngModelValue) {

                    if (ngModelValue != null && ngModelValue !== "") {
                        // check if contains number
                        // if it does contain number, set our custom `numberValidator`  to valid/true
                        // otherwise set it to non-valid/false
                        if (/^\d+$/.test(ngModelValue)) {
                            ctrl.$setValidity("futaNumber", true);
                        } else {
                            ctrl.$setValidity("futaNumber", false);
                        }
                    } else {
                        ctrl.$setValidity("futaNumber", true);
                    }
                    // we need to return our ngModelValue, to be displayed to the user(value of the input)
                    return ngModelValue;
                }

                // we need to add our customValidator function to an array of other(build-in or custom) functions
                // I have not notice any performance issues, but it would be worth investigating how much
                // effect does this have on the performance of the app
                ctrl.$parsers.push(customValidator);
            }
        };
    }).directive("internationalPhone", function () {
        return {

            // limit usage to argument only
            restrict: "A",

            // require NgModelController, i.e. require a controller of ngModel directive
            require: "ngModel",

            // create linking function and pass in our NgModelController as a 4th argument
            link: function (scope, element, attr, ctrl) {
                function customValidator(ngModelValue) {

                    if (ngModelValue != null && ngModelValue !== "") {
                        // check if contains number
                        // if it does contain number, set our custom `numberValidator`  to valid/true
                        // otherwise set it to non-valid/false
                        if (/^[0-9\-\+]+$/.test(ngModelValue)) {
                            ctrl.$setValidity("futaNumber", true);
                        } else {
                            ctrl.$setValidity("futaNumber", false);
                        }
                    } else {
                        ctrl.$setValidity("futaNumber", true);
                    }
                    // we need to return our ngModelValue, to be displayed to the user(value of the input)
                    return ngModelValue;
                }

                // we need to add our customValidator function to an array of other(build-in or custom) functions
                // I have not notice any performance issues, but it would be worth investigating how much
                // effect does this have on the performance of the app
                ctrl.$parsers.push(customValidator);
            }
        };
    });