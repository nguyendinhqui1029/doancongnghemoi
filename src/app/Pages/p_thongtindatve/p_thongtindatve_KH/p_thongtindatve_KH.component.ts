import { Component, OnInit } from '@angular/core';
import { CHITIETDATVEXE } from 'src/app/model/chitietdatve';
import { ChiTietDatVeService } from 'src/app/service/chitietdatve.service';
import { element } from '@angular/core/src/render3/instructions';


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
                        element.trangthai = "Đang Đặt";
                    }
                    else if(element.trangthai == 2)
                    {
                        element.trangthai = "Đã nhận vé";
                    }
                });
            }
            this.ds_chitietdatve.forEach(element => {
                if(element.sodienthoai == sessionStorage.getItem("sodienthoai") && element.trangthai =="Đang Đặt"){
                    this.danhsach_datvetheosdt.push(element);
                   
                }
            });
 
        });
    }

    thongtinhuy(id){
        if(id.soghe.length > 1)
        {
            for(let i=0;i< $("."+id.idchitietdatve).length;i++)
            {
                 if($("."+id.idchitietdatve)[i].checked==true)
                 {
                     alert("Hủy ghế thành công!"+ $("."+id.idchitietdatve)[i].value);
                     id.soghe.splice(id.soghe.indexOf($("."+id.idchitietdatve)[i].value),1);
                     id.soluong -= 1;
                 }
            }
        }
       else if(id.soghe.length == 1)
       {
            alert("Hủy ghế thành công!"+ id.soghe);
            this.danhsach_datvetheosdt.splice(this.danhsach_datvetheosdt.indexOf(id),1);
       }
        console.log(id);        
    }
    thongtintim(){
        $('#thongbao').text("");
        let ngaydatve;
        let mangngaydatve=[];
        ngaydatve=$('#thongtintim').val();
        mangngaydatve=ngaydatve.split("-");
        ngaydatve=mangngaydatve[1]+"/"+mangngaydatve[2]+"/"+mangngaydatve[0];
        console.log(mangngaydatve);
        this.danhsach_datvetheosdt=[];
        this.ds_chitietdatve.forEach(element => {
            
            if(element.ngaydi === ngaydatve)
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


