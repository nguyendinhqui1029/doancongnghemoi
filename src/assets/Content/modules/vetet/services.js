"use strict";

/* Services */

/*
 http://docs.angularjs.org/api/ngResource.$resource

 Default ngResources are defined as

 'get':    {method:'GET'},
 'save':   {method:'POST'},
 'query':  {method:'GET', isArray:true},
 'remove': {method:'DELETE'},
 'delete': {method:'DELETE'}

 */

angular.module("ngBus.services", [])
    .factory("Factory", ["Config", "$http", "$cookies", function (Config, $http, $cookies) {
    var serviceBase = Config.apiUrl;
    var service = {};
    var version = parseInt(settings["Version"]);
    if (isNaN(version)) {
        version = 1;
    }

    service.getStops = function () {
        var obj = {
            Version: version
        };
        return $http(this.baseRequest("/queryroutes", obj)).then(function (response) {
            return response.data;
        });
    };

    service.getSchedules = function (departureCode, destinationCode, departureDate) {
        var obj = { Version: version, OriginCode: departureCode, DestCode: destinationCode, DepartureDate: departureDate };
        return $http(this.baseRequest("/queryroutewithprice", obj)).then(function (response) {
            return response.data;
        });
    };

    service.getTimeTables = function (routeId, departureDate) {
        var obj = {  Version: version, RouteId: routeId, DepartureDate: departureDate };
        return $http(this.baseRequest("/querytimetable", obj)).then(function (response) {
            return response.data;
        });
    }

    service.getPickupPoints = function (routeId, departureTime, departureDate) {
        var obj = { Version: version, RouteId: routeId, DepartureTime: departureTime, DepartureDate: departureDate };
        return $http(this.baseRequest("/queryboardingpoint", obj)).then(function (response) {
            return response.data;
        });
    }

    //service.getStations = function (routeIds) {
    //    var obj = { Version: version, RouteIds: routeIds };
    //    return $http(this.baseRequest("/routes/stations", obj)).then(function (response) {
    //        return response.data;
    //    });
    //}

    service.getSeats = function (routeId, departureDate, departureTime, kind, timeId) {
        var obj = { Version: version, RouteId: routeId, DepartureDate: departureDate, DepartureTime: departureTime, Kind: kind, CarBookingId: timeId };
        return $http(this.baseRequest("/queryseat", obj)).then(function (response) {
            return response.data;
        });
    }

    //service.getSupportBanks = function() {
    //    var obj = { Version: version};
    //    return $http(this.baseRequest("/banks", obj)).then(function (response) {
    //        return response.data;
    //    });
    //}

    service.bookSeat = function (obj, isRebooking) {
        var req = this.baseRequest("/querybookticket", obj);
        //Add rebooking header
        req.headers["X-Rebooking"] = isRebooking;
        return $http(req).then(function (response) {
            return response.data;
        });
    }

    service.getDetail = function(code) {
        var obj = { BookingNo: code };
        return $http(this.baseRequest("/getbookticket", obj)).then(function (response) {
            return response.data;
        });
    }

    service.getPickupPointsInRoute = function (routeId) {
        var obj = { Version: version, RouteId: routeId, Page: 1, NumRowPerPage: 100 };
        return $http(this.baseRequest("/getlistpickupinroute", obj)).then(function (response) {
            return response.data;
        });
    }

    service.getShipPoints = function(routeId, page, numRowPerPage) {
        var obj = { Version: version, RouteId: routeId, Page: page, NumRowPerPage: numRowPerPage };
        return $http(this.baseRequest("/getlistshippoint", obj)).then(function (response) {
            return response.data;
        });
    }

    //service.getLoggedUser = function () {
    //    //console.log($cookies.get("ss-id"));
    //    return $http({
    //        method: "POST",
    //        url: Config.apiUrl2 + "/auth/getuserinfo"
    //        //headers: { "X-ApiKey": Config.loggedApiKey }
    //    }).then(function (response) {
    //        return response.data;
    //    });
        //}

    service.isValidCustCode = function (code, phone, rIds) {
        var obj = { Version: version, Code: code, Phone: phone, RouteIds: rIds };
        return $http(this.baseRequest("/isvalidcode", obj)).then(function (response) {
            return response.data;
        });
    };

    service.getPrice = function (routeId, departureDate, kindId) {
        var obj = { Version: version, RouteId: routeId, DepartureDate: departureDate, KindId: kindId };
        return $http(this.baseRequest("/queryprice", obj)).then(function (response) {
            return response.data;
        });
    }

    service.baseRequest = function(rApi, obj) {
        return {
            method: "POST",
            url: serviceBase + rApi,
            headers: { "X-ApiKey": Config.ApiKey },
            data: obj
        };
    }



    return service;
    }])
    .factory("svcQueue", function ($q, $http) {
    var queue = [];
    var execNext = function () {
        var task = queue[0];
        $http(task.c).then(function (data) {
            queue.shift();
            task.d.resolve(data);
            if (queue.length > 0) execNext();
        }, function (err) {
            task.d.reject(err);
        })
        ;
    };
    return function (config) {
        var d = $q.defer();
        queue.push({ c: config, d: d });
        if (queue.length === 1) execNext();
        return d.promise;
    };
});

