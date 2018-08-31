var config = angular.module("ngBus.config", []);

config.factory("Config", function () {
    var obj = {};

    //obj.apiUrl = "http://api.futabus.co/api";
    //obj.baseApiUrl = "http://api.futabus.co";
    //obj.ApiKey = "bPXidBok0bYN6WJTCZ6b9xLcNwUGUzq6";

    //obj.apiUrl = "https://booking.futabus.vn/api";
    //obj.baseApiUrl = "https://booking.futabus.vn";
    //obj.ApiKey = "bPXidBok0bYN6WJTCZ6b9xLcNwUGUzq6";

    obj.apiUrl = "https://api.futabus.vn/api";
    obj.baseApiUrl = "https://api.futabus.vn";
    obj.ApiKey = "bPXidBok0bYN6WJTCZ6b9xLcNwUGUzq6";
    //obj.apiUrl = "https://testbooking.futabus.vn/api";
    //obj.baseApiUrl = "https://testbooking.futabus.vn";
    //obj.ApiKey = "bPXidBok0bYN6WJTCZ6b9xLcNwUGUzq6";

    //obj.apiUrl = "https://api2.futabus.vn/api";
    //obj.baseApiUrl = "https://api2.futabus.vn";
    //obj.ApiKey = "bPXidBok0bYN6WJTCZ6b9xLcNwUGUzq6";

    obj.defaultConfig = {
        datePickerLang: "vi",
        datePickerFormat: "dd-mm-yyyy",
        dateFormat: "DD-MM-YYYY",
        timeFormat: "HH:mm",
        dateTimeFormat: "HH:mm:ss DD/MM/YYYY",
        isoDateTimeFormat: "YYYY-MM-DDTHH:mm:ss.000",
        validateFormat: "/^\d{2}\-\d{2}\-\d{4}$/",
        glFormat: "YYYY-MM-DD"
    };

    obj.bookingConfig = {
        endDate: new Date(2016, 0, 15)
    };

    obj.fields = [
        //{ field: "Id", name: "#", create: false, edit: true, list: true, type: "hidden" },
        //{ field: "Type", name: "Loại", create: true, edit: true, list: true, type: 'select', option: "/Bus/GetListBusTypeOptions" },
        //{ field: "Code", name: "Biển số xe", create: true, edit: true, list: true },
        //{ field: "OperatorId", name: "Đơn vị", create: true, edit: true, list: true, type: "select", option: "/Operator/GetListOperatorOptions" },
        //{ field: "RouteId", name: "Tuyến", create: true, edit: true, list: true, type: "select", option: "/Station/GetListRouteOptions" },
        ////{ field: "Code", name: "Biển số xe", create: true, edit: true, list: true },
        //{ field: "HanKiemDinh", name: "Hạn kiểm định", create: true, edit: true, list: true, type: 'date' },
        //{ field: "HanDangKy", name: "Hạn đăng ký", create: true, edit: true, list: true, type: 'date' },
        //{ field: "HanBaoHiem", name: "Hạn bảo hiểm", create: true, edit: true, list: true, type: 'date' },
        //{ field: "PickUpWeight", name: "Trọng tải", create: true, edit: true, list: true },
        ////{ field: "PhiDoKhach", name: "Phí đỗ khách", create: true, edit: true, list: true },
        //{ field: "IsPrgUpdatedDate", name: "Ngày cập nhật", create: false, edit: false, list: true, type: 'datetime' }
    ];

    obj.errorMessages = {
        "en-US": {
            "departureDate": "Please select departure date",
            "CustName": "Please enter your full name",
            "CustEmail": "Please enter your email",
            "CustMobile": "Please enter your mobile phone number",
            "CustCountry": "Please select your country",
            "CustState": "Please select state",
            "CustCity": "Please enter your city",
            "CustAddress": "Please enter your address",
            "AcceptCondition": "Please accept with our terms and policies",
            "selectRoute": "Please select route",
            "departureTime": "Please select departure time",
            "pickUpPoint": "Please select pickup point",
            "selectSeatNum": "Please select seat"
        },
        "vi-VN": {
            "departureDate": "Vui lòng chọn ngày khởi hành",
            "CustName": "Vui lòng điền họ tên hành khách",
            "CustEmail": "Vui lòng điền địa chỉ email",
            "CustMobile": "Vui lòng điền số di động",
            "CustCountry": "Vui lòng chọn quốc gia/vùng lãnh thổ",
            "CustState": "Vui lòng chọn bang",
            "CustCity": "Vui lòng điền tỉnh/thành phố",
            "CustAddress": "Vui lòng điền địa chỉ",
            "AcceptCondition": "Vui lòng chấp nhận điều khoản đặt vé của FUTA Bus Lines",
            "selectRoute": "Vui lòng chọn tuyến",
            "departureTime": "Vui lòng chọn giờ khởi hành",
            "pickUpPoint": "Vui lòng chọn điểm lên xe",
            "selectSeatNum": "Vui lòng chọn số ghế",
            "CustSN": "Vui lòng điền CMND",
            "CustCode": "Vui lòng nhập mã KHTT"
        }
    };

    obj.minMessages = {
        "en-US": {
            "selectSeatNum": "Please select seat"
        },
        "vi-VN": {
            "selectSeatNum": "Vui lòng chọn số ghế"
        }
    };
    obj.maxMessages = {
        "en-US": {
            "selectSeatNum": "Number of selected seat is enough"
        },
        "vi-VN": {
            "selectSeatNum": "Đã chọn đủ số ghế"
        }
    }

    obj.futaNumberMessage = {
        "en-US": {
            "CustMobile": "Mobile number is wrong",
            "CustMobile2": "Second mobile number is wrong",
            "CustSN": "Passport must be number"
        },
        "vi-VN": {
            "CustMobile": "Số điện thoại phải bắt đầu bằng số 0 và chỉ có 10 đến 11 số",
            "CustMobile2": "Số điện thoại 2 phải bắt đầu bằng số 0 và chỉ có 10 đến 11 số",
            "CustSN": "Chứng minh thư phải là số"
        }
    };

    obj.emailMessage = {
        "en-US": {
            "CustEmail": "Email is wrong format"
        },
        "vi-VN": {
            "CustEmail": "Địa chỉ email không đúng",
        }
    };


    //obj.cForm = [[1, 2, 3, 4], [5, 6, 7, 8]];
    //obj.eForm = [[0, 1, 2, 3, 4], [5, 6, 7, 8]];


    return obj;
});
