export class CHITIETDATVEXE
{
    idchitietdatve:any;
    idchuyenxe:any;
    diemdi:any;
    diemden:any;
    ngaydi:any;
    soluong:any;
    giodi:any;
    soghe:any[];
    sodienthoai:any;
    trangthai:number;
    constructor(idchuyenxe,diemdi, diemden,ngaydi,soluong,giodi,soghe,sodienthoai,idchitietdatve,trangthai)
    {
        this.idchuyenxe=idchuyenxe;
        this.diemdi=diemdi;
        this.diemden=diemden
        this.ngaydi=ngaydi;
        this.soluong=soluong;
        this.soghe=soghe;
        this.giodi=giodi;
        this.sodienthoai=sodienthoai;
        this.idchitietdatve=idchitietdatve;
        this.trangthai=trangthai;
    }
}