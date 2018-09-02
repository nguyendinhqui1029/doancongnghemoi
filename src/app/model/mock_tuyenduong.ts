import { TuyenDuong } from "./tuyenduong";
import { ChiTietTuyenDuong } from "./chitiettuyenduong";

export var ds_tuyenduong: TuyenDuong[] =
[
    {
        id_tuyenduong:1, name_tuyenduong:"Bạc Liêu", bendi:"Bạc Liêu" , 
        benden:"Sài Gòn", loaixe:"Giường", quangduong:"272 km", thoigian:"06:00", 
        sochuyen:"6 chuyến/ngày", giave:"160.000", giochay:"",
        chitiet:[{ diemdi:"Sóc Trăng",diemden:"Bạc Liêu",thoigiandi:"12:00",thoigianden:"17:00",hotlinedi:"213123123",hotlineden:"2312313",diachidi:"2ádáe",diachiden:"đâs",toadodi:"",toadoden:""}
        ]}, 
        {
            id_tuyenduong:2, name_tuyenduong:"Sóc Trăng", bendi:"Sóc Trăng" , 
            benden:"Sài Gòn", loaixe:"Giường", quangduong:"272 km", thoigian:"06:00", 
            sochuyen:"6 chuyến/ngày", giave:"160.000", giochay:"",
            chitiet:[new ChiTietTuyenDuong(
                "Sóc Trăng", "Bạc Liêu", "08:00",
                    "08:00","38 Lê Duẩn, P.3, TP.Sóc Trăng", 
                    "Trần Phú, P.7, TP.Bạc Liêu", "015644458", 
                   "024979411" ,"", "")
                ,
                new ChiTietTuyenDuong(
                    "Sóc Trăng", "Bạc Liêu", "08:00",
                        "08:00","38 Lê Duẩn, P.3, TP.Sóc Trăng", 
                        "Trần Phú, P.7, TP.Bạc Liêu", "015644458", 
                       "024979411" ,"", "")
            ]},
    //{id_tuyenduong:2, name_tuyenduong:"Bảo Lộc", bendi:"Bảo Lộc" , benden:"Đà Nẵng", loaixe:"Giường", quangduong:"756 km", thoigian:"15:30", sochuyen:"1 chuyến/ngày", giave:"315.000", giochay:"" },
    // {id_tuyenduong:3, name_tuyenduong:"Bảo Lộc", bendi:"Bảo Lộc" , benden:"Huế", loaixe:"Giường", quangduong:"828 km", thoigian:"19:00", sochuyen:"1 chuyến/ngày", giave:"380.000", giochay:"" },
    // {id_tuyenduong:4, name_tuyenduong:"Bến Tre", bendi:"Bến Tre" , benden:"Sài Gòn", loaixe:"Ghế", quangduong:"75 km", thoigian:"02:00", sochuyen:"4 chuyến/ngày", giave:"70.000" , giochay:""},
    // {id_tuyenduong:5, name_tuyenduong:"Buôn Mê Thuột", bendi:"Buôn Mê Thuột" , benden:"Sài Gòn", loaixe:"Giường", quangduong:"435 km", thoigian:"09:00", sochuyen:"5 chuyến/ngày", giave:"240.000" , giochay:""},
    // {id_tuyenduong:6, name_tuyenduong:"Buôn Mê Thuột", bendi:"Buôn Mê Thuột" , benden:"Nha Trang", loaixe:"Giường", quangduong:"0 km", thoigian:"00:00", sochuyen:"0 chuyến/ngày", giave:"140.000" , giochay:""},
    // {id_tuyenduong:7, name_tuyenduong:"Sài Gòn", bendi:"Sài Gòn" , benden:"Đà Lạt", loaixe:"Giường", quangduong:"320 km", thoigian:"08:00", sochuyen:"37 chuyến/ngày", giave:"220.000", giochay:"" },
    // {id_tuyenduong:8, name_tuyenduong:"Sài Gòn", bendi:"Sài Gòn" , benden:"Buôn Mê Thuột", loaixe:"Giường", quangduong:"435 km", thoigian:"09:00", sochuyen:"5 chuyến/ngày", giave:"240.000" , giochay:""},
    // {id_tuyenduong:9, name_tuyenduong:"Sài Gòn", bendi:"Sài Gòn" , benden:"Nha Trang", loaixe:"Giường", quangduong:"427 km", thoigian:"12:00", sochuyen:"7 chuyến/ngày", giave:"225.000" , giochay:""},
    // {id_tuyenduong:10, name_tuyenduong:"Sài Gòn", bendi:"Sài Gòn" , benden:"Phan Thiết", loaixe:"Giường", quangduong:"203 km", thoigian:"06:00", sochuyen:"3 chuyến/ngày", giave:"135.000" , giochay:""},
    // {id_tuyenduong:11, name_tuyenduong:"Sài Gòn", bendi:"Sài Gòn" , benden:"Cam Ranh", loaixe:"Giường", quangduong:"350 km", thoigian:"09:00", sochuyen:"1 chuyến/ngày", giave:"200.000", giochay:"" },
    // {id_tuyenduong:12, name_tuyenduong:"Sài Gòn", bendi:"Sài Gòn" , benden:"Châu Đốc", loaixe:"Giường", quangduong:"241 km", thoigian:"06:15", sochuyen:"34 chuyến/ngày", giave:"145.000" , giochay:""},
    // {id_tuyenduong:13, name_tuyenduong:"Sài Gòn", bendi:"Sài Gòn" , benden:"Long Xuyên", loaixe:"Giường", quangduong:"185 km", thoigian:"05:00", sochuyen:"30 chuyến/ngày", giave:"135.000" , giochay:""},
    // {id_tuyenduong:14, name_tuyenduong:"BX An Sương", bendi:"BX An Sương" , benden:"Đà Nẵng", loaixe:"Giường", quangduong:"0 km", thoigian:"00:00", sochuyen:"0 chuyến/ngày", giave:"370.000" , giochay:""},
    // {id_tuyenduong:15, name_tuyenduong:"Nha Trang", bendi:"Nha Trang" , benden:"Sài Gòn", loaixe:"Giường", quangduong:"429 km", thoigian:"12:00", sochuyen:"8 chuyến/ngày", giave:"225.000" , giochay:""},
    // {id_tuyenduong:16, name_tuyenduong:"Nha Trang", bendi:"Nha Trang" , benden:"Đà Lạt", loaixe:"Giường", quangduong:"138 km", thoigian:"04:00", sochuyen:"6 chuyến/ngày", giave:"140.000" , giochay:""},
    // {id_tuyenduong:17, name_tuyenduong:"Nha Trang", bendi:"Nha Trang" , benden:"Đà Nẵng", loaixe:"Giường", quangduong:"545 km", thoigian:"12:00", sochuyen:"1 chuyến/ngày", giave:"235.000" , giochay:""},
    // {id_tuyenduong:18, name_tuyenduong:"Phan Thiết", bendi:"Phan Thiết" , benden:"Sài Gòn", loaixe:"Giường", quangduong:"206 km", thoigian:"06:00", sochuyen:"3 chuyến/ngày", giave:"135.000", giochay:"" },
    // {id_tuyenduong:19, name_tuyenduong:"Cà Mau", bendi:"Cà Mau" , benden:"Sài Gòn", loaixe:"Giường", quangduong:"303 km", thoigian:"08:00", sochuyen:"21 chuyến/ngày", giave:"195.000" , giochay:""},
    // {id_tuyenduong:20, name_tuyenduong:"Cà Mau", bendi:"Cà Mau" , benden:"Cần Thơ", loaixe:"Giường", quangduong:"143 km", thoigian:"04:00", sochuyen:"18 chuyến/ngày", giave:"125.000" , giochay:""},
    // {id_tuyenduong:21, name_tuyenduong:"Cam Ranh", bendi:"Cam Ranh" , benden:"Sài Gòn", loaixe:"Giường", quangduong:"350 km", thoigian:"09:00", sochuyen:"1 chuyến/ngày", giave:"200.000" , giochay:""},
    // {id_tuyenduong:22, name_tuyenduong:"Cần Thơ", bendi:"Cần Thơ" , benden:"Sài Gòn", loaixe:"Giường", quangduong:"167 km", thoigian:"03:30", sochuyen:"58 chuyến/ngày", giave:"115.000" , giochay:""},
    // {id_tuyenduong:23, name_tuyenduong:"Cần Thơ", bendi:"Cần Thơ" , benden:"Cà Mau", loaixe:"Giường", quangduong:"144 km", thoigian:"04:30", sochuyen:"18 chuyến/ngày", giave:"125.000" , giochay:""},
    // {id_tuyenduong:24, name_tuyenduong:"Châu Đốc", bendi:"Châu Đốc" , benden:"Sài Gòn", loaixe:"Giường", quangduong:"241 km", thoigian:"06:15", sochuyen:"32 chuyến/ngày", giave:"145.000" , giochay:""},
    // {id_tuyenduong:25, name_tuyenduong:"Châu Đốc", bendi:"Châu Đốc" , benden:"Cần Thơ", loaixe:"Giường", quangduong:"116 km", thoigian:"03:30", sochuyen:"11 chuyến/ngày", giave:"100.000" , giochay:""},
    // {id_tuyenduong:26, name_tuyenduong:"Đà Lạt", bendi:"Đà Lạt" , benden:"Sài Gòn", loaixe:"Giường", quangduong:"320 km", thoigian:"08:00", sochuyen:"35 chuyến/ngày", giave:"220.000" , giochay:""},
    // {id_tuyenduong:27, name_tuyenduong:"Đà Lạt", bendi:"Đà Lạt" , benden:"Cần Thơ", loaixe:"Giường", quangduong:"457 km", thoigian:"11:00", sochuyen:"2 chuyến/ngày", giave:"335.000" , giochay:""},
    // {id_tuyenduong:28, name_tuyenduong:"Đà Nẵng", bendi:"Đà Nẵng" , benden:"Sài Gòn", loaixe:"Giường", quangduong:"850 km", thoigian:"23:00", sochuyen:"6 chuyến/ngày", giave:"370.000" , giochay:""},
    // {id_tuyenduong:29, name_tuyenduong:"Đà Nẵng", bendi:"Đà Nẵng" , benden:"Bảo Lộc", loaixe:"Giường", quangduong:"756 km", thoigian:"15:00", sochuyen:"1 chuyến/ngày", giave:"315.000" , giochay:""},
    // {id_tuyenduong:30, name_tuyenduong:"Đak Nông", bendi:"Đak Nông" , benden:"Sài Gòn", loaixe:"Giường", quangduong:"245 km", thoigian:"06:00", sochuyen:"2 chuyến/ngày", giave:"120.000" , giochay:""},
    // {id_tuyenduong:31, name_tuyenduong:"Hà Nội", bendi:"Hà Nội" , benden:"Đà Nẵng", loaixe:"Giường", quangduong:"765 km", thoigian:"18:00", sochuyen:"2 chuyến/ngày", giave:"340.000" , giochay:""},
    // {id_tuyenduong:32, name_tuyenduong:"Hà Nội", bendi:"Hà Nội" , benden:"Nam Định", loaixe:"Giường", quangduong:"79 km", thoigian:"01:30", sochuyen:"12 chuyến/ngày", giave:"70.000" , giochay:""},
    // {id_tuyenduong:33, name_tuyenduong:"Hà Tiên", bendi:"Hà Tiên" , benden:"Sài Gòn", loaixe:"Giường", quangduong:"314 km", thoigian:"08:00", sochuyen:"4 chuyến/ngày", giave:"180.000" , giochay:""},
    // {id_tuyenduong:34, name_tuyenduong:"Hồng Ngự", bendi:"Hồng Ngự" , benden:"Sài Gòn", loaixe:"Giường", quangduong:"178 km", thoigian:"05:00", sochuyen:"5 chuyến/ngày", giave:"120.000" , giochay:""},
    // {id_tuyenduong:35, name_tuyenduong:"Huế", bendi:"Huế" , benden:"Sài Gòn", loaixe:"Giường", quangduong:"943 km", thoigian:"19:00", sochuyen:"1 chuyến/ngày", giave:"380.000" , giochay:""},
    // {id_tuyenduong:36, name_tuyenduong:"Long Xuyên", bendi:"Long Xuyên" , benden:"Sài Gòn", loaixe:"Giường", quangduong:"185 km", thoigian:"4:10", sochuyen:"34 chuyến/ngày", giave:"135.000" , giochay:""},


]
