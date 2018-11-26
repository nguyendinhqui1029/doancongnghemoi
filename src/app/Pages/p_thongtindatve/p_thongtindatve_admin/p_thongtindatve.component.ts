import { Component,OnInit, Input } from "@angular/core";
import { ChiTietDatVeService } from "src/app/service/chitietdatve.service";
import { element } from "@angular/core/src/render3/instructions";

declare var $:any;
@Component({
    selector: 'p_thongtindatve',
    templateUrl: './p_thongtindatve.component.html'
})

export class THONGTINDATVE  implements OnInit{
    ds_chitietdatve:any[]=[];
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
                if(element.trangthai!="Đã nhận vé"){
                    this.danhsach_datvetheosdt.push(element);
                }
            });
        });
    }

    xacNhanDatVe(tt){
        this.danhsach_datvetheosdt.forEach(element => {
            if(element.sodienthoai==tt.sodienthoai){
                this.danhsach_datvetheosdt.splice(this.danhsach_datvetheosdt.indexOf(tt),1);
            }
        });
        tt.trangthai="Đã nhận vé";
        this.servivce_chitietdatve.addThongTinChiTietDatVe(tt).subscribe(
            data => {
                alert("Cập nhật thành công.")
                
              },
              // Errors will call this callback instead:
              err => {
                alert("Cập nhật không thành công.");
              }
        );
    }
    thongtintim(){
        $('#thongbao').text("");
        let sdttim;
        sdttim=$('#thongtintim').val();
        this.danhsach_datvetheosdt=[];
        if(sdttim!=""){
            this.ds_chitietdatve.forEach(element => {
                if(element.sodienthoai === sdttim)
                {
                    this.danhsach_datvetheosdt.push(element);
                } 
            });
    
            if(this.danhsach_datvetheosdt.length ==0 )
            {
                $('#thongbao').text("Không tìm thấy thông tin vé!");
            } 
        } 
        else 
        {
            this.getListChiTietDatVeXE();   
             this.ds_chitietdatve.forEach(element => {
                if(element.trangthai!="Đã nhận vé"){
                    this.danhsach_datvetheosdt.push(element);
                }
            });
        }
        
    }
    layLaiDanhSach(){
        let sdttim;
        $('#thongbao').text("");
        sdttim=$('#thongtintim').val();
        if(sdttim==""){
            // this.danhsach_datvetheosdt= this.danhsach_datvetheosdt;
             this.getListChiTietDatVeXE();   
             this.ds_chitietdatve.forEach(element => {
                if(element.trangthai!="Đã nhận vé"){
                    this.danhsach_datvetheosdt.push(element);
                }
            });
        }
    }
}
