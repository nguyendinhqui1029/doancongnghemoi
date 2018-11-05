import { Component, OnInit } from '@angular/core';
import { ds_chitietdatve } from 'src/app/model/mock_chitietdatve';
import { ds_ghe } from 'src/app/model/mock_dsghe';
import { CHITIETDATVEXE } from 'src/app/model/chitietdatve';
declare var $:any;
@Component({
    selector: 'm_huyve',
    templateUrl: './m_huyve.component.html',
})
export class M_HUYVE implements OnInit {
    trangthaifrom:boolean=true;
    ds_chitietdatve:any[]=ds_chitietdatve;
    ds_ghe:any[]=ds_ghe;
    noidunghienthithongtinchitiet:CHITIETDATVEXE=null;
    constructor() { }
 //Hủy đặt ghế
 huyghe(ghedangchon,chitietdatve)
 {
     let vt=chitietdatve.soghe.indexOf(ghedangchon);
     if(vt>=0)
     {
         chitietdatve.soghe.splice(vt,1);
         this.ds_ghe.forEach(ghe=>{
             if(ghe.tenghe==ghedangchon)
             {
                 ghe.trangthai=0;
             }
         });
         $("#thongbao").hide();
         $(".btnghe").removeAttr("disabled");
        
 
     //xu li luu thông tin xuong database

     }
 }
 
 //Bắt sự kiện nút xác nhận số điện thoại
 nutxacnhan()
 {
     for(let i=0;i< this.ds_chitietdatve.length;i++) {
         if(this.ds_chitietdatve[i].sodienthoai==$("#sodienthoaixacnhan").val() && this.ds_chitietdatve[i].ngaydi==$("#ngaycanxem").val())
         {
             this.trangthaifrom=false;
             this.noidunghienthithongtinchitiet=this.ds_chitietdatve[i];
             i=i+this.ds_chitietdatve.length;
         }else{
             $("#thongbaoloidangnhap").html("Số điện thoại không đúng.<br>"); 
         } 
     }; 
 }
    ngOnInit(): void { }
}
