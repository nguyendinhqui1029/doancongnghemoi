"use strict";

/* Controllers */
// ReSharper disable InconsistentNaming
angular.module("ngBus.controllers", [])
    .run([
        "$rootScope", "$templateCache", "$location", function ($rootScope, $templateCache, $location) {
            $location.hash("busApp");
            $rootScope.$on("$viewContentLoaded", function() {
                dataLayer.push({
                    'event': "VirtualPageView",
                    'virtualPageURL': $location.url(),
                    'virtualPageTitle': "Step 1"
                });
            });
            $rootScope.$on("scope.stored", function(event, data) {
                console.log("scope.stored", data);
            });
            $rootScope.$broadcast("loader_hide");
        }
    ])
    .factory("Scopes", ["$rootScope", function($rootScope) {
        var mem = {
            locale: angular.element("html").attr("lang")
        };
        return {
            store: function(key, value) {
                $rootScope.$emit("scope.stored", key);
                mem[key] = value;
            },
            get: function(key) {
                return mem[key];
            }
        };
    }])
    .controller("ModalCtrl",[
        "$scope", "Scopes", "close",

        function ($scope, Scopes, close) {

            //Get seats from Scopes
            //$scope.seats = Scopes.get("seats");

            $scope.close = function (result) {
                close(result, 500); // close, but give 500ms for bootstrap to animate
            };
        }
    ])
    .controller("Step1Ctrl", [
        "$scope", "$routeParams", "Config", "Factory", "$location", "Scopes", "$rootScope", "Flash",
        function ($scope, $routeParams, Config, Factory, $location, Scopes, $rootScope, Flash) {
            $scope.settings = settings;
            $rootScope.$broadcast("loader_hide");

            //Declare variables
            $scope.info = {
                fromStop: null,
                toStop: null,
                departureDate: null,
                numOfTicket: 1
            };

            $scope.fromPoints = [];
            $scope.toPoints = [];

            var startDate = moment(settings["ValidStartDate"], Config.defaultConfig.isoDateTimeFormat);
            //console.log(startDate);
            //console.log(moment().diff(startDate, "day"));
            if (moment().diff(startDate,"day") >= 0) {
                startDate = moment().add(settings["ValidStartDateOffset"], "day");
            }

            $scope.startDate = startDate;
            $scope.endDate = moment(settings["ValidEndDate"], Config.defaultConfig.isoDateTimeFormat);

            //Initial
            $scope.initData = function () {
                $scope.info = $.extend({}, $scope.info, Scopes.get("step1"));

                //if (typeof Scopes.get("step1") == "undefined") {
                //    $rootScope.$broadcast("loader_hide");
                //    $location.path("/step1");
                //}

                //$scope.step1Info = Scopes.get("step1");

                var fromPoints = [];
                var codeAffected = [];
                
                for (var i = 0; i < settings.RouteCode.length; i++) {
                    if (codeAffected.indexOf(settings.RouteCode[i].OriginCode) === -1) {
                        var p = {
                            v: settings.RouteCode[i].OriginCode,
                            t: settings.RouteCode[i].OriginName
                        };
                        fromPoints.push(p);
                        codeAffected.push(settings.RouteCode[i].OriginCode);
                    }
                }

                fromPoints.sort(function (a, b) {
                    if (a.t < b.t)
                        return -1;
                    if (a.t > b.t)
                        return 1;
                    return 0;
                });

                $scope.fromPoints = fromPoints;
                $scope.info.fromStop = fromPoints[0];
            };

            //Navigation
            $scope.next = function (formValid) {
                if (formValid) {
                    Scopes.store("step1", angular.copy($scope.info));
                    $location.path("/step2");
                }
            };

            $scope.showError = function (errors) {
                //console.log(errors)

                var html = "";
                $.each(errors, function(i, v) {
                    switch(i) {
                        case "required":
                            for (var j = 0; j < v.length; j++) {
                                switch (v[j].$name) {
                                    case "departureDate":
                                        html += Config.errorMessages[Scopes.get("locale")]["departureDate"] + "<br />";// "Vui lòng chọn ngày khởi hành<br/>";
                                        break;
                                }
                            }
                            break;
                    }
                });
                Flash.create("danger", html, "custom-alert");
            };
            $scope.$watch("info.fromStop", function (newValue, oldValue, scope) {
                //console.log(newValue, oldValue);
                //if (newValue !== oldValue) {
                    var vl = newValue.v;
                    var toPoints = [];
                    var codeAffected = [];
                    for (var i = 0; i < settings.RouteCode.length; i++) {
                        if (settings.RouteCode[i].OriginCode === vl) {
                            if (codeAffected.indexOf(settings.RouteCode[i].DestCode) === -1) {
                                toPoints.push({
                                    v: settings.RouteCode[i].DestCode,
                                    t: settings.RouteCode[i].DestName
                                });
                                codeAffected.push(settings.RouteCode[i].DestCode);
                            }
                        }
                    }
                    toPoints.sort(function (a, b) {
                        if (a.t < b.t)
                            return -1;
                        if (a.t > b.t)
                            return 1;
                        return 0;
                    });
                    scope.toPoints = toPoints;
                    scope.info.toStop = toPoints[0];
                //}
            });
            $scope.initData();
        }
    ])
    .controller("Step2Ctrl", [
        "$scope", "$routeParams", "Config", "Factory", "$location", "Scopes", "$rootScope", "Flash", "ModalService",
        function ($scope, $routeParams, Config, Factory, $location, Scopes, $rootScope, Flash, ModalService) {
            $scope.settings = settings;
            //Declare variables
            $scope.info = {
                CustName: "",
                CustEmail: "",
                CustSN: "",
                CustMobile: "",
                CustMobile2: "",
                AcceptCondition: 0,
                CustCountry: null,
                CustCity: "",
                CustAddress: "",
                CustState: null,
                CustCode: "",
                CustRouteId: 0,
                Passengers: []
            };

            $scope.startDate = moment().subtract(18, "years");
            $scope.endDate = moment();

            //Initial
            $scope.initData = function() {
                $scope.info = $.extend({}, $scope.info, Scopes.get("step2"));
                //Check first step complete
                if (typeof Scopes.get("step1") == "undefined") {
                    $rootScope.$broadcast("loader_hide");
                    $location.path("/step1");
                }
                $scope.step1Info = Scopes.get("step1");

                $scope.info.Passengers = [];
                for (var i = 0; i < $scope.step1Info.numOfTicket; i++) {
                    $scope.info.Passengers.push({
                        CustName: "",
                        CustMobile: "",
                        CustSN: "",
                        CustType: {
                            Value: 1
                        }
                    });
                }

                $scope.options = {};
                $scope.options["CustType"] = [
                    {
                        DisplayText: "Người lớn",
                        Value: 1
                    }, {
                        DisplayText: "Trẻ em",
                        Value: 2
                    }
                ];
            };

           

            //Navigation
            $scope.next = function (formValid) {
                if (formValid) {
                    //check Code is Valid
                    $rootScope.$broadcast("loader_show");

                    //var dup = [];
                    var cmnd = $.map($scope.info.Passengers, function(p) {
                        return p.CustSN;
                    });
                    //console.log(cmnd);
                    var uniqueCMND = cmnd.unique();
                    if (cmnd.length === uniqueCMND.length) {
                        //Get route
                        //var rIds = [];
                        //for (var i = 0; i < routes.length; i++) {
                        //    if (routes[i].OriginCode === $scope.step1Info.fromStop.v && routes[i].DestCode === $scope.step1Info.toStop.v) {
                        //        rIds.push(routes[i].Id);
                        //    }
                        //}

                        //Factory.isValidCustCode($scope.info.CustCode, $scope.info.CustMobile, rIds).then(function(data) {
                        //    $rootScope.$broadcast("loader_hide");
                        //    if (data.Status === 1) {
                        //        $scope.info.CustRouteId = data.Data;
                        //        Scopes.store("step2", angular.copy($scope.info));
                        //        $location.path("/step3");

                        //    } else {
                        //        $scope.showError({ "wrong": "Mã KHTT không hợp lệ" });
                        //    }
                        //});

                        Scopes.store("step2", angular.copy($scope.info));
                        $location.path("/step3");

                    } else {
                        $rootScope.$broadcast("loader_hide");
                        $scope.showError({ "wrong": "Số CMND hoặc Ngày tháng năm sinh trẻ em của từng hành khách phải khác nhau" });
                    }
                }
                //$scope.error = true;
            };
            $scope.prev = function () {
                $rootScope.$broadcast("loader_hide");
                $location.path("/step1");
            };
            $scope.showError = function (errors) {
                //console.log(errors);
                var html = "";
                $.each(errors, function (i, v) {
                    var j;
                    switch (i) {
                        case "required":
                            for (j = 0; j < v.length; j++) {
                                var re = /(\w+)(\d+)/i;
                                var name = v[j].$name;
                                var found = name.match(re);
                                //console.log("FOUND:", found);
                                if (found != null) {
                                    if (found[1] === "CustSN") {
                                        html += Config.errorMessages[Scopes.get("locale")][found[1]] + " hoặc Ngày tháng năm sinh trẻ em {0}<br />".format(found[2] * 1 + 1);
                                    } else {
                                        html += Config.errorMessages[Scopes.get("locale")][found[1]] + " {0}<br />".format(found[2] * 1 + 1);
                                    }
                                } else {
                                    html += Config.errorMessages[Scopes.get("locale")][v[j].$name] + "<br />";
                                }
                            }
                            break;
                        case "futaNumber":
                            for (j = 0; j < v.length; j++) {
                                html += Config.futaNumberMessage[Scopes.get("locale")][v[j].$name] + "<br />";
                            }
                        case "email":
                            for (j = 0; j < v.length; j++) {
                                html += Config.emailMessage[Scopes.get("locale")][v[j].$name] + "<br />";
                            }
                            break;
                        default:
                            html += v + "<br />";
                            break;
                    }
                });
                Flash.create("danger", html, "custom-alert");
            };
            $scope.showPolicies = function () {
                var path;
                switch (Scopes.get("locale")) {
                    case "en-US":
                        path = "/Content/modules/vetet/partials/policies.en-US.html";
                        break;
                    default:
                        path = "/Content/modules/vetet/partials/policies.html";
                        break;
                }
                ModalService.showModal({
                    templateUrl: path, 
                    controller: "ModalCtrl"
                }).then(function (modal) {
                    // The modal object has the element built, if this is a bootstrap modal
                    // you can call 'modal' to show it, if it's a custom modal just show or hide
                    // it as you need to.
                    modal.element.modal();
                });
            };

            //$scope.showChildrenBirthDay = function (idx) {
            //    var k = parseInt($scope.info.Passengers[idx].CustType);
            //    switch(k) {
            //        case 1:
            //            break;
            //        case 2:
            //            break;
            //    }
            //};

            //Get information
            //$scope.getCountries = function() {
            //    $scope.countries = countries;
            //    $scope.info.CustCountry = countries[241];
            //};

            //$scope.getLoggedUser = function() {
            //    //$rootScope.$broadcast("loader_show");
            //    Factory.getLoggedUser().then(function (data) {
            //        //console.log(data);
            //        if (data != null) {
            //            $scope.info.CustName = data["CustomerName"];
            //            $scope.info.CustEmail = data["CustomerEmail"];
            //            $scope.info.CustSN = data["CustomerSN"];
            //            $scope.info.CustMobile = data["CustomerPhone"];
            //            $scope.info.CustAddress = data["CustomerAddress"];
            //        }
            //        //$rootScope.$broadcast("loader_hide");
            //    });
            //};

            //Binding
            $scope.$watch("info.CustName", function(newValue, oldValue, scope) {
                if (newValue !== oldValue) {
                    scope.info.Passengers[0].CustName = newValue;
                }
            });
            $scope.$watch("info.CustSN", function (newValue, oldValue, scope) {
                if (newValue !== oldValue) {
                    scope.info.Passengers[0].CustSN = newValue;
                }
            });

            //$scope.isInRequiredCustCode = function () {
            //    //return parseInt(settings["IsInKHTT"]) > 0;
            //    var cr = moment().startOf("day").add(1, "days");
            //    var sd = moment(settings["CustCodeValidStartDate"], Config.defaultConfig.isoDateTimeFormat);
            //    var ed = moment(settings["CustCodeValidEndDate"], Config.defaultConfig.isoDateTimeFormat);
            //    return cr.diff(sd, "days") >= 0 && ed.diff(cr, "days") >= 0;
            //};
            //$scope.isValidCustCode = function(code, phone) {
            //    try {
            //        $rootScope.$broadcast("loader_show");
            //        Factory.isValidCustCode(code, phone).then(function (data) {
            //            $rootScope.$broadcast("loader_hide");
            //        });
            //    } catch (err) {
            //        console.log("Error: " + err);
            //    }
            //};

            //$scope.verifyDuplicateSN = function (idx) {
            //    for (var i = 0; i < $scope.info.Passengers.length; i++) {
            //        if ($scope.info.Passengers[i].CustSN == $scope.info.Passengers[idx].CustSN) {
                        
            //        }
            //    }
            //    //var i, isDuplicate;
            //    //var sorted = $scope.info.Passengers.concat().sort(function (a, b) {
            //    //    if (a.CustSN > b.CustSN) return 1;
            //    //    if (a.CustSN < b.CustSN) return -1;
            //    //    return 0;
            //    //});
            //    //console.log(sorted);
            //    //for (i = 0; i < $scope.info.Passengers.length; i++) {
            //    //    isDuplicate = ((sorted[i - 1] && sorted[i - 1].CustSN === sorted[i].CustSN) || (sorted[i + 1] && sorted[i + 1].CustSN === sorted[i].CustSN));
            //    //    sorted[i].form["CustSN{0}".format(i)].$setValidity("duplicate", !isDuplicate);
            //    //}
            //};

            //Get start
            $scope.initData();

        }
    ])
    .controller("Step3Ctrl", [
        "$scope", "$routeParams", "Config", "Factory", "$location", "Scopes", "$rootScope", "Flash",
        function ($scope, $routeParams, Config, Factory, $location, Scopes, $rootScope, Flash) {

            //Declare variables
            $scope.info = {
                selectRoute: null,
                departureTime: null,
                pickUpPoint: null,
                selectSeats: [],
                price: 0
            };

            $scope.step1Info = null;

            $scope.fromStation = "";
            $scope.toStation = "";
            $scope.selectSeatNum = 0;

            $scope.schedules = [];
            $scope.timeTables = [];
            $scope.pickUpPoints = [];
            $scope.seats = [];
            $scope.currentTab = 0;
            $scope.dropOffDateTime = null;
            $scope.duration = "";

            var maxBookSeat = parseInt(settings["MaxBookSeat"]);
            if (isNaN(maxBookSeat)) {
                maxBookSeat = 1;
            }
            $scope.maxBookSeat = maxBookSeat;

            //$scope.isInRequiredCustCode = function () {
            //    var cr = moment().startOf("day").add(1, "days");
            //    var sd = moment(settings["CustCodeValidStartDate"], Config.defaultConfig.isoDateTimeFormat);
            //    var ed = moment(settings["CustCodeValidEndDate"], Config.defaultConfig.isoDateTimeFormat);
            //    return cr.diff(sd, "days") >= 0 && ed.diff(cr, "days") >= 0;
            //};


            //Initial
            $scope.initData = function () {
                $scope.info = $.extend({}, $scope.info, Scopes.get("step3"));

                //Check previous step complete
                if (typeof Scopes.get("step2") == "undefined") {
                    $rootScope.$broadcast("loader_hide");
                    $location.path("/step2");
                }
                if (typeof Scopes.get("step1") == "undefined") {
                    $rootScope.$broadcast("loader_hide");
                    $location.path("/step1");
                }

                //$scope.step2Info = Scopes.get('step2');
                $scope.step1Info = Scopes.get("step1");
                $scope.step2Info = Scopes.get("step2");

                $scope.maxBookSeat = $scope.step1Info.numOfTicket;

                //console.log(typeof Scopes.get('step1'));

                //console.log(step1Info);
                //if (typeof(step1Info) != "undefined") {
                //    $scope.departureDate = step1Info.departureDate;
                //    $scope.fromStop = step1Info.fromStop;
                //    $scope.toStop = step1Info.toStop;
                //    $scope.numOfTicket = step1Info.numOfTicket;
                //}

                $scope.getSchedules();
                //$scope.getTimeTables();
                //if ($scope.info.routeId != 0) {
                //    //console.log('heee');
                //    $scope.getSchedules();
                //    $scope.getTimeTables();
                //} else {
                //    $scope.getSchedules();
                //}
            };


            //Navigation
            $scope.next = function (formValid) {
                //console.log(formValid)
                if (formValid) {
                    Scopes.store("step3", angular.copy($scope.info));

                    //Add to cart event
                    //dataLayer.push({
                    //    'event': "addToCart",
                    //    'ecommerce': {
                    //        'currencyCode': "VND",
                    //        'add': {                                // 'add' actionFieldObject measures.
                    //            'products': [{                        //  adding a product to a shopping cart.
                    //                'name': "{0}-{1}".format($scope.info.departureTime.Time, $scope.info.selectRoute.Name),
                    //                'id': "{0}-{1}-{2}".format($scope.step1Info.departureDate.format(Config.defaultConfig.dateFormat), $scope.info.departureTime.Time, $scope.info.selectRoute.Name),
                    //                'price': $scope.info.selectRoute.Price,
                    //                'list': "{0} - {1}".format($scope.step1Info.fromStop.t, $scope.step1Info.toStop.t),
                    //                'brand': "Phương Trang",
                    //                'category': $scope.info.selectRoute.Name,
                    //                'variant': $scope.info.departureTime.Kind,
                    //                'quantity': $scope.info.selectSeats.length
                    //            }]
                    //        }
                    //    }
                    //});

                    $location.path("/step4");
                }
            };
            $scope.prev = function () {
                //$location.path('/step1');
                //var step2Info = Scopes.get('step2');
                //$location.path('/step2/{0}/{1}'.format(step2Info.departureDate.format(Config.defaultConfig.dateFormat), step2Info.numOfTicket));
                $rootScope.$broadcast("loader_hide");
                $location.path("/step2");

            };
            $scope.changeTab = function (n) {
                $scope.currentTab = n;
            };
            $scope.selectSeat = function (obj) {
                if (obj.Status === 0 || obj.Status === 2) {
                    var eidx = $scope.info.selectSeats.indexOf(obj);
                    var isInserted = false;
                    //var maxBookSeat = parseInt(settings["MaxBookSeat"]);
                    //if (isNaN(maxBookSeat)) {
                    //    maxBookSeat = 1;
                    //}
                    //console.log('exist', eidx);
                    switch (eidx) {
                        case -1:
                            //if ($scope.info.selectSeats.length < $scope.step1Info.numOfTicket) {
                            //    $scope.info.selectSeats.push(obj);
                            //    isInserted = true;
                            //} else {

                            if ($scope.info.selectSeats.length < $scope.maxBookSeat) {
                                $scope.info.selectSeats.push(obj);
                                isInserted = true;
                            } else {
                                $scope.showError({ max: [{ "$name": "selectSeatNum" }] });
                                //console.log("here");
                                //$scope.limitSeat = true;
                            }
                          
                            break;
                        default:
                            $scope.info.selectSeats.splice(eidx, 1);
                    }

                    $scope.maskSelectedSeat(obj, isInserted);
                }
            };
            $scope.maskSelectedSeat = function (obj, isInserted) {
                var i;
                var j;
                var eidx;
                switch ($scope.info.departureTime.Kind) {
                    case "Ghế":
                        for (i = 0; i < $scope.seats.length; i++) { //row
                            if (typeof ($scope.seats[i]) == "undefined") continue;
                            for (j = 0; j < $scope.seats[i].length; j++) { //col
                                if (typeof ($scope.seats[i][j]) == "undefined") continue;
                                if ($scope.seats[i][j].Id === obj.Id) {
                                    if ($scope.seats[i][j].Status === 1) { //Remove seat from select
                                        eidx = $scope.info.selectSeats.indexOf(obj);
                                        if (eidx !== -1) {
                                            $scope.info.selectSeats.splice(eidx, 1);
                                        }
                                    } else {
                                        $scope.seats[i][j].Status = isInserted === true ? 2 : 0;
                                    }
                                }
                            }
                        }
                        break;
                    case "Giường":
                        for (i = 0; i < $scope.seats.length; i++) { //z
                            if (typeof ($scope.seats[i]) == "undefined") continue;
                            for (j = 0; j < $scope.seats[i].length; j++) { //row
                                if (typeof ($scope.seats[i][j]) == "undefined") continue;
                                for (var k = 0; k < $scope.seats[i][j].length; k++) { //col
                                    if (typeof ($scope.seats[i][j][k]) == "undefined") continue;
                                    if ($scope.seats[i][j][k].Id === obj.Id) {
                                        if ($scope.seats[i][j][k].Status === 1) { //Remove seat from select
                                            eidx = $scope.info.selectSeats.indexOf(obj);
                                            if (eidx !== -1) {
                                                $scope.info.selectSeats.splice(eidx, 1);
                                            }
                                        } else {
                                            $scope.seats[i][j][k].Status = isInserted === true ? 2 : 0;
                                        }
                                    }
                                }
                            }
                        }
                        break;
                }
            };

            $scope.showError = function (errors) {
                //console.log(errors);

                var html = "";
                $.each(errors, function (i, v) {
                    var j;
                    switch (i) {
                        case "required":
                            for (j = 0; j < v.length; j++) {
                                html += Config.errorMessages[Scopes.get("locale")][v[j].$name] + "<br />";
                                //switch (v[j].$name) {
                                //    case "selectRoute":
                                //        html += "Vui lòng chọn tuyến xe<br/>";
                                //        break;
                                //    case "departureTime":
                                //        html += "Vui lòng chọn giờ khởi hành<br/>";
                                //        break;
                                //    case "pickUpPoint":
                                //        html += "Vui lòng chọn điểm lên xe<br/>";
                                //        break;
                                //    case "selectSeatNum":
                                //        html += "Vui lòng chọn số ghế<br/>";
                                //        break;
                                //}
                            }
                            break;
                        case "min":
                            for (j = 0; j < v.length; j++) {
                                html += Config.minMessages[Scopes.get("locale")][v[j].$name] + "<br />";
                                //switch (v[j].$name) {
                                //    case "selectSeatNum":
                                //        html += "Vui lòng chọn số ghế<br/>";
                                //        break;
                                //}
                            }
                            break;
                        case "max":
                            for (j = 0; j < v.length; j++) {
                                html += Config.maxMessages[Scopes.get("locale")][v[j].$name] + "<br />";
                                //switch (v[j].$name) {
                                //    case "selectSeatNum":
                                //        html += "Đã chọn đủ số ghế<br/>";
                                //        break;
                                //}
                            }
                            break;
                    }
                });
                Flash.create("danger", html, "custom-alert");
            }; //$scope.zoomBookingSheet = function () {
                

            //    //Store seat to share Scopes
            //    Scopes.store("seats", $scope.seats);

            //    var path = "";
            //    switch (Scopes.get('locale')) {
            //        case "en-US":
            //            path = "/Content/modules/vetet/partials/horizontal-seat.html";
            //            break;
            //        default:
            //            path = "/Content/modules/vetet/partials/horizontal-seat.html";
            //            break;
            //    }
            //    ModalService.showModal({
            //        templateUrl: path,
            //        controller: "ModalCtrl"
            //    }).then(function (modal) {
            //        // The modal object has the element built, if this is a bootstrap modal
            //        // you can call 'modal' to show it, if it's a custom modal just show or hide
            //        // it as you need to.
            //        modal.element.modal();
            //    });
            //};

            //Get information
            $scope.getSchedules = function () {
                try {
                    $rootScope.$broadcast("loader_show");
                    $scope.getScheduleComplete = false;
                    Factory.getSchedules($scope.step1Info.fromStop.v, $scope.step1Info.toStop.v, $scope.step1Info.departureDate.format(Config.defaultConfig.dateFormat)).then(function(data) {
                        $scope.schedules = [];
                        if (data.Status === 1) {
                            var matchSchedule = false;
                            for (var i = 0; i < data.Data.length; i++) {
                                if (parseInt(data.Data[i].Price) > 0) {
                                    $scope.schedules.push(data.Data[i]);
                                    if ($scope.info.selectRoute != null && (data.Data[i].Id === $scope.info.selectRoute.Id)) {
                                        $scope.info.selectRoute = data.Data[i];
                                        matchSchedule = true;
                                    }
                                }
                            }
                            if (!matchSchedule) {
                                $scope.info.selectRoute = $scope.schedules[0];
                            }
                        } else {
                            //$scope.showError()
                        }
                        //Reset select seat
                        $scope.info.selectSeats = [];
                        $scope.getScheduleComplete = true;
                        $rootScope.$broadcast("loader_hide");
                    });
                } catch (err) {
                    console.log("Error: " + err);
                } 
            };
            $scope.getTimeTables = function () {
                $rootScope.$broadcast("loader_show");
                $scope.getTimeTableComplete = false;
                Factory.getTimeTables($scope.info.selectRoute.Id, $scope.step1Info.departureDate.format(Config.defaultConfig.dateFormat)).then(function (data) {
                    $scope.timeTables = [];
                    if (data.Status === 1) {
                        var matchTime = false;
                        for (var i = 0; i < data.Data.length; i++) {
                            $scope.timeTables.push(data.Data[i]);
                            if ($scope.info.departureTime != null && data.Data[i].Time === $scope.info.departureTime.Time) {
                                $scope.info.departureTime = data.Data[i];
                                matchTime = true;
                            }
                        }

                        if (!matchTime) {
                            $scope.info.departureTime = $scope.timeTables[0];
                        }
                    }
                    $scope.info.selectSeats = [];
                    $scope.getTimeTableComplete = true;
                    $rootScope.$broadcast("loader_hide");
                });

            };
            $scope.getPickupPoints = function () {
                $rootScope.$broadcast("loader_show");
                $scope.getPickUpPointComplete = false;
                Factory.getPickupPoints($scope.info.selectRoute.Id, $scope.info.departureTime.Time, $scope.step1Info.departureDate.format(Config.defaultConfig.dateFormat)).then(function (data) {
                    $scope.pickUpPoints = [];
                    if (data.Status === 1) {
                        var matchPoint = false;
                        for (var i = 0; i < data.Data.length; i++) {
                            $scope.pickUpPoints.push(data.Data[i]);
                            if ($scope.info.pickUpPoint != null && data.Data[i].Id === $scope.info.pickUpPoint.Id) {
                                $scope.info.pickUpPoint = data.Data[i];
                                matchPoint = true;
                            }
                        }

                        if (!matchPoint) {
                            $scope.info.pickUpPoint = $scope.pickUpPoints[0];
                        }
                    } else {
                        //Show error
                    }
                    $scope.getPickUpPointComplete = true;
                    $rootScope.$broadcast("loader_hide");
                });
            };
            $scope.getSeats = function () {
                $rootScope.$broadcast("loader_show");
                $scope.getSeatComplete = false;
                Factory.getSeats($scope.info.selectRoute.Id, $scope.step1Info.departureDate.format(Config.defaultConfig.dateFormat), $scope.info.departureTime.Time, $scope.info.departureTime.Kind, $scope.info.departureTime.Id).then(function (data) {
                    $scope.seats = [];
                    if (data.Status === 1) {
                        var bks = data.Data;
                        //console.log(data.Data);
                        var rowN;
                        var colN;
                        if ($scope.info.departureTime.Kind === "Ghế") {
                            for (var i = 0; i < bks.length; i++) {
                                rowN = parseInt(bks[i].RowNo);
                                if (isNaN(rowN)) {
                                    rowN = 0;
                                }
                                colN = parseInt(bks[i].ColumnNo);
                                if (isNaN(colN)) {
                                    colN = 0;
                                }

                                if (typeof ($scope.seats[rowN]) == "undefined") {
                                    $scope.seats[rowN] = [];
                                }
                                $scope.seats[rowN][colN] = {
                                    Id: bks[i].Id,
                                    Chair: bks[i].Chair,
                                    Status: bks[i].BookStatus === 0 && bks[i].LockChair === 0 && bks[i].InSelect === 0 ? 0 : 1
                                };
                            }
                        } else {
                            for (i = 0; i < bks.length; i++) {
                                var floorNo = parseInt(bks[i].FloorNo);
                                if (isNaN(floorNo)) {
                                    floorNo = 1;
                                }
                                rowN = parseInt(bks[i].RowNo);
                                if (isNaN(rowN)) {
                                    rowN = 1;
                                }
                                colN = parseInt(bks[i].ColumnNo);
                                if (isNaN(colN)) {
                                    colN = 1;
                                }

                                if (typeof ($scope.seats[floorNo - 1]) == "undefined") {
                                    $scope.seats[floorNo - 1] = [];
                                }

                                if (typeof ($scope.seats[floorNo - 1][rowN - 1]) == "undefined") {
                                    $scope.seats[floorNo - 1][rowN - 1] = [];
                                }
                                $scope.seats[floorNo - 1][rowN - 1][colN - 1] = {
                                    Id: bks[i].Id,
                                    Chair: bks[i].Chair,
                                    Status: bks[i].BookStatus === 0 && bks[i].LockChair === 0 && bks[i].InSelect === 0 ? 0 : 1
                                };
                            }
                        }


                        //var i;
                        //var rowN;
                        //var colN;
                        //if ($scope.info.departureTime.Kind === "Ghế") {
                        //    for (i = 0; i < data.length; i++) {
                        //        rowN = parseInt(data[i].RowNo);
                        //        if (isNaN(rowN)) {
                        //            rowN = 0;
                        //        }
                        //        colN = parseInt(data[i].ColumnNo);
                        //        if (isNaN(colN)) {
                        //            colN = 0;
                        //        }

                        //        if (typeof ($scope.seats[rowN]) == "undefined") {
                        //            $scope.seats[rowN] = [];
                        //        }
                        //        $scope.seats[rowN][colN] = {
                        //            Id: data[i].Id,
                        //            Chair: data[i].Chair,
                        //            Status: data[i].BookStatus === "0" && data[i].LockChair === "0" && data[i].InSelect === "False" ? 0 : 1
                        //        };
                        //    }
                        //} else if ($scope.info.departureTime.Kind === "Giường") {
                        //    for (i = 0; i < data.length; i++) {
                        //        rowN = parseInt(data[i].RowNo);
                        //        if (isNaN(rowN)) {
                        //            rowN = 0;
                        //        }
                        //        colN = parseInt(data[i].ColumnNo);
                        //        if (isNaN(colN)) {
                        //            colN = 0;
                        //        }

                        //        var zN = 1;
                        //        if (/\A[0-9]+$/.test(data[i].Chair)) {
                        //            zN = 0;
                        //        }

                        //        if ($scope.info.selectRoute.Id === 370) {
                        //            var c = parseInt(data[i].Chair);
                        //            if (c <= 18) {
                        //                zN = 0;
                        //            }
                        //        }

                        //        if (typeof ($scope.seats[zN]) == "undefined") {
                        //            $scope.seats[zN] = [];
                        //        }

                        //        if (typeof ($scope.seats[zN][rowN]) == "undefined") {
                        //            $scope.seats[zN][rowN] = [];
                        //        }
                        //        $scope.seats[zN][rowN][colN] = {
                        //            Id: data[i].Id,
                        //            Chair: data[i].Chair,
                        //            Status: data[i].BookStatus === "0" && data[i].LockChair === "0" && data[i].InSelect === "False" ? 0 : 1
                        //        };
                        //    }
                        //}
                    } else {
                        //Show error
                    }
                    //Reset select seat
                    $scope.info.selectSeats = [];
                    $scope.currentTab = 0;
                    $scope.getSeatComplete = true;
                    $rootScope.$broadcast("loader_hide");
                });
            };
            $scope.getPrice = function () {
                $rootScope.$broadcast("loader_show");
                $scope.getPriceComplete = false;
                Factory.getPrice($scope.info.selectRoute.Id, $scope.step1Info.departureDate.format(Config.defaultConfig.dateFormat), $scope.info.departureTime.IDKind).then(function (res) {
                    $scope.info.price = 0;
                    if (res.Status === 1) {
                        var data = res.Data;
                        var price = parseInt(data.Price);
                        if (isNaN(price)) {
                            price = 0;
                        }
                        $scope.info.price = price;
                        //console.log($scope.info.price);
                    }
                    //console.log($scope.info.price);
                    $scope.getPriceComplete = true;
                    $rootScope.$broadcast("loader_hide");
                });
            };
            //Binding change
            $scope.$watch("info.selectRoute", function (newValue, oldValue, scope) {
                //console.log(newValue, oldValue);
                if (newValue !== oldValue && newValue != null) {

                    var schedule = null;
                    for (var i = 0; i < scope.schedules.length; i++) {
                        if (scope.info.selectRoute != null && (scope.schedules[i].Id === scope.info.selectRoute.Id)) {
                            schedule = scope.schedules[i];
                        }
                    }
                    if (schedule == null) {
                        schedule = scope.schedules[0];
                    }
                    if (schedule != null) {
                        scope.info.selectRoute = schedule;
                        var st = schedule.Name.split(" ⇒ ");
                        scope.fromStation = st[0];
                        scope.toStation = st[1];
                    }
                   
                    scope.info.departureTime = null;
                    scope.getTimeTables();
                }
            });
            $scope.$watch("info.departureTime", function (newValue, oldValue, scope) {
                //console.log(newValue, oldValue);
                if (newValue !== oldValue && newValue != null) {
                    //console.log(newValue, oldValue);
                    //Change dropofftime
                    var d = moment(angular.copy(scope.step1Info.departureDate)).startOf("day");
                    
                    var t = angular.copy(scope.info.departureTime).Time.split(":");
                    //console.log(d, t);
                    d.add(parseInt(t[0]), "h"); d.add(parseInt(t[1]), "m");
                    d.add(scope.info.selectRoute["Duration"], "s");
                    scope.dropOffDateTime = d;

                    var dr = moment.duration(scope.info.selectRoute["Duration"], "seconds");
                    //var hours = Math.floor(dr.asHours());
                    //var mins = Math.floor(dr.asMinutes()) - hours * 60;
                    //scope.duration = "{0}h:{1}".format(hours, mins);
                    scope.duration = dr.humanize();
                    
                    $scope.pickUpPoint = null;
                    $scope.info.price = 0;
                    $scope.getPrice();
                    $scope.getPickupPoints();
                    //$scope.getSeats();
                }
            });
            $scope.$watch("info.selectSeats.length", function (newValue, oldValue, scope) {
                scope.selectSeatNum = scope.info.selectSeats.length;
            });
            $scope.$watch("info.price", function (newValue, oldValue, scope) {
                //console.log(newValue, oldValue);
                scope.seats = [];
                scope.info.selectSeats = [];
                scope.currentTab = 0;
                if (newValue > 0) {
                    scope.getSeats();
                }
            });
            //$scope.$watch('limitSeat', function (newValue, oldValue, scope) {
            //    console.log(newValue);
            //    if (newValue) {
            //        scope.showError({ max: [{ "$name": "selectSeatNum" }] });
            //    }
            //});

            $scope.initData();

        }
     ])
    .controller("Step4Ctrl", [
        "$scope", "$routeParams", "Config", "Factory", "$location", "Scopes", "$rootScope", "Flash",
        function ($scope, $routeParams, Config, Factory, $location, Scopes, $rootScope, Flash) {

            //Declare variables
            $scope.info = {
                totalMoney: 0,
                selectBank: null,
                bankType: "QuocTe"
                //bankCode: ""
            };
            //$scope.supportBanks = {};

            $scope.step3Info = null;
            $scope.step2Info = null;
            $scope.step1Info = null;
            //$scope.bookResponse = null;
            $scope.isRebooking = 0;
            $scope.oldSelectBankCode = "";

            $scope.paymentTypes = {};

            //Initial
            $scope.initData = function () {
                $scope.info = $.extend({}, $scope.info, Scopes.get("step4"));

                if ($routeParams.code != null && $routeParams.code !== "") {
                    //Re booking
                    $scope.isRebooking = 1;

                    $rootScope.$broadcast("loader_show");

                    Scopes.store("step1", {});
                    Scopes.store("step2", {});
                    Scopes.store("step3", {
                        selectRoute: {
                            Price: 0
                        },
                        selectSeats: []
                    });

                    Factory.getDetail($routeParams.code).then(function (res) {
                        //console.log(data);
                        var data = res.Data;
                        var found = false;
                        var i;
                        for (i = 0; i < routes.length && !found; i++) {
                            //console.log(parseInt(data["TuyenDuongId"]));
                            if (routes[i].Id === parseInt(data["TuyenDuongId"])) {
                                $scope.step1Info["fromStop"] = {
                                    v: routes[i].OriginCode,
                                    t: routes[i].OriginName
                                };

                                $scope.step1Info["toStop"] = {
                                    v: routes[i].DestCode,
                                    t: routes[i].DestName
                                };
                                $scope.step3Info["selectRoute"] = routes[i]; 
                                found = true;
                            }
                        }

                        $scope.step3Info["selectRoute"]["Price"] = data["TicketDetails"][0]["price"];

                        $scope.step1Info["departureDate"] = moment(data.NgayDi);
                        $scope.step1Info["numOfTicket"] = data.NumOfTicket;

                        $scope.step2Info["CustName"] = data.CustName;
                        $scope.step2Info["CustEmail"] = data.CustEmail;
                        $scope.step2Info["CustMobile"] = data.CustMobile;
                        $scope.step2Info["CustMobile2"] = data.CustMobile2;
                        $scope.step2Info["CustSN"] = data.CustCMND;
                        var j;
                        if (data.country != null && data.country !== "") {
                            found = false;
                            for (i = 0; i < countries.length && !found; i++) {
                                if (countries[i].Code === data.country) {
                                    $scope.step2Info["CustCountry"] = countries[i];
                                    found = true;
                                }
                            }
                            if (data.state != null && data.state !== "") {
                                switch (data.country) {
                                case "CA":
                                case "US":
                                case "UM":
                                    found = false;
                                    for (j = 0; j < states[data.country].length && !found; j++) {
                                        if (states[data.country][j].Code === data.state) {
                                            $scope.step2Info["CustState"] = states[data.country][j];
                                            found = true;
                                        }
                                    }
                                    break;
                                default:
                                    $scope.step2Info["CustState"] = null;
                                    break;
                                }
                            } else {
                                $scope.step2Info["CustState"] = null;
                            }
                        } else {
                            $scope.step2Info["CustCountry"] = null;
                            $scope.step2Info["CustState"] = null;
                        }
                        $scope.step2Info["CustAddress"] = data.CustAddress;
                        $scope.step2Info["CustCity"] = data.city;


                        $scope.step3Info["departureTime"] = {
                            Id: data["TicketDetails"][0]["carBookingId"],
                            Time: data["GioDi"]
                        };
                        $scope.step3Info["pickUpPoint"] = {
                            Id: data["CustPickupOfficeId"],
                            Address: data["CustPickup"]
                        };
                        $scope.step3Info["selectSeats"] = [];
                        var passengers = [];
                        for (j = 0; j < data["TicketDetails"].length; j++) {
                            $scope.step3Info["selectSeats"].push({
                                Id: data["TicketDetails"][j].TicketId,
                                Chair: data["TicketDetails"][j].TicketName
                            });
                            passengers.push({
                                CustName: data["TicketDetails"][j].CustName,
                                CustMobile: data["TicketDetails"][j].CustMobile,
                                CustSN: data["TicketDetails"][j].CustCMND
                            });
                        }
                        $scope.step2Info.Passengers = passengers;
                        $scope.oldSelectBankCode = data.BankCode;

                        $rootScope.$broadcast("loader_hide");
                    });
                }
                
                //Check first step complete
                if (typeof Scopes.get("step3") == "undefined") {
                    $rootScope.$broadcast("loader_hide");
                    $location.path("/step3");
                }
                if (typeof Scopes.get("step2") == "undefined") {
                    $rootScope.$broadcast("loader_hide");
                    $location.path("/step2");
                }
                if (typeof Scopes.get("step1") == "undefined") {
                    $rootScope.$broadcast("loader_hide");
                    $location.path("/step1");
                }

                $scope.step3Info = Scopes.get("step3");
                $scope.step2Info = Scopes.get("step2");
                $scope.step1Info = Scopes.get("step1");

                //console.log($scope.step2Info);

                //console.log($scope.step3Info, $scope.step1Info);
                //$scope.getSupportBanks();
                $scope.getSupportPayment();
                //$scope.info.totalMoney = $scope.step3Info.selectRoute.Price * $scope.step3Info.selectSeats.length;
            };

            //Navigation
            $scope.book = function (formValid) {
                if (formValid) {

                    Scopes.store("step4", angular.copy($scope.info));
                    //console.log('Pay initial......');
                    $rootScope.$broadcast("loader_show");

                    //Data layer
                    //dataLayer.push(
                    //    {
                    //        'totalMoney': $scope.info.totalMoney,
                    //        'custName': $scope.step2Info.CustName,
                    //        'custEmail': $scope.step2Info.CustEmail,
                    //        'custMobile': $scope.step2Info.CustMobile,
                    //        'routeId': $scope.step3Info.selectRoute.Id,
                    //        'routeName': $scope.step3Info.selectRoute.Name,
                    //        'departureDate': $scope.step1Info.departureDate.format(Config.defaultConfig.dateFormat),
                    //        'departureTime': $scope.step3Info.departureTime.Time,
                    //        'numOfTicket': $scope.step3Info.selectSeats.length,
                    //        'seatNames': $scope.step3Info.selectSeats.map(function (o) { return o.Chair }),
                    //        'pickUpStreet': $scope.step3Info.pickUpPoint.Address
                    //    }
                    //);


                    var bookingInfo = {
                        CustName: $scope.step2Info.CustName,
                        CustEmail: $scope.step2Info.CustEmail,
                        CustMobile: $scope.step2Info.CustMobile,
                        //CustCode: $scope.step2Info.CustCode,
                        CustSN: $scope.step2Info.CustSN,
                        RouteId: $scope.step3Info.selectRoute.Id,
                        RouteName: $scope.step3Info.selectRoute.Name,
                        DepartureDate: $scope.step1Info.departureDate.format(Config.defaultConfig.dateFormat),
                        DepartureTime: $scope.step3Info.departureTime.Time,
                        NumOfTicket: $scope.step3Info.selectSeats.length,
                        CarBookingId: $scope.step3Info.departureTime.Id,
                        SeatIds: $scope.step3Info.selectSeats.map(function(o) { return o.Id }),
                        SeatNames: $scope.step3Info.selectSeats.map(function(o) { return o.Chair }),
                        OfficePickupId: $scope.step3Info.pickUpPoint.Id,
                        PickUpStreet: $scope.step3Info.pickUpPoint.Address,
                        Passengers: []
                    };

                    for (var i = 0; i < $scope.step2Info.Passengers.length; i++) {
                        bookingInfo.Passengers.push({
                            CustName: $scope.step2Info.Passengers[i].CustName,
                            CustMobile: $scope.step2Info.CustMobile,
                            CustSN: $scope.step2Info.Passengers[i].CustSN
                        });
                    }

                    //if (Scopes.get("locale") !== "vi-VN") {
                    //    bookingInfo["CustAddress"] = $scope.step2Info.CustAddress;
                    //    bookingInfo["CustCity"] = $scope.step2Info.CustCity;
                    //    if ($scope.step2Info.CustCountry != null) {
                    //        bookingInfo["CustCountry"] = $scope.step2Info.CustCountry.Code;
                    //    }
                        
                    //    if ($scope.step2Info.CustState != null) {
                    //        bookingInfo["CustState"] = $scope.step2Info.CustState.Code;
                    //    }
                    //}

                    Factory.bookSeat(bookingInfo, $scope.isRebooking).then(function (data) {
                        //$scope.bookResponse = data;
                        if (data.Status === 1) {
                            var url = "";
                            switch($scope.info.bankType) {
                                case "QuocTe":
                                case "NoiDia":
                                    url = "{0}/webpayticket?BookingNo={1}&PaymentType={2}&BankCode={3}".format(Config.baseApiUrl, data.Data.Code, $scope.info.bankType, $scope.info.selectBank.Code);
                                    break;
                                case "ChuyenKhoan":
                                case "TaiQuay":
                                    url = "{0}/webpayticket?BookingNo={1}&PaymentType={2}&BankCode=FUTA".format(Config.baseApiUrl, data.Data.Code, $scope.info.bankType);
                                    break;
                            }
                            document.location = url;
                            //dataLayer.push({
                            //    'event': "checkout",
                            //    'ecommerce': {
                            //        'currencyCode': "VND",
                            //        'checkout': {
                            //            'actionField': { 'step': 1, 'option': $scope.info.selectBank.BankCode },
                            //            'products': [{
                            //                'name': "{0}-{1}".format(bookingInfo.DepartureTime, bookingInfo.RouteName),
                            //                'id': "{0}-{1}-{2}".format(bookingInfo.DepartureDate, bookingInfo.DepartureTime, bookingInfo.RouteName),
                            //                'price': $scope.step3Info.selectRoute.Price,
                            //                'list': "{0} - {1}".format($scope.step1Info.fromStop.t, $scope.step1Info.toStop.t),
                            //                'brand': "Phương Trang",
                            //                'category': bookingInfo.RouteName,
                            //                'variant': $scope.step3Info.departureTime.Kind,
                            //                'quantity': $scope.step3Info.selectSeats.length
                            //            }]
                            //        }
                            //    },
                            //    'eventCallback': function () {
                            //        document.location = url;
                            //    }
                            //});


                            //Success
                            //window.location.href = "{0}/payment/process?BookingNo={1}&PaymentType={2}&BankCode={3}".format(Config.baseApiUrl, data.Code, $scope.info.selectBank.BankType, $scope.info.selectBank.BankCode);
                        } else {
                            $scope.showError({ "bookmsg": [{ "$name": "error", "$message": data.Message }] });
                        }
                        $rootScope.$broadcast("loader_hide");
                    });
                }
            };
            $scope.prev = function () {
                $rootScope.$broadcast("loader_hide");
                $location.path("/step3");
            };
            //$scope.selectBank = function (b) {
            //    $scope.info.selectBank = b;
            //};

            $scope.selectCard = function(b) {
                $scope.info.selectBank = b;
            };
            $scope.showError = function (errors) {
                //console.log(errors);

                var html = "";
                var vselectBank = false;
                $.each(errors, function (i, v) {
                    var j;
                    switch (i) {
                        case "required":
                            for (j = 0; j < v.length; j++) {
                                switch (v[j].$name) {
                                    case "selectBank":
                                        if (!vselectBank) {
                                            html += "Vui lòng chọn ngân hàng hoặc loại thẻ quốc tế<br/>";
                                            vselectBank = true;
                                        }
                                        break;
                                }
                            }
                            break;
                        case "bookmsg":
                            for (j = 0; j < v.length; j++) {
                                switch (v[j].$name) {
                                    case "error":
                                        html += v[j].$message;
                                        break;
                                }
                            }
                            break;
                    }
                });
                Flash.create("danger", html, "custom-alert");
            }; //Get information
            //$scope.getSupportBanks = function() {
            //    $rootScope.$broadcast("loader_show");

            //    $scope.supportBanks = {};
            //    var banks = settings["Banks"];
            //    for (var i = 0; i < banks.length; i++) {
            //        if (typeof $scope.supportBanks[banks[i].BankType] == "undefined") {
            //            $scope.supportBanks[banks[i].BankType] = [];
            //        }
            //        $scope.supportBanks[banks[i].BankType].push(banks[i]);
            //    }
            //    $rootScope.$broadcast("loader_hide");
            //};

            $scope.getSupportPayment = function() {
                $rootScope.$broadcast("loader_show");
                for (var i = 0; i < settings["PaymentTypes"].length; i++) {
                    var p = settings["PaymentTypes"][i];
                    $scope.paymentTypes[p.Code] = {
                        Name: p.Name,
                        Banks: []
                    }
                }
                for (var j = 0; j < settings["Banks"].length; j++) {
                    var b = settings["Banks"][j];
                    $scope.paymentTypes[b.BankType].Banks.push(b);
                }
                $rootScope.$broadcast("loader_hide");
            };

            //Binding
            $scope.$watchGroup(["step3Info.selectRoute.Price", "step3Info.selectSeats.length"], function(newValue, oldValue, scope) {
                scope.info.totalMoney = scope.step3Info.selectRoute.Price * scope.step3Info.selectSeats.length;
            });

            $scope.initData();
        }
    ]);