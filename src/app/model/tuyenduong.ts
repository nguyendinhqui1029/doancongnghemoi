import { ChiTietTuyenDuong } from "./chitiettuyenduong";

export class TuyenDuong{
    id_tuyenduong:any;
    name_tuyenduong:any;
    bendi:any;
    benden:any;
    loaixe:any;
    quangduong:any;
    thoigian:any;
    sochuyen:any;
    giave:any;
    giochay:any;
    chitiet:ChiTietTuyenDuong[]=[];
    // diemdi:any;
    // diemden:any;
    // thoigiandi: any;
    // thoigianden:any;
    // hotlinedi:any;
    // hotlineden:any;
    // diachidi:any;
    // diachiden:any;
    // toadodi:any;
    // toadoden:any;
    constructor(id_tuyenduong,name_tuyenduong,bendi,benden,loaixe,quangduong,thoigian,sochuyen,giave,giochay,
        chitiet)//,diemdi,diemden,thoigiandi,thoigianden,hotlinedi,hotlineden,diachidi,diachiden,toadodi,toadoden)
    { // hay tạo 1 cái chi tiết riêng đê tao coi cái chắc nên tao thêm cái chi tiết rồi. Import cái chi tiết vô cái tuyến đường này đc k 
        //được thay kiêu any[]thanh CHITIET[]
        // ok đê lam thử


       this.id_tuyenduong= id_tuyenduong;
       this.name_tuyenduong= name_tuyenduong;
       this.bendi= bendi;
       this.benden = benden;
       this.loaixe= loaixe;
       this.quangduong= quangduong;
       this.thoigian= thoigian;
       this.sochuyen= sochuyen;
       this.giave= giave;
       this.giochay= giochay;
       this.chitiet = chitiet;
    //    this.diemdi = diemdi;
    //    this.diemden = diemden;
    //    this.thoigiandi = thoigiandi;
    //    this.thoigianden = thoigianden;
    //    this.hotlinedi = hotlinedi;
    //    this.hotlineden = hotlineden;
    //    this.diachidi = diachidi;
    //    this.diachiden = diachiden;
    //    this.toadodi = toadodi;
    //    this.toadoden = toadoden;

    
    }
}