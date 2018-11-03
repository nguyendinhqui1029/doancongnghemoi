import { Component,OnInit, Input } from "@angular/core";
import { OBJECTDANGKI } from "src/app/model/dangki";
import { CHITIETDATVEXE } from "src/app/model/chitietdatve";
import {ds_tuyenduong} from'../../model/mock_tuyenduong';
import { TuyenDuong } from "src/app/model/tuyenduong";
import { ChiTietTuyenDuong } from "src/app/model/chitiettuyenduong";
declare var $:any;
@Component({
    selector:'m_chitietdatve',
    templateUrl:'./m_chitietdatve.html'
})
export class CHITIETDATVE implements OnInit{
    objectDangKi:OBJECTDANGKI=new OBJECTDANGKI('','','','','','');;
    @Input() chitietdatvexe: CHITIETDATVEXE;
    chitietdatve:CHITIETDATVEXE= new CHITIETDATVEXE("","","","","","","","");
    ds_tuyenduong:any[]=ds_tuyenduong;
    tuyenduong:TuyenDuong=null;
    ds_giokhoihanh:string[]=[];
    tongtien:number;
    soluongghe:number=0;
    constructor()
    {
        
    }
    laygiochaytheodiemdidiemden(diemdi,diemden):string[]
    {
        let ds_giochay:string[]=[];
        ds_tuyenduong.forEach(tuyenduong => {
            if(tuyenduong.OriginCode==diemdi && tuyenduong.DestCode==diemden)
            {
                ds_giochay.push(tuyenduong.giochay);  
            }
        });
        return ds_giochay;

    }
    guimuave(){
        if(this.soluongghe>0)
        {
            $("#danhsachghe").slideDown() ;
            $("#muoiten").addClass("fas fa-angle-double-down");
            $("#muoiten").removeClass("fas fa-angle-double-up");
            $("#thongbaochonghe").text("Mời bạn chọn ghế");
            this.flag=false;
        }else{
            $("#danhsachghe").slideUp() ;
            $("#muoiten").removeClass("fas fa-angle-double-down");
            $("#muoiten").addClass("fas fa-angle-double-up");
            this.flag=true;
        }
    }
    laytuyenduongtheodiemdidiemden(diemdi,diemden):TuyenDuong
    {
        let td:TuyenDuong=null;
        ds_tuyenduong.forEach(tuyenduong => {
            if(tuyenduong.OriginCode==diemdi && tuyenduong.DestCode==diemden)
            {
                td=tuyenduong;
                this.ds_giokhoihanh.push(tuyenduong.giochay);  
            }
        });
        return td;
    }
    flag:boolean=true;
    chonghe()
    {
        if(this.flag==true)
        {
            $("#danhsachghe").slideDown() ;
            $("#muoiten").addClass("fas fa-angle-double-down");
            $("#muoiten").removeClass("fas fa-angle-double-up");
            this.flag=false;
        }else{
            $("#danhsachghe").slideUp() ;
            $("#muoiten").removeClass("fas fa-angle-double-down");
            $("#muoiten").addClass("fas fa-angle-double-up");
            this.flag=true;
        }
        
    }
    ngOnInit(){
        this.chitietdatve=this.chitietdatvexe;
        this.tuyenduong=this.laytuyenduongtheodiemdidiemden(this.chitietdatvexe.diemdi,this.chitietdatvexe.diemden);
        this.ds_giokhoihanh=this.laygiochaytheodiemdidiemden(this.chitietdatvexe.diemdi,this.chitietdatvexe.diemden);
        this.tongtien=this.chitietdatve.soluong*this.tuyenduong.giave;
        this.soluongghe=this.chitietdatve.soluong;
    }

}