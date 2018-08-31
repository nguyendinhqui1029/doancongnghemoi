if (!String.prototype.format) {
    String.prototype.format = function () {
        var args = arguments;
        return this.replace(/{(\d+)}/g, function (match, number) {
            return typeof args[number] != 'undefined'
              ? args[number]
              : match
            ;
        });
    };
}
Number.prototype.formatMoney = function (n, t, i) {
    var u = this,
    n = isNaN(n = Math.abs(n)) ? 2 : n,
    t = t == undefined ? "." : t,
    i = i == undefined ? "," : i,
    e = u < 0 ? "-" : "",
    f = parseInt(u = Math.abs(+u || 0).toFixed(n)) + "",
    r = (r = f.length) > 3 ? r % 3 : 0;
    return e + (r ? f.substr(0, r) + i : "") +
        f.substr(r).replace(/(\d{3})(?=\d)/g, "$1" + i) + (n ? t + Math.abs(u - f).toFixed(n).slice(2) : "");
};

Array.prototype.unique = function () {
    return this.reduce(function (accum, current) {
        if (accum.indexOf(current) < 0) {
            accum.push(current);
        }
        return accum;
    }, []);
}

if (!String.prototype.isNullOrEmpty) {
    String.prototype.isNullOrEmpty = function () {
        var v = this;
        return v.length === 0;
    };
}

//if (!Object.prototype.returnNullIfEmpty) {
//    Object.prototype.returnNullIfEmpty = function() {
//        var v = this;
//        if (Object.keys(v).length === 0) {
//            return null;
//        }
//        return v;
//    }
//}

//if (!Object.prototype.isEmpty) {
//    Object.prototype.isEmpty = function() {
//        var obj = this;
//        if (obj == null) return true;

//        // Assume if it has a length property with a non-zero value
//        // that that property is correct.
//        if (obj.length > 0) return false;
//        if (obj.length === 0) return true;

//        // Otherwise, does it have any properties of its own?
//        // Note that this doesn't handle
//        // toString and valueOf enumeration bugs in IE < 9
//        for (var key in obj) {
//            if (hasOwnProperty.call(obj, key)) return false;
//        }

//        return true;
//    }
//}

//Ajax manager for queue
var ajaxManager = (function () {
    var requests = [];

    return {
        addReq: function (opt) {
            requests.push(opt);
        },
        removeReq: function (opt) {
            if ($.inArray(opt, requests) > -1)
                requests.splice($.inArray(opt, requests), 1);
        },
        run: function () {
            var self = this,
                oriSuc;

            if (requests.length) {
                oriSuc = requests[0].complete;

                requests[0].complete = function () {
                    if (typeof (oriSuc) === 'function') oriSuc();

                    requests.shift();
                    self.run.apply(self, []);
                };

                $.ajax(requests[0]);

            } else {
                self.tid = setTimeout(function () {
                    self.run.apply(self, []);
                }, 1000);
            }
        },
        stop: function () {
            requests = [];
            clearTimeout(this.tid);
        }
    };
}());

//function locdau(str) {
//    str = str.toLowerCase();
//    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
//    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
//    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
//    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
//    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
//    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
//    str = str.replace(/đ/g, "d");
//    str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'| |\"|\&|\#|\[|\]|~|$|_/g, "-");
//    /* tìm và thay thế các kí tự đặc biệt trong chuỗi sang kí tự - */
//    str = str.replace(/-+-/g, "-"); //thay thế 2- thành 1- 
//    str = str.replace(/^\-+|\-+$/g, "");
//    //cắt bỏ ký tự - ở đầu và cuối chuỗi  
//    return str;
//}

var slug = function (str) {
    str = str.replace(/^\s+|\s+$/g, ''); // trim
    str = str.toLowerCase();
    //str = str.replace(/thành\s+phố\s+/g, '');
    //str = str.replace(/thanh\spho/g, '');
    // remove accents, swap ñ for n, etc
    var from = "àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ";
    var to = "aaaaaaaaaaaaaaaaaeeeeeeeeeeeiiiiiooooooooooooooooouuuuuuuuuuuyyyyyd";
    for (var i = 0, l = from.length; i < l; i++) {
        str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }
    str = str.replace(/[^a-z0-9\-\.]/g, ' ')
        .replace(/\./g,' ')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-');
    return str;
};