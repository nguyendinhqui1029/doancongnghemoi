import { TuyenDuong } from "./tuyenduong";
import { ChiTietTuyenDuong } from "./chitiettuyenduong";
import { ChuyenXe } from "./chuyenxe";

export var ds_tuyenduong: TuyenDuong[] =
[
    {
        "id_tuyenduong":1, "name_tuyenduong":"Bạc Liêu", "bendi":"Bạc Liêu" , 
        "benden":"Sài Gòn", "loaixe":"Giường", "quangduong":"272 km", "thoigian":"06:00", 
        "sochuyen":"6 chuyến/ngày", "giave":"160.000", "giochay":"5:00(Giường)",
        "OriginCode":"BACLIEU","DestCode":"TPHCM",
        chuyenxe:[new ChuyenXe("1",[])],
        chitiet:[new ChiTietTuyenDuong(
                "Sóc Trăng", "Bạc Liêu", "08:00",
                "08:00", "015644458", 
                "024979411" ,"38 Lê Duẩn, P.3, TP.Sóc Trăng", 
                "Trần Phú, P.7, TP.Bạc Liêu","", "")
                ,
                new ChiTietTuyenDuong(
                "Bạc Liêu", "Sa Tra - Trạm Dừng", "08:00",
                "08:00", "015644458", 
                "024979411" ,"Trần Phú, P.7, TP.Bạc Liêu", 
                "H.Cái Bè, Tiền Giang","", "")
                 ]
    },
    {
        "id_tuyenduong":2, "name_tuyenduong":"Bạc Liêu", "bendi":"Bạc Liêu" , 
        "benden":"Sài Gòn", "loaixe":"Giường", "quangduong":"272 km", "thoigian":"06:00", 
        "sochuyen":"6 chuyến/ngày", "giave":"160.000", "giochay":"9:00(Giường)",
        "OriginCode":"BACLIEU","DestCode":"TPHCM",
        chuyenxe:[new ChuyenXe("2",[])],
        chitiet:[new ChiTietTuyenDuong(
                "Sóc Trăng", "Bạc Liêu", "08:00",
                "08:00", "015644458", 
                "024979411" ,"38 Lê Duẩn, P.3, TP.Sóc Trăng", 
                "Trần Phú, P.7, TP.Bạc Liêu","", "")
                ,
                new ChiTietTuyenDuong(
                "Bạc Liêu", "Sa Tra - Trạm Dừng", "08:00",
                "08:00", "015644458", 
                "024979411" ,"Trần Phú, P.7, TP.Bạc Liêu", 
                "H.Cái Bè, Tiền Giang","", "")
                 ]
    },
    {
        "id_tuyenduong":3, "name_tuyenduong":"Bạc Liêu", "bendi":"Bạc Liêu" , 
        "benden":"Sài Gòn", "loaixe":"Giường", "quangduong":"272 km", "thoigian":"06:00", 
        "sochuyen":"6 chuyến/ngày", "giave":"160.000", "giochay":"12:00(Giường)",
        "OriginCode":"BACLIEU","DestCode":"TPHCM",
        chuyenxe:[new ChuyenXe("3",[])],
        chitiet:[new ChiTietTuyenDuong(
                "Sóc Trăng", "Bạc Liêu", "08:00",
                "08:00", "015644458", 
                "024979411" ,"38 Lê Duẩn, P.3, TP.Sóc Trăng", 
                "Trần Phú, P.7, TP.Bạc Liêu","", "")
                ,
                new ChiTietTuyenDuong(
                "Bạc Liêu", "Sa Tra - Trạm Dừng", "08:00",
                "08:00", "015644458", 
                "024979411" ,"Trần Phú, P.7, TP.Bạc Liêu", 
                "H.Cái Bè, Tiền Giang","", "")
                 ]
    },
    {
        "id_tuyenduong":4, "name_tuyenduong":"Bạc Liêu", "bendi":"Bạc Liêu" , 
        "benden":"Sài Gòn", "loaixe":"Giường", "quangduong":"272 km", "thoigian":"06:00", 
        "sochuyen":"6 chuyến/ngày", "giave":"160.000", "giochay":"15:00(Giường)",
        "OriginCode":"BACLIEU","DestCode":"TPHCM",
        chuyenxe:[new ChuyenXe("4",[])],
        chitiet:[new ChiTietTuyenDuong(
                "Sóc Trăng", "Bạc Liêu", "08:00",
                "08:00", "015644458", 
                "024979411" ,"38 Lê Duẩn, P.3, TP.Sóc Trăng", 
                "Trần Phú, P.7, TP.Bạc Liêu","", "")
                ,
                new ChiTietTuyenDuong(
                "Bạc Liêu", "Sa Tra - Trạm Dừng", "08:00",
                "08:00", "015644458", 
                "024979411" ,"Trần Phú, P.7, TP.Bạc Liêu", 
                "H.Cái Bè, Tiền Giang","", "")
                 ]
    },
    {
        "id_tuyenduong":5, "name_tuyenduong":"Bạc Liêu", "bendi":"Bạc Liêu" , 
        "benden":"Sài Gòn", "loaixe":"Giường", "quangduong":"272 km", "thoigian":"06:00", 
        "sochuyen":"6 chuyến/ngày", "giave":"160.000", "giochay":"18:00(Giường)",
        "OriginCode":"BACLIEU","DestCode":"TPHCM",
        chuyenxe:[new ChuyenXe("5",[])],
        chitiet:[new ChiTietTuyenDuong(
                "Sóc Trăng", "Bạc Liêu", "08:00",
                "08:00", "015644458", 
                "024979411" ,"38 Lê Duẩn, P.3, TP.Sóc Trăng", 
                "Trần Phú, P.7, TP.Bạc Liêu","", "")
                ,
                new ChiTietTuyenDuong(
                "Bạc Liêu", "Sa Tra - Trạm Dừng", "08:00",
                "08:00", "015644458", 
                "024979411" ,"Trần Phú, P.7, TP.Bạc Liêu", 
                "H.Cái Bè, Tiền Giang","", "")
                 ]
    },
    {
        "id_tuyenduong":6, "name_tuyenduong":"Bạc Liêu", "bendi":"Bạc Liêu" , 
        "benden":"Sài Gòn", "loaixe":"Giường", "quangduong":"272 km", "thoigian":"06:00", 
        "sochuyen":"6 chuyến/ngày", "giave":"160.000", "giochay":"21:00(Giường)",
        "OriginCode":"BACLIEU","DestCode":"TPHCM",
        chuyenxe:[new ChuyenXe("6",[])],
        chitiet:[new ChiTietTuyenDuong(
                "Sóc Trăng", "Bạc Liêu", "08:00",
                "08:00", "015644458", 
                "024979411" ,"38 Lê Duẩn, P.3, TP.Sóc Trăng", 
                "Trần Phú, P.7, TP.Bạc Liêu","", "")
                ,
                new ChiTietTuyenDuong(
                "Bạc Liêu", "Sa Tra - Trạm Dừng", "08:00",
                "08:00", "015644458", 
                "024979411" ,"Trần Phú, P.7, TP.Bạc Liêu", 
                "H.Cái Bè, Tiền Giang","", "")
                 ]
    }, 
    {
        "id_tuyenduong":7, "name_tuyenduong":"Sóc Trăng", "bendi":"Sóc Trăng" , 
        "benden":"Sài Gòn", "loaixe":"Giường", "quangduong":"272 km", "thoigian":"06:00", 
        "sochuyen":"6 chuyến/ngày", "giave":"160.000", "giochay":"4:00(Giường)",
        "OriginCode":"SOCTRANG","DestCode":"TPHCM",
        chuyenxe:[new ChuyenXe("7",[])],
        chitiet:[new ChiTietTuyenDuong(
                "Bạc Liêu", "Trạm dừng chân Satra", "08:00",
                "08:00", "015644458", 
                "024979411" ,"38 Lê Duẩn, P.3, TP.Sóc Trăng", 
                "Trần Phú, P.7, TP.Bạc Liêu","", "")
                ,
                new ChiTietTuyenDuong(
                "Bạc Liêu", "Trạm dừng chân Satra", "08:00",
                "08:00", "015644458", 
                "024979411" ,"38 Lê Duẩn, P.3, TP.Sóc Trăng", 
                "Trần Phú, P.7, TP.Bạc Liêu","", "")
                 ]
    },
    {
        "id_tuyenduong":8, "name_tuyenduong":"Sóc Trăng", "bendi":"Sóc Trăng" , 
        "benden":"Sài Gòn", "loaixe":"Giường", "quangduong":"272 km", "thoigian":"06:00", 
        "sochuyen":"6 chuyến/ngày", "giave":"160.000", "giochay":"7:00(Giường)",
        "OriginCode":"SOCTRANG","DestCode":"TPHCM",
        chuyenxe:[new ChuyenXe("8",[])],
        chitiet:[new ChiTietTuyenDuong(
                "Bạc Liêu", "Trạm dừng chân Satra", "08:00",
                "08:00", "015644458", 
                "024979411" ,"38 Lê Duẩn, P.3, TP.Sóc Trăng", 
                "Trần Phú, P.7, TP.Bạc Liêu","", "")
                ,
                new ChiTietTuyenDuong(
                "Bạc Liêu", "Trạm dừng chân Satra", "08:00",
                "08:00", "015644458", 
                "024979411" ,"38 Lê Duẩn, P.3, TP.Sóc Trăng", 
                "Trần Phú, P.7, TP.Bạc Liêu","", "")
                 ]
    },
    {
        "id_tuyenduong":9, "name_tuyenduong":"Sóc Trăng", "bendi":"Sóc Trăng" , 
        "benden":"Sài Gòn", "loaixe":"Giường", "quangduong":"272 km", "thoigian":"06:00", 
        "sochuyen":"6 chuyến/ngày", "giave":"160.000", "giochay":"11:00(Giường)",
        "OriginCode":"SOCTRANG","DestCode":"TPHCM",
        chuyenxe:[new ChuyenXe("9",[])],
        chitiet:[new ChiTietTuyenDuong(
                "Bạc Liêu", "Trạm dừng chân Satra", "08:00",
                "08:00", "015644458", 
                "024979411" ,"38 Lê Duẩn, P.3, TP.Sóc Trăng", 
                "Trần Phú, P.7, TP.Bạc Liêu","", "")
                ,
                new ChiTietTuyenDuong(
                "Bạc Liêu", "Trạm dừng chân Satra", "08:00",
                "08:00", "015644458", 
                "024979411" ,"38 Lê Duẩn, P.3, TP.Sóc Trăng", 
                "Trần Phú, P.7, TP.Bạc Liêu","", "")
                 ]
    },
    {
        "id_tuyenduong":10, "name_tuyenduong":"Sóc Trăng", "bendi":"Sóc Trăng" , 
        "benden":"Sài Gòn", "loaixe":"Giường", "quangduong":"272 km", "thoigian":"06:00", 
        "sochuyen":"6 chuyến/ngày", "giave":"160.000", "giochay":"14:00(Giường)",
        "OriginCode":"SOCTRANG","DestCode":"TPHCM",
        chuyenxe:[new ChuyenXe("10",[])],
        chitiet:[new ChiTietTuyenDuong(
                "Bạc Liêu", "Trạm dừng chân Satra", "08:00",
                "08:00", "015644458", 
                "024979411" ,"38 Lê Duẩn, P.3, TP.Sóc Trăng", 
                "Trần Phú, P.7, TP.Bạc Liêu","", "")
                ,
                new ChiTietTuyenDuong(
                "Bạc Liêu", "Trạm dừng chân Satra", "08:00",
                "08:00", "015644458", 
                "024979411" ,"38 Lê Duẩn, P.3, TP.Sóc Trăng", 
                "Trần Phú, P.7, TP.Bạc Liêu","", "")
                 ]
    },
    {
        "id_tuyenduong":11, "name_tuyenduong":"Sóc Trăng", "bendi":"Sóc Trăng" , 
        "benden":"Sài Gòn", "loaixe":"Giường", "quangduong":"272 km", "thoigian":"06:00", 
        "sochuyen":"6 chuyến/ngày", "giave":"160.000", "giochay":"17:00(Giường)",
        "OriginCode":"SOCTRANG","DestCode":"TPHCM",
        chuyenxe:[new ChuyenXe("11",[])],
        chitiet:[new ChiTietTuyenDuong(
                "Bạc Liêu", "Trạm dừng chân Satra", "08:00",
                "08:00", "015644458", 
                "024979411" ,"38 Lê Duẩn, P.3, TP.Sóc Trăng", 
                "Trần Phú, P.7, TP.Bạc Liêu","", "")
                ,
                new ChiTietTuyenDuong(
                "Bạc Liêu", "Trạm dừng chân Satra", "08:00",
                "08:00", "015644458", 
                "024979411" ,"38 Lê Duẩn, P.3, TP.Sóc Trăng", 
                "Trần Phú, P.7, TP.Bạc Liêu","", "")
                 ]
    },
    {
        "id_tuyenduong":12, "name_tuyenduong":"Sóc Trăng", "bendi":"Sóc Trăng" , 
        "benden":"Sài Gòn", "loaixe":"Giường", "quangduong":"272 km", "thoigian":"06:00", 
        "sochuyen":"6 chuyến/ngày", "giave":"160.000", "giochay":"20:00(Giường)",
        "OriginCode":"SOCTRANG","DestCode":"TPHCM",
        chuyenxe:[new ChuyenXe("12",[])],
        chitiet:[new ChiTietTuyenDuong(
                "Bạc Liêu", "Trạm dừng chân Satra", "08:00",
                "08:00", "015644458", 
                "024979411" ,"38 Lê Duẩn, P.3, TP.Sóc Trăng", 
                "Trần Phú, P.7, TP.Bạc Liêu","", "")
                ,
                new ChiTietTuyenDuong(
                "Bạc Liêu", "Trạm dừng chân Satra", "08:00",
                "08:00", "015644458", 
                "024979411" ,"38 Lê Duẩn, P.3, TP.Sóc Trăng", 
                "Trần Phú, P.7, TP.Bạc Liêu","", "")
                 ]
    },
    {
        "id_tuyenduong":13, "name_tuyenduong":"Bảo Lộc", "bendi":"Bảo Lộc" , 
        "benden":"Đà Nẵng", "loaixe":"Giường", "quangduong":"756 km", "thoigian":"15:30", 
        "sochuyen":"1 chuyến/ngày", "giave":"315.000", "giochay":"9:30(Giường)",
        "OriginCode":"BAOLOC","DestCode":"DANANG",
        chuyenxe:[new ChuyenXe("13",[])],
        chitiet:[new ChiTietTuyenDuong(
                "Bảo Lộc", "Di Linh", "12:30",
                "13:30", "023364481", 
                "022212214" ,"280 Trần Phú,P.2,TP.Bảo Lộc", 
                "735 Hùng Vương,TT.Di Linh,Lâm Đồng","", "")
                ,
                new ChiTietTuyenDuong(
                "Di Linh", "Đức Trọng", "13:30",
                "14:10", "022212214", 
                "012312366" ,"735 Hùng Vương,TT.Di Linh,Lâm Đồng", 
                "Liên Nghĩa, Đức Trọng, Lâm Đồng","", "")
                ,
                new ChiTietTuyenDuong(
                    "Đức Trọng", "Cam Ranh", "14:10",
                    "17:30", "012312366", 
                    "012312311" ,"Liên Nghĩa, Đức Trọng, Lâm Đồng", 
                    "Lê Duẩn, TP.Cam Ranh, T.Khánh Hòa","", "")
                ,
                new ChiTietTuyenDuong(
                    "Cam Ranh", "Qui Nhơn", "17:30",
                    "22:30", "012312311", 
                    "02.1221.111" ,"Lê Duẩn, TP.Cam Ranh, T.Khánh Hòa", 
                    "187 Tây Sơn, TP.Qui Nhơn","", "")
                ,
                new ChiTietTuyenDuong(
                    "Qui Nhơn", "Quãng Ngãi", "22:30",
                    "02:30", "02.1221.111", 
                    "02.3311.111" ,"187 Tây Sơn, TP.Qui Nhơn", 
                    "26 Lê Thánh Tôn, Nghĩa Chánh, Quãng Ngãi","", "")
                ,
                new ChiTietTuyenDuong(
                    "Quãng Ngãi", "Đà Nẵng", "02:30",
                    "06:30", "02.3311.111", 
                    "02.3377.111" ,"26 Lê Thánh Tôn, Nghĩa Chánh, Quãng Ngãi", 
                    "202 Tôn Đức Thắng, Liên Chiểu, TP.Đà Nẵng","", "")
                 ]
    },
    {
        "id_tuyenduong":14, "name_tuyenduong":"Bảo Lộc", "bendi":"Bảo Lộc" , 
        "benden":"Huế", "loaixe":"Giường", "quangduong":"828 km", "thoigian":"19:00", 
        "sochuyen":"1 chuyến/ngày", "giave":"380.000", "giochay":"10:30(Giường)",
        "OriginCode":"BAOLOC","DestCode":"HUE",
        chuyenxe:[new ChuyenXe("14",[])],
        chitiet:[new ChiTietTuyenDuong(
                "Bảo Lộc", "Di Linh", "12:30",
                "13:30", "023364481", 
                "022212214" ,"280 Trần Phú,P.2,TP.Bảo Lộc", 
                "735 Hùng Vương,TT.Di Linh,Lâm Đồng","", "")
                ,
                new ChiTietTuyenDuong(
                "Di Linh", "Đức Trọng", "13:30",
                "14:10", "022212214", 
                "012312366" ,"735 Hùng Vương,TT.Di Linh,Lâm Đồng", 
                "Liên Nghĩa, Đức Trọng, Lâm Đồng","", "")
                ,
                new ChiTietTuyenDuong(
                    "Đức Trọng", "Cam Ranh", "14:10",
                    "17:30", "012312366", 
                    "012312311" ,"Liên Nghĩa, Đức Trọng, Lâm Đồng", 
                    "Lê Duẩn, TP.Cam Ranh, T.Khánh Hòa","", "")
                ,
                new ChiTietTuyenDuong(
                    "Cam Ranh", "Qui Nhơn", "17:30",
                    "22:30", "012312311", 
                    "02.1221.111" ,"Lê Duẩn, TP.Cam Ranh, T.Khánh Hòa", 
                    "187 Tây Sơn, TP.Qui Nhơn","", "")
                ,
                new ChiTietTuyenDuong(
                    "Qui Nhơn", "Quãng Ngãi", "22:30",
                    "02:30", "02.1221.111", 
                    "02.3311.111" ,"187 Tây Sơn, TP.Qui Nhơn", 
                    "26 Lê Thánh Tôn, Nghĩa Chánh, Quãng Ngãi","", "")
                ,
                new ChiTietTuyenDuong(
                    "Quãng Ngãi", "Đà Nẵng", "02:30",
                    "06:30", "02.3311.111", 
                    "02.3377.111" ,"26 Lê Thánh Tôn, Nghĩa Chánh, Quãng Ngãi", 
                    "202 Tôn Đức Thắng, Liên Chiểu, TP.Đà Nẵng","", "")
                ,
                new ChiTietTuyenDuong(
                    "Đà Nẵng", "Huế", "06:30",
                    "07:00", "02.3377.111", 
                    "02.2255.111" ,"202 Tôn Đức Thắng, Liên Chiểu, TP.Đà Nẵng", 
                    "97 An Dương Vương,TP.Huế,T.Thừa Thiên Huế","", "")
                 ]
    },
    {
        "id_tuyenduong":15, "name_tuyenduong":"Bến Tre", "bendi":"Bến Tre" , 
        "benden":"Sài Gòn", "loaixe":"Ghế", "quangduong":"75 km", "thoigian":"02:00", 
        "sochuyen":"4 chuyến/ngày", "giave":"70.000", "giochay":"7:00(Ghế)",
        "OriginCode":"BENTRE","DestCode":"TPHCM",
        chuyenxe:[new ChuyenXe("15",[])],
        chitiet:[new ChiTietTuyenDuong(
                "Bến Tre", "Mỹ Tho", "04:00",
                "04:00", "023364481", 
                "022212214" ,"Sơn Đông, TP.Bến Tre", 
                "209 Ấp Bắc, P.5, TP.Bến Tre","", "")
                ,
                new ChiTietTuyenDuong(
                    "Mỹ Tho", "Bến xe Miền Tây", "04:00",
                    "05:15", "022212214", 
                    "02.41141.11" ,"209 Ấp Bắc, P.5, TP.Bến Tre", 
                    "309 Kinh Dương Vương,Q.Bình Tân,TP.Hồ Chí Minh","", "")
                 ]
    },
    {
        "id_tuyenduong":16, "name_tuyenduong":"Bến Tre", "bendi":"Bến Tre" , 
        "benden":"Sài Gòn", "loaixe":"Ghế", "quangduong":"75 km", "thoigian":"02:00", 
        "sochuyen":"4 chuyến/ngày", "giave":"70.000", "giochay":"10:00(Ghế)",
        "OriginCode":"BENTRE","DestCode":"TPHCM",
        chuyenxe:[new ChuyenXe("16",[])],
        chitiet:[new ChiTietTuyenDuong(
                "Bến Tre", "Mỹ Tho", "04:00",
                "04:00", "023364481", 
                "022212214" ,"Sơn Đông, TP.Bến Tre", 
                "209 Ấp Bắc, P.5, TP.Bến Tre","", "")
                ,
                new ChiTietTuyenDuong(
                    "Mỹ Tho", "Bến xe Miền Tây", "04:00",
                    "05:15", "022212214", 
                    "02.41141.11" ,"209 Ấp Bắc, P.5, TP.Bến Tre", 
                    "309 Kinh Dương Vương,Q.Bình Tân,TP.Hồ Chí Minh","", "")
                 ]
    },
    {
        "id_tuyenduong":17, "name_tuyenduong":"Bến Tre", "bendi":"Bến Tre" , 
        "benden":"Sài Gòn", "loaixe":"Ghế", "quangduong":"75 km", "thoigian":"02:00", 
        "sochuyen":"4 chuyến/ngày", "giave":"70.000", "giochay":"13:00(Ghế)",
        "OriginCode":"BENTRE","DestCode":"TPHCM",
        chuyenxe:[new ChuyenXe("17",[])],
        chitiet:[new ChiTietTuyenDuong(
                "Bến Tre", "Mỹ Tho", "04:00",
                "04:00", "023364481", 
                "022212214" ,"Sơn Đông, TP.Bến Tre", 
                "209 Ấp Bắc, P.5, TP.Bến Tre","", "")
                ,
                new ChiTietTuyenDuong(
                    "Mỹ Tho", "Bến xe Miền Tây", "04:00",
                    "05:15", "022212214", 
                    "02.41141.11" ,"209 Ấp Bắc, P.5, TP.Bến Tre", 
                    "309 Kinh Dương Vương,Q.Bình Tân,TP.Hồ Chí Minh","", "")
                 ]
    },
    {
        "id_tuyenduong":18, "name_tuyenduong":"Bến Tre", "bendi":"Bến Tre" , 
        "benden":"Sài Gòn", "loaixe":"Ghế", "quangduong":"75 km", "thoigian":"02:00", 
        "sochuyen":"4 chuyến/ngày", "giave":"70.000", "giochay":"18:00(Ghế)",
        "OriginCode":"BENTRE","DestCode":"TPHCM",
        chuyenxe:[new ChuyenXe("18",[])],
        chitiet:[new ChiTietTuyenDuong(
                "Bến Tre", "Mỹ Tho", "04:00",
                "04:00", "023364481", 
                "022212214" ,"Sơn Đông, TP.Bến Tre", 
                "209 Ấp Bắc, P.5, TP.Bến Tre","", "")
                ,
                new ChiTietTuyenDuong(
                    "Mỹ Tho", "Bến xe Miền Tây", "04:00",
                    "05:15", "022212214", 
                    "02.41141.11" ,"209 Ấp Bắc, P.5, TP.Bến Tre", 
                    "309 Kinh Dương Vương,Q.Bình Tân,TP.Hồ Chí Minh","", "")
                 ]
    },
    {
        "id_tuyenduong":19, "name_tuyenduong":"Bến Tre", "bendi":"Bến Tre" , 
        "benden":"Sài Gòn", "loaixe":"Ghế", "quangduong":"75 km", "thoigian":"02:00", 
        "sochuyen":"4 chuyến/ngày", "giave":"70.000", "giochay":"22:00(Ghế)",
        "OriginCode":"BENTRE","DestCode":"TPHCM",
        chuyenxe:[new ChuyenXe("19",[])],
        chitiet:[new ChiTietTuyenDuong(
                "Bến Tre", "Mỹ Tho", "04:00",
                "04:00", "023364481", 
                "022212214" ,"Sơn Đông, TP.Bến Tre", 
                "209 Ấp Bắc, P.5, TP.Bến Tre","", "")
                ,
                new ChiTietTuyenDuong(
                    "Mỹ Tho", "Bến xe Miền Tây", "04:00",
                    "05:15", "022212214", 
                    "02.41141.11" ,"209 Ấp Bắc, P.5, TP.Bến Tre", 
                    "309 Kinh Dương Vương,Q.Bình Tân,TP.Hồ Chí Minh","", "")
                 ]
    },
    {
        "id_tuyenduong":20, "name_tuyenduong":"Buôn Mê Thuột", "bendi":"Buôn Mê Thuột" , 
        "benden":"Sài Gòn", "loaixe":"Giường", "quangduong":"435 km", "thoigian":"09:00", 
        "sochuyen":"5 chuyến/ngày", "giave":"240.000", "giochay":"5:00(Giường)",
        "OriginCode":"BUONMETHUOT","DestCode":"TPHCM",
        chuyenxe:[new ChuyenXe("20",[])],
        chitiet:[new ChiTietTuyenDuong(
                "Bến xe Miền Đông", "Dak Lak", "12:15",
                "12:15", "02.111.441", 
                "022212214" ,"P.26,Q.Bình Thạnh,TP.Hồ Chí Minh", 
                "127 Lê Duẩn,TP.Buôn Ma Thuột, Dak Lak","", "")
                ,
                new ChiTietTuyenDuong(
                    "Dak Lak", "Dak Nong", "12:15",
                    "15:15", "022212214", 
                    "02.41141.11" ,"127 Lê Duẩn,TP.Buôn Ma Thuột, Dak Lak", 
                    "Nghĩa Thành, Gia Nghĩa, Dak Nong","", "")
                 ]
    },
    {
        "id_tuyenduong":21, "name_tuyenduong":"Buôn Mê Thuột", "bendi":"Buôn Mê Thuột" , 
        "benden":"Sài Gòn", "loaixe":"Giường", "quangduong":"435 km", "thoigian":"09:00", 
        "sochuyen":"5 chuyến/ngày", "giave":"240.000", "giochay":"8:00(Giường)",
        "OriginCode":"BUONMETHUOT","DestCode":"TPHCM",
        chuyenxe:[new ChuyenXe("21",[])],
        chitiet:[new ChiTietTuyenDuong(
                "Bến xe Miền Đông", "Dak Lak", "12:15",
                "12:15", "02.111.441", 
                "022212214" ,"P.26,Q.Bình Thạnh,TP.Hồ Chí Minh", 
                "127 Lê Duẩn,TP.Buôn Ma Thuột, Dak Lak","", "")
                ,
                new ChiTietTuyenDuong(
                    "Dak Lak", "Dak Nong", "12:15",
                    "15:15", "022212214", 
                    "02.41141.11" ,"127 Lê Duẩn,TP.Buôn Ma Thuột, Dak Lak", 
                    "Nghĩa Thành, Gia Nghĩa, Dak Nong","", "")
                 ]
    },
    {
        "id_tuyenduong":22, "name_tuyenduong":"Buôn Mê Thuột", "bendi":"Buôn Mê Thuột" , 
        "benden":"Sài Gòn", "loaixe":"Giường", "quangduong":"435 km", "thoigian":"09:00", 
        "sochuyen":"5 chuyến/ngày", "giave":"240.000", "giochay":"11:00(Giường)",
        "OriginCode":"BUONMETHUOT","DestCode":"TPHCM",
        chuyenxe:[new ChuyenXe("22",[])],
        chitiet:[new ChiTietTuyenDuong(
                "Bến xe Miền Đông", "Dak Lak", "12:15",
                "12:15", "02.111.441", 
                "022212214" ,"P.26,Q.Bình Thạnh,TP.Hồ Chí Minh", 
                "127 Lê Duẩn,TP.Buôn Ma Thuột, Dak Lak","", "")
                ,
                new ChiTietTuyenDuong(
                    "Dak Lak", "Dak Nong", "12:15",
                    "15:15", "022212214", 
                    "02.41141.11" ,"127 Lê Duẩn,TP.Buôn Ma Thuột, Dak Lak", 
                    "Nghĩa Thành, Gia Nghĩa, Dak Nong","", "")
                 ]
    },
    {
        "id_tuyenduong":23, "name_tuyenduong":"Buôn Mê Thuột", "bendi":"Buôn Mê Thuột" , 
        "benden":"Sài Gòn", "loaixe":"Giường", "quangduong":"435 km", "thoigian":"09:00", 
        "sochuyen":"5 chuyến/ngày", "giave":"240.000", "giochay":"14:00(Giường)",
        "OriginCode":"BUONMETHUOT","DestCode":"TPHCM",
        chuyenxe:[new ChuyenXe("23",[])],
        chitiet:[new ChiTietTuyenDuong(
                "Bến xe Miền Đông", "Dak Lak", "12:15",
                "12:15", "02.111.441", 
                "022212214" ,"P.26,Q.Bình Thạnh,TP.Hồ Chí Minh", 
                "127 Lê Duẩn,TP.Buôn Ma Thuột, Dak Lak","", "")
                ,
                new ChiTietTuyenDuong(
                    "Dak Lak", "Dak Nong", "12:15",
                    "15:15", "022212214", 
                    "02.41141.11" ,"127 Lê Duẩn,TP.Buôn Ma Thuột, Dak Lak", 
                    "Nghĩa Thành, Gia Nghĩa, Dak Nong","", "")
                 ]
    },
    {
        "id_tuyenduong":24, "name_tuyenduong":"Buôn Mê Thuột", "bendi":"Buôn Mê Thuột" , 
        "benden":"Sài Gòn", "loaixe":"Giường", "quangduong":"435 km", "thoigian":"09:00", 
        "sochuyen":"5 chuyến/ngày", "giave":"240.000", "giochay":"18:00(Giường)",
        "OriginCode":"BUONMETHUOT","DestCode":"TPHCM",
        chuyenxe:[new ChuyenXe("24",[])],
        chitiet:[new ChiTietTuyenDuong(
                "Bến xe Miền Đông", "Dak Lak", "12:15",
                "12:15", "02.111.441", 
                "022212214" ,"P.26,Q.Bình Thạnh,TP.Hồ Chí Minh", 
                "127 Lê Duẩn,TP.Buôn Ma Thuột, Dak Lak","", "")
                ,
                new ChiTietTuyenDuong(
                    "Dak Lak", "Dak Nong", "12:15",
                    "15:15", "022212214", 
                    "02.41141.11" ,"127 Lê Duẩn,TP.Buôn Ma Thuột, Dak Lak", 
                    "Nghĩa Thành, Gia Nghĩa, Dak Nong","", "")
                 ]
    },
    {
        "id_tuyenduong":25, "name_tuyenduong":"Buôn Mê Thuột", "bendi":"Buôn Mê Thuột" , 
        "benden":"Nha Trang", "loaixe":"Giường", "quangduong":"300 km", "thoigian":"04:00", 
        "sochuyen":"1 chuyến/ngày", "giave":"140.000", "giochay":"9:30(Giường)",
        "OriginCode":"BUONMETHUOT","DestCode":"NHATRANG",
        chuyenxe:[new ChuyenXe("25",[])],
        chitiet:[new ChiTietTuyenDuong(
                "Bến xe Miền Đông", "Dak Lak", "12:15",
                "12:15", "02.111.441", 
                "022212214" ,"P.26,Q.Bình Thạnh,TP.Hồ Chí Minh", 
                "127 Lê Duẩn,TP.Buôn Ma Thuột, Dak Lak","", "")
                ,
                new ChiTietTuyenDuong(
                    "Dak Lak", "Dak Nong", "12:15",
                    "15:15", "022212214", 
                    "02.41141.11" ,"127 Lê Duẩn,TP.Buôn Ma Thuột, Dak Lak", 
                    "Nghĩa Thành, Gia Nghĩa, Dak Nong","", "")
                 ]
    },
    {
        "id_tuyenduong":26, "name_tuyenduong":"Sài Gòn", "bendi":"Sài Gòn" , 
        "benden":"Đà Lạt", "loaixe":"Giường", "quangduong":"320 km", "thoigian":"08:00", 
        "sochuyen":"7 chuyến/ngày", "giave":"220.000", "giochay":"5:00(Giường)",
        "OriginCode":"TPHCM","DestCode":"DALAT",
        chuyenxe:[new ChuyenXe("26",[])],
        chitiet:[new ChiTietTuyenDuong(
                "Xa lộ Hà Nội", "Bến xe Nha Trang", "10:00",
                "10:00", "02.111.441", 
                "0.233122.12" ,"P.Hiệp Phú,Q.9,TP.Hồ Chí Minh", 
                "127 Lê Duẩn,TP.Nha Trang","", "")
                ,
                new ChiTietTuyenDuong(
                    "Bến xe Nha Trang", "Bến xe An Sương", "10:00",
                    "10:00", "0.233122.12", 
                    "02.41141.11" ,"127 Lê Duẩn,TP.Nha Trang", 
                    "Bà Điểm, Hooc Môn, TP.Hồ Chí Minh","", "")
                 ]
    },
    {
        "id_tuyenduong":27, "name_tuyenduong":"Sài Gòn", "bendi":"Sài Gòn" , 
        "benden":"Đà Lạt", "loaixe":"Giường", "quangduong":"320 km", "thoigian":"08:00", 
        "sochuyen":"7 chuyến/ngày", "giave":"220.000", "giochay":"8:00(Giường)",
        "OriginCode":"TPHCM","DestCode":"DALAT",
        chuyenxe:[new ChuyenXe("27",[])],
        chitiet:[new ChiTietTuyenDuong(
                "Xa lộ Hà Nội", "Bến xe Nha Trang", "10:00",
                "10:00", "02.111.441", 
                "0.233122.12" ,"P.Hiệp Phú,Q.9,TP.Hồ Chí Minh", 
                "127 Lê Duẩn,TP.Nha Trang","", "")
                ,
                new ChiTietTuyenDuong(
                    "Bến xe Nha Trang", "Bến xe An Sương", "10:00",
                    "10:00", "0.233122.12", 
                    "02.41141.11" ,"127 Lê Duẩn,TP.Nha Trang", 
                    "Bà Điểm, Hooc Môn, TP.Hồ Chí Minh","", "")
                 ]
    },
    {
        "id_tuyenduong":28, "name_tuyenduong":"Sài Gòn", "bendi":"Sài Gòn" , 
        "benden":"Đà Lạt", "loaixe":"Giường", "quangduong":"320 km", "thoigian":"08:00", 
        "sochuyen":"7 chuyến/ngày", "giave":"220.000", "giochay":"11:00(Giường)",
        "OriginCode":"TPHCM","DestCode":"DALAT",
        chuyenxe:[new ChuyenXe("28",[])],
        chitiet:[new ChiTietTuyenDuong(
                "Xa lộ Hà Nội", "Bến xe Nha Trang", "10:00",
                "10:00", "02.111.441", 
                "0.233122.12" ,"P.Hiệp Phú,Q.9,TP.Hồ Chí Minh", 
                "127 Lê Duẩn,TP.Nha Trang","", "")
                ,
                new ChiTietTuyenDuong(
                    "Bến xe Nha Trang", "Bến xe An Sương", "10:00",
                    "10:00", "0.233122.12", 
                    "02.41141.11" ,"127 Lê Duẩn,TP.Nha Trang", 
                    "Bà Điểm, Hooc Môn, TP.Hồ Chí Minh","", "")
                 ]
    },
    {
        "id_tuyenduong":29, "name_tuyenduong":"Sài Gòn", "bendi":"Sài Gòn" , 
        "benden":"Đà Lạt", "loaixe":"Giường", "quangduong":"320 km", "thoigian":"08:00", 
        "sochuyen":"7 chuyến/ngày", "giave":"220.000", "giochay":"14:00(Giường)",
        "OriginCode":"TPHCM","DestCode":"DALAT",
        chuyenxe:[new ChuyenXe("29",[])],
        chitiet:[new ChiTietTuyenDuong(
                "Xa lộ Hà Nội", "Bến xe Nha Trang", "10:00",
                "10:00", "02.111.441", 
                "0.233122.12" ,"P.Hiệp Phú,Q.9,TP.Hồ Chí Minh", 
                "127 Lê Duẩn,TP.Nha Trang","", "")
                ,
                new ChiTietTuyenDuong(
                    "Bến xe Nha Trang", "Bến xe An Sương", "10:00",
                    "10:00", "0.233122.12", 
                    "02.41141.11" ,"127 Lê Duẩn,TP.Nha Trang", 
                    "Bà Điểm, Hooc Môn, TP.Hồ Chí Minh","", "")
                 ]
    },
    {
        "id_tuyenduong":30, "name_tuyenduong":"Sài Gòn", "bendi":"Sài Gòn" , 
        "benden":"Đà Lạt", "loaixe":"Giường", "quangduong":"320 km", "thoigian":"08:00", 
        "sochuyen":"7 chuyến/ngày", "giave":"220.000", "giochay":"16:00(Giường)",
        "OriginCode":"TPHCM","DestCode":"DALAT",
        chuyenxe:[new ChuyenXe("30",[])],
        chitiet:[new ChiTietTuyenDuong(
                "Xa lộ Hà Nội", "Bến xe Nha Trang", "10:00",
                "10:00", "02.111.441", 
                "0.233122.12" ,"P.Hiệp Phú,Q.9,TP.Hồ Chí Minh", 
                "127 Lê Duẩn,TP.Nha Trang","", "")
                ,
                new ChiTietTuyenDuong(
                    "Bến xe Nha Trang", "Bến xe An Sương", "10:00",
                    "10:00", "0.233122.12", 
                    "02.41141.11" ,"127 Lê Duẩn,TP.Nha Trang", 
                    "Bà Điểm, Hooc Môn, TP.Hồ Chí Minh","", "")
                 ]
    },
    {
        "id_tuyenduong":31, "name_tuyenduong":"Sài Gòn", "bendi":"Sài Gòn" , 
        "benden":"Đà Lạt", "loaixe":"Giường", "quangduong":"320 km", "thoigian":"08:00", 
        "sochuyen":"7 chuyến/ngày", "giave":"220.000", "giochay":"20:00(Giường)",
        "OriginCode":"TPHCM","DestCode":"DALAT",
        chuyenxe:[new ChuyenXe("31",[])],
        chitiet:[new ChiTietTuyenDuong(
                "Xa lộ Hà Nội", "Bến xe Nha Trang", "10:00",
                "10:00", "02.111.441", 
                "0.233122.12" ,"P.Hiệp Phú,Q.9,TP.Hồ Chí Minh", 
                "127 Lê Duẩn,TP.Nha Trang","", "")
                ,
                new ChiTietTuyenDuong(
                    "Bến xe Nha Trang", "Bến xe An Sương", "10:00",
                    "10:00", "0.233122.12", 
                    "02.41141.11" ,"127 Lê Duẩn,TP.Nha Trang", 
                    "Bà Điểm, Hooc Môn, TP.Hồ Chí Minh","", "")
                 ]
    },
    {
        "id_tuyenduong":32, "name_tuyenduong":"Sài Gòn", "bendi":"Sài Gòn" , 
        "benden":"Đà Lạt", "loaixe":"Giường", "quangduong":"320 km", "thoigian":"08:00", 
        "sochuyen":"7 chuyến/ngày", "giave":"220.000", "giochay":"23:00(Giường)",
        "OriginCode":"TPHCM","DestCode":"DALAT",
        chuyenxe:[new ChuyenXe("32",[])],
        chitiet:[new ChiTietTuyenDuong(
                "Xa lộ Hà Nội", "Bến xe Nha Trang", "10:00",
                "10:00", "02.111.441", 
                "0.233122.12" ,"P.Hiệp Phú,Q.9,TP.Hồ Chí Minh", 
                "127 Lê Duẩn,TP.Nha Trang","", "")
                ,
                new ChiTietTuyenDuong(
                    "Bến xe Nha Trang", "Bến xe An Sương", "10:00",
                    "10:00", "0.233122.12", 
                    "02.41141.11" ,"127 Lê Duẩn,TP.Nha Trang", 
                    "Bà Điểm, Hooc Môn, TP.Hồ Chí Minh","", "")
                 ]
    },
     {
        "id_tuyenduong":33, "name_tuyenduong":"Sài Gòn", "bendi":"Sài Gòn" , 
        "benden":"Buôn Mê Thuột", "loaixe":"Giường", "quangduong":"435 km", "thoigian":"09:00", 
        "sochuyen":"5 chuyến/ngày", "giave":"240.000", "giochay":"5:00(Giường)",
        "OriginCode":"TPHCM","DestCode":"BUONMETHUOT",
        chuyenxe:[new ChuyenXe("33",[])],
        chitiet:[new ChiTietTuyenDuong(
                "Bến xe Miền Đông", "Dak Lak", "12:15",
                "12:15", "02.111.441", 
                "022212214" ,"P.26,Q.Bình Thạnh,TP.Hồ Chí Minh", 
                "127 Lê Duẩn,TP.Buôn Ma Thuột, Dak Lak","", "")
                
                 ]
    },
    {
        "id_tuyenduong":34, "name_tuyenduong":"Sài Gòn", "bendi":"Sài Gòn" , 
        "benden":"Buôn Mê Thuột", "loaixe":"Giường", "quangduong":"435 km", "thoigian":"09:00", 
        "sochuyen":"5 chuyến/ngày", "giave":"240.000", "giochay":"8:00(Giường)",
        "OriginCode":"TPHCM","DestCode":"BUONMETHUOT",
        chuyenxe:[new ChuyenXe("34",[])],
        chitiet:[new ChiTietTuyenDuong(
                "Bến xe Miền Đông", "Dak Lak", "12:15",
                "12:15", "02.111.441", 
                "022212214" ,"P.26,Q.Bình Thạnh,TP.Hồ Chí Minh", 
                "127 Lê Duẩn,TP.Buôn Ma Thuột, Dak Lak","", "")
                
                 ]
    },
    {
        "id_tuyenduong":35, "name_tuyenduong":"Sài Gòn", "bendi":"Sài Gòn" , 
        "benden":"Buôn Mê Thuột", "loaixe":"Giường", "quangduong":"435 km", "thoigian":"09:00", 
        "sochuyen":"5 chuyến/ngày", "giave":"240.000", "giochay":"11:00(Giường)",
        "OriginCode":"TPHCM","DestCode":"BUONMETHUOT",
        chuyenxe:[new ChuyenXe("35",[])],
        chitiet:[new ChiTietTuyenDuong(
                "Bến xe Miền Đông", "Dak Lak", "12:15",
                "12:15", "02.111.441", 
                "022212214" ,"P.26,Q.Bình Thạnh,TP.Hồ Chí Minh", 
                "127 Lê Duẩn,TP.Buôn Ma Thuột, Dak Lak","", "")
                
                 ]
    },
    {
        "id_tuyenduong":36, "name_tuyenduong":"Sài Gòn", "bendi":"Sài Gòn" , 
        "benden":"Buôn Mê Thuột", "loaixe":"Giường", "quangduong":"435 km", "thoigian":"09:00", 
        "sochuyen":"5 chuyến/ngày", "giave":"240.000", "giochay":"15:00(Giường)",
        "OriginCode":"TPHCM","DestCode":"BUONMETHUOT",
        chuyenxe:[new ChuyenXe("36",[])],
        chitiet:[new ChiTietTuyenDuong(
                "Bến xe Miền Đông", "Dak Lak", "12:15",
                "12:15", "02.111.441", 
                "022212214" ,"P.26,Q.Bình Thạnh,TP.Hồ Chí Minh", 
                "127 Lê Duẩn,TP.Buôn Ma Thuột, Dak Lak","", "")
                
                 ]
    },
    {
        "id_tuyenduong":37, "name_tuyenduong":"Sài Gòn", "bendi":"Sài Gòn" , 
        "benden":"Buôn Mê Thuột", "loaixe":"Giường", "quangduong":"435 km", "thoigian":"09:00", 
        "sochuyen":"5 chuyến/ngày", "giave":"240.000", "giochay":"22:00(Giường)",
        "OriginCode":"TPHCM","DestCode":"BUONMETHUOT",
        chuyenxe:[new ChuyenXe("37",[])],
        chitiet:[new ChiTietTuyenDuong(
                "Bến xe Miền Đông", "Dak Lak", "12:15",
                "12:15", "02.111.441", 
                "022212214" ,"P.26,Q.Bình Thạnh,TP.Hồ Chí Minh", 
                "127 Lê Duẩn,TP.Buôn Ma Thuột, Dak Lak","", "")
                
                 ]
    },
    {
        "id_tuyenduong":38, "name_tuyenduong":"Sài Gòn", "bendi":"Sài Gòn" , 
        "benden":"Nha Trang", "loaixe":"Giường", "quangduong":"427 km", "thoigian":"12:00", 
        "sochuyen":"7 chuyến/ngày", "giave":"225.000", "giochay":"6:00(Giường)",
        "OriginCode":"TPHCM","DestCode":"NHATRANG",
        chuyenxe:[new ChuyenXe("38",[])],
        chitiet:[new ChiTietTuyenDuong(
                "Bến xe Miền Đông", "Cam Ranh", "08:00",
                "17:15", "02.111.441", 
                "022212214" ,"P.26,Q.Bình Thạnh,TP.Hồ Chí Minh", 
                "127 Lê Duẩn,TP.Cam ranh,Khánh Hòa","", "")
                ,
                new ChiTietTuyenDuong(
                    "Cam Ranh", "BX Phía Nam", "17:15",
                    "19:15", "022212214", 
                    "02227784" ,"127 Lê Duẩn,TP.Cam ranh,Khánh Hòa", 
                    "23/10 TP.Nha Trang","", "")
                 ]
    },
    {
        "id_tuyenduong":39, "name_tuyenduong":"Sài Gòn", "bendi":"Sài Gòn" , 
        "benden":"Nha Trang", "loaixe":"Giường", "quangduong":"427 km", "thoigian":"12:00", 
        "sochuyen":"7 chuyến/ngày", "giave":"225.000", "giochay":"8:00(Giường)",
        "OriginCode":"TPHCM","DestCode":"NHATRANG",
        chuyenxe:[new ChuyenXe("39",[])],
        chitiet:[new ChiTietTuyenDuong(
                "Bến xe Miền Đông", "Cam Ranh", "08:00",
                "17:15", "02.111.441", 
                "022212214" ,"P.26,Q.Bình Thạnh,TP.Hồ Chí Minh", 
                "127 Lê Duẩn,TP.Cam ranh,Khánh Hòa","", "")
                ,
                new ChiTietTuyenDuong(
                    "Cam Ranh", "BX Phía Nam", "17:15",
                    "19:15", "022212214", 
                    "02227784" ,"127 Lê Duẩn,TP.Cam ranh,Khánh Hòa", 
                    "23/10 TP.Nha Trang","", "")
                 ]
    },
    {
        "id_tuyenduong":40, "name_tuyenduong":"Sài Gòn", "bendi":"Sài Gòn" , 
        "benden":"Nha Trang", "loaixe":"Giường", "quangduong":"427 km", "thoigian":"12:00", 
        "sochuyen":"7 chuyến/ngày", "giave":"225.000", "giochay":"10:00(Giường)",
        "OriginCode":"TPHCM","DestCode":"NHATRANG",
        chuyenxe:[new ChuyenXe("40",[])],
        chitiet:[new ChiTietTuyenDuong(
                "Bến xe Miền Đông", "Cam Ranh", "08:00",
                "17:15", "02.111.441", 
                "022212214" ,"P.26,Q.Bình Thạnh,TP.Hồ Chí Minh", 
                "127 Lê Duẩn,TP.Cam ranh,Khánh Hòa","", "")
                ,
                new ChiTietTuyenDuong(
                    "Cam Ranh", "BX Phía Nam", "17:15",
                    "19:15", "022212214", 
                    "02227784" ,"127 Lê Duẩn,TP.Cam ranh,Khánh Hòa", 
                    "23/10 TP.Nha Trang","", "")
                 ]
    },
    {
        "id_tuyenduong":41, "name_tuyenduong":"Sài Gòn", "bendi":"Sài Gòn" , 
        "benden":"Nha Trang", "loaixe":"Giường", "quangduong":"427 km", "thoigian":"12:00", 
        "sochuyen":"7 chuyến/ngày", "giave":"225.000", "giochay":"12:00(Giường)",
        "OriginCode":"TPHCM","DestCode":"NHATRANG",
        chuyenxe:[new ChuyenXe("41",[])],
        chitiet:[new ChiTietTuyenDuong(
                "Bến xe Miền Đông", "Cam Ranh", "08:00",
                "17:15", "02.111.441", 
                "022212214" ,"P.26,Q.Bình Thạnh,TP.Hồ Chí Minh", 
                "127 Lê Duẩn,TP.Cam ranh,Khánh Hòa","", "")
                ,
                new ChiTietTuyenDuong(
                    "Cam Ranh", "BX Phía Nam", "17:15",
                    "19:15", "022212214", 
                    "02227784" ,"127 Lê Duẩn,TP.Cam ranh,Khánh Hòa", 
                    "23/10 TP.Nha Trang","", "")
                 ]
    },
    {
        "id_tuyenduong":42, "name_tuyenduong":"Sài Gòn", "bendi":"Sài Gòn" , 
        "benden":"Nha Trang", "loaixe":"Giường", "quangduong":"427 km", "thoigian":"12:00", 
        "sochuyen":"7 chuyến/ngày", "giave":"225.000", "giochay":"14:00(Giường)",
        "OriginCode":"TPHCM","DestCode":"NHATRANG",
        chuyenxe:[new ChuyenXe("42",[])],
        chitiet:[new ChiTietTuyenDuong(
                "Bến xe Miền Đông", "Cam Ranh", "08:00",
                "17:15", "02.111.441", 
                "022212214" ,"P.26,Q.Bình Thạnh,TP.Hồ Chí Minh", 
                "127 Lê Duẩn,TP.Cam ranh,Khánh Hòa","", "")
                ,
                new ChiTietTuyenDuong(
                    "Cam Ranh", "BX Phía Nam", "17:15",
                    "19:15", "022212214", 
                    "02227784" ,"127 Lê Duẩn,TP.Cam ranh,Khánh Hòa", 
                    "23/10 TP.Nha Trang","", "")
                 ]
    },
    {
        "id_tuyenduong":43, "name_tuyenduong":"Sài Gòn", "bendi":"Sài Gòn" , 
        "benden":"Nha Trang", "loaixe":"Giường", "quangduong":"427 km", "thoigian":"12:00", 
        "sochuyen":"7 chuyến/ngày", "giave":"225.000", "giochay":"18:00(Giường)",
        "OriginCode":"TPHCM","DestCode":"NHATRANG",
        chuyenxe:[new ChuyenXe("43",[])],
        chitiet:[new ChiTietTuyenDuong(
                "Bến xe Miền Đông", "Cam Ranh", "08:00",
                "17:15", "02.111.441", 
                "022212214" ,"P.26,Q.Bình Thạnh,TP.Hồ Chí Minh", 
                "127 Lê Duẩn,TP.Cam ranh,Khánh Hòa","", "")
                ,
                new ChiTietTuyenDuong(
                    "Cam Ranh", "BX Phía Nam", "17:15",
                    "19:15", "022212214", 
                    "02227784" ,"127 Lê Duẩn,TP.Cam ranh,Khánh Hòa", 
                    "23/10 TP.Nha Trang","", "")
                 ]
    },
    {
        "id_tuyenduong":44, "name_tuyenduong":"Sài Gòn", "bendi":"Sài Gòn" , 
        "benden":"Nha Trang", "loaixe":"Giường", "quangduong":"427 km", "thoigian":"12:00", 
        "sochuyen":"7 chuyến/ngày", "giave":"225.000", "giochay":"22:00(Giường)",
        "OriginCode":"TPHCM","DestCode":"NHATRANG",
        chuyenxe:[new ChuyenXe("44",[])],
        chitiet:[new ChiTietTuyenDuong(
                "Bến xe Miền Đông", "Cam Ranh", "08:00",
                "17:15", "02.111.441", 
                "022212214" ,"P.26,Q.Bình Thạnh,TP.Hồ Chí Minh", 
                "127 Lê Duẩn,TP.Cam ranh,Khánh Hòa","", "")
                ,
                new ChiTietTuyenDuong(
                    "Cam Ranh", "BX Phía Nam", "17:15",
                    "19:15", "022212214", 
                    "02227784" ,"127 Lê Duẩn,TP.Cam ranh,Khánh Hòa", 
                    "23/10 TP.Nha Trang","", "")
                 ]
    },
    {
        "id_tuyenduong":45, "name_tuyenduong":"Sài Gòn", "bendi":"Sài Gòn" , 
        "benden":"Phan Thiết", "loaixe":"Giường", "quangduong":"203 km", "thoigian":"06:00", 
        "sochuyen":"3 chuyến/ngày", "giave":"135.000", "giochay":"9:00(Giường)",
        "OriginCode":"TPHCM","DestCode":"PHANTHIET",
        chuyenxe:[new ChuyenXe("45",[])],
        chitiet:[new ChiTietTuyenDuong(
                "Xa Lộ Hà Nội", "Bến xe Miền Đông", "07:15",
                "07:15", "02.111.441", 
                "02.2212.214" ,"P.Hiệp Phú,Q.9,TP.Hồ Chí Minh", 
                "P.26,Q.Bình Thạnh,TP.Hồ Chí Minh","", "")
                ,
                new ChiTietTuyenDuong(
                    "Bến xe Miền Đông", "BX Phan Thiết", "07:15",
                    "19:15", "02.2212.214", 
                    "02.227.784" ,"P.26,Q.Bình Thạnh,TP.Hồ Chí Minh", 
                    "P.Phú Trinh,TP.Phan Thiết, T.Bình Thuận","", "")
                 ]
    },
    {
        "id_tuyenduong":46, "name_tuyenduong":"Sài Gòn", "bendi":"Sài Gòn" , 
        "benden":"Phan Thiết", "loaixe":"Giường", "quangduong":"203 km", "thoigian":"06:00", 
        "sochuyen":"3 chuyến/ngày", "giave":"135.000", "giochay":"13:00(Giường)",
        "OriginCode":"TPHCM","DestCode":"PHANTHIET",
        chuyenxe:[new ChuyenXe("46",[])],
        chitiet:[new ChiTietTuyenDuong(
                "Xa Lộ Hà Nội", "Bến xe Miền Đông", "07:15",
                "07:15", "02.111.441", 
                "02.2212.214" ,"P.Hiệp Phú,Q.9,TP.Hồ Chí Minh", 
                "P.26,Q.Bình Thạnh,TP.Hồ Chí Minh","", "")
                ,
                new ChiTietTuyenDuong(
                    "Bến xe Miền Đông", "BX Phan Thiết", "07:15",
                    "19:15", "02.2212.214", 
                    "02.227.784" ,"P.26,Q.Bình Thạnh,TP.Hồ Chí Minh", 
                    "P.Phú Trinh,TP.Phan Thiết, T.Bình Thuận","", "")
                 ]
    },
    {
        "id_tuyenduong":47, "name_tuyenduong":"Sài Gòn", "bendi":"Sài Gòn" , 
        "benden":"Phan Thiết", "loaixe":"Giường", "quangduong":"203 km", "thoigian":"06:00", 
        "sochuyen":"3 chuyến/ngày", "giave":"135.000", "giochay":"18:00(Giường)",
        "OriginCode":"TPHCM","DestCode":"PHANTHIET",
        chuyenxe:[new ChuyenXe("47",[])],
        chitiet:[new ChiTietTuyenDuong(
                "Xa Lộ Hà Nội", "Bến xe Miền Đông", "07:15",
                "07:15", "02.111.441", 
                "02.2212.214" ,"P.Hiệp Phú,Q.9,TP.Hồ Chí Minh", 
                "P.26,Q.Bình Thạnh,TP.Hồ Chí Minh","", "")
                ,
                new ChiTietTuyenDuong(
                    "Bến xe Miền Đông", "BX Phan Thiết", "07:15",
                    "19:15", "02.2212.214", 
                    "02.227.784" ,"P.26,Q.Bình Thạnh,TP.Hồ Chí Minh", 
                    "P.Phú Trinh,TP.Phan Thiết, T.Bình Thuận","", "")
                 ]
    },
    {
        "id_tuyenduong":48, "name_tuyenduong":"Sài Gòn", "bendi":"Sài Gòn" , 
        "benden":"Cam Ranh", "loaixe":"Giường", "quangduong":"350 km", "thoigian":"09:00", 
        "sochuyen":"1 chuyến/ngày", "giave":"200.000", "giochay":"11:00(Giường)",
        "OriginCode":"TPHCM","DestCode":"CAMRANH",
        chuyenxe:[new ChuyenXe("48",[])],
        chitiet:[new ChiTietTuyenDuong(
                "Xa Lộ Hà Nội", "Bến xe Miền Đông", "07:15",
                "07:15", "02.111.441", 
                "02.2212.214" ,"P.Hiệp Phú,Q.9,TP.Hồ Chí Minh", 
                "P.26,Q.Bình Thạnh,TP.Hồ Chí Minh","", "")
                ,
                new ChiTietTuyenDuong(
                    "Bến xe Miền Đông", "BX Cam Ranh", "07:15",
                    "19:15", "02.2212.214", 
                    "02.227.784" ,"P.26,Q.Bình Thạnh,TP.Hồ Chí Minh", 
                    "P.Phú Trinh,TP.Cam Ranh, T.Khánh Hòa","", "")
                 ]
    },
    {
        "id_tuyenduong":49, "name_tuyenduong":"Nha Trang", "bendi":"Nha Trang" , 
        "benden":"Sài Gòn", "loaixe":"Giường", "quangduong":"429 km", "thoigian":"12:00", 
        "sochuyen":"2 chuyến/ngày", "giave":"225.000", "giochay":"8:00(Giường)",
        "OriginCode":"NHATRANG","DestCode":"TPHCM",
        chuyenxe:[new ChuyenXe("49",[])],
        chitiet:[new ChiTietTuyenDuong(
                "BX Phía Nam", "Cam Ranh", "08:00",
                "08:30", "02.111.441", 
                "02.2212.214" ,"23/10 TP.Nha Trang", 
                "P.Phú Trinh,TP.Cam Ranh, T.Khánh Hòa","", "")
                ,
                new ChiTietTuyenDuong(
                    "Cam Ranh", "Suối Linh", "08:30",
                    "18:00", "02.2212.214", 
                    "02.227.784" ,"P.26,Q.Bình Thạnh,TP.Hồ Chí Minh", 
                    "TP.Biên Hòa,T.Đồng Nai","", "")
                ,
                new ChiTietTuyenDuong(
                    "Suối Linh", "Xa Lộ Hà Nội", "18:00",
                    "18:15", "02.227.784", 
                    "02.227.111" , "TP.Biên Hòa,T.Đồng Nai", 
                    "P.Hiệp Phú,Q.9,TP.Hồ Chí Minh","", "")
                ,
                new ChiTietTuyenDuong(
                    "Xa Lộ Hà Nội", "Bến xe Miền Đông", "18:15",
                    "19:00",  "02.227.111", 
                    "02.2212.212" ,"P.Hiệp Phú,Q.9,TP.Hồ Chí Minh", 
                    "P.26,Q.Bình Thạnh,TP.Hồ Chí Minh","", "")
                 ]
    },
    {
        "id_tuyenduong":50, "name_tuyenduong":"Nha Trang", "bendi":"Nha Trang" , 
        "benden":"Sài Gòn", "loaixe":"Giường", "quangduong":"429 km", "thoigian":"12:00", 
        "sochuyen":"2 chuyến/ngày", "giave":"225.000", "giochay":"15:00(Giường)",
        "OriginCode":"NHATRANG","DestCode":"TPHCM",
        chuyenxe:[new ChuyenXe("50",[])],
        chitiet:[new ChiTietTuyenDuong(
                "BX Phía Nam", "Cam Ranh", "08:00",
                "08:30", "02.111.441", 
                "02.2212.214" ,"23/10 TP.Nha Trang", 
                "P.Phú Trinh,TP.Cam Ranh, T.Khánh Hòa","", "")
                ,
                new ChiTietTuyenDuong(
                    "Cam Ranh", "Suối Linh", "08:30",
                    "18:00", "02.2212.214", 
                    "02.227.784" ,"P.26,Q.Bình Thạnh,TP.Hồ Chí Minh", 
                    "TP.Biên Hòa,T.Đồng Nai","", "")
                ,
                new ChiTietTuyenDuong(
                    "Suối Linh", "Xa Lộ Hà Nội", "18:00",
                    "18:15", "02.227.784", 
                    "02.227.111" , "TP.Biên Hòa,T.Đồng Nai", 
                    "P.Hiệp Phú,Q.9,TP.Hồ Chí Minh","", "")
                ,
                new ChiTietTuyenDuong(
                    "Xa Lộ Hà Nội", "Bến xe Miền Đông", "18:15",
                    "19:00",  "02.227.111", 
                    "02.2212.212" ,"P.Hiệp Phú,Q.9,TP.Hồ Chí Minh", 
                    "P.26,Q.Bình Thạnh,TP.Hồ Chí Minh","", "")
                 ]
    },
    {
        "id_tuyenduong":51, "name_tuyenduong":"Nha Trang", "bendi":"Nha Trang" , 
        "benden":"Đà Lạt", "loaixe":"Giường", "quangduong":"138 km", "thoigian":"04:00", 
        "sochuyen":"1 chuyến/ngày", "giave":"140.000", "giochay":"5:00(Giường)",
        "OriginCode":"NHATRANG","DestCode":"DALAT",
        chuyenxe:[new ChuyenXe("51",[])],
        chitiet:[new ChiTietTuyenDuong(
                "7 Hoàng Hoa Thám", "Đà Lạt", "07:00",
                "08:30", "02.111.441", 
                "02.2212.214" ,"7Hoàng Hoa Thám, TP.Nha Trang", 
                "1 Tô Hiến Thành, P.3, TP.Đà Lạt","", "")
                 ]
    },
    {
        "id_tuyenduong":52, "name_tuyenduong":"Nha Trang", "bendi":"Nha Trang" , 
        "benden":"Đà Nẵng", "loaixe":"Giường", "quangduong":"545 km", "thoigian":"12:00", 
        "sochuyen":"1 chuyến/ngày", "giave":"235.000", "giochay":"6:00(Giường)",
        "OriginCode":"NHATRANG","DestCode":"DANANG",
        chuyenxe:[new ChuyenXe("52",[])],
        chitiet:[new ChiTietTuyenDuong(
                "7 Hoàng Hoa Thám", "Đà Nẵng", "19:00",
                "19:30", "02.111.441", 
                "02.2212.214" ,"7Hoàng Hoa Thám, TP.Nha Trang", 
                "203 Tôn Đức Thắng,Q.Liên Chiểu,TP.Đà Nẵng","", "")
                ,
                new ChiTietTuyenDuong(
                    "Đà Nẵng", "Ninh Hòa", "19:30",
                    "22:30", "02.2212.214", 
                    "02.331.214" ,"203 Tôn Đức Thắng,Q.Liên Chiểu,TP.Đà Nẵng", 
                    "Ninh Giang,TX Ninh Hòa","", "")
               
                 ]
    },
]
