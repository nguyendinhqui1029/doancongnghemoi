import { ChiTietTuyenDuong } from "./chitiettuyenduong";
import { ChuyenXe } from "./chuyenxe";

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
    OriginCode:any;
    DestCode:any;
    chuyenxe: ChuyenXe[]=[];
    constructor(id_tuyenduong,name_tuyenduong,bendi,benden,loaixe,quangduong,thoigian,sochuyen,giave,giochay,
        chitiet,OriginCode,DestCode,chuyenxe)
    { 
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
       this.OriginCode = OriginCode;
       this.DestCode = DestCode;
       this.chuyenxe = chuyenxe;

    }
}