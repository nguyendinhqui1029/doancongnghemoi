import { Component, OnInit } from '@angular/core';
import { CHITIETDATVEXE } from 'src/app/model/chitietdatve';
import { ChiTietDatVeService } from 'src/app/service/chitietdatve.service';


declare var $:any;
@Component({
    selector: 'p_thongtindatve_KH',
    templateUrl: './p_thongtindatve_KH.component.html',
})
export class THONGTINDATVEKHACHHANG  implements OnInit  {
    ds_chitietdatve:any[]=[];
    trangthai :any;
    soghe: any[]=[];
    danhsach_datvetheosdt: any[]=[];
    ngOnInit(): void {
        
    } 
    constructor(private servivce_chitietdatve: ChiTietDatVeService) {
        this.getListChiTietDatVeXE();
    }
    
    getListChiTietDatVeXE()
    {
        return this.servivce_chitietdatve.getListChiTietDatVe()
        .subscribe((reponse:any[])=>{
            this.ds_chitietdatve = reponse;
            console.log(this.ds_chitietdatve);
            if(this.ds_chitietdatve.length>0)
            {
                this.ds_chitietdatve.forEach(element => {
                    element.idchitietdatve =  element.idchitietdatve.N;
                    element.idchuyenxe =  element.idchuyenxe.N;
                    element.diemdi =  element.diemdi.S;
                    element.diemden =  element.diemden.S;
                    element.ngaydi =  element.ngaydi.S;
                    element.soluong =  element.soluong.S;
                    element.giodi =  element.giodi.S;
                    if(element.soghe.L!=undefined)
                        {
                         element.soghe.L.forEach(ghe => {
                            this.soghe.push(ghe.S);
                         });
                    }
                    element.soghe =  this.soghe;
                    this.soghe=[];
                    element.sodienthoai =  element.sodienthoai.S;
                    element.trangthai =  element.trangthai.N;
                    if(element.trangthai == 1)
                    {
                        this.trangthai = "Đang Đặt";
                    }
                    else if(element.trangthai == 2)
                    {
                        this.trangthai = "Đã nhận vé";
                    }
                });
            }
        });
    }

    thongtinhuy(){
        alert("Hủy vé");
    }
    thongtintim(){
        $('#thongbao').text("");
        let sdttim;
        sdttim=$('#thongtintim').val();
        this.danhsach_datvetheosdt=[];
        this.ds_chitietdatve.forEach(element => {
            if(element.sodienthoai === sdttim)
            {
                this.danhsach_datvetheosdt.push(element);
            }
        });
        if(this.danhsach_datvetheosdt.length ==0)
        {
            $('#thongbao').text("Không tìm thấy thông tin vé!");
        }

    }
}