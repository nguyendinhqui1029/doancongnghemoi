import { Component,OnInit } from "@angular/core";
//import { ds_diadiemkhoihanh } from "../../model/mock_diadiemkhoihanh";
import {ds_tuyenduong} from'../../model/mock_tuyenduong';
import { OBJECTDANGKI } from "src/app/model/dangki";
import {CHITIETDATVEXE} from '../../model/chitietdatve';
declare var $:any;
@Component({
    selector:'m_datve',
    templateUrl:'./m_datve.html'
})
export class DATVE implements OnInit{
    objectDangKi:OBJECTDANGKI=new OBJECTDANGKI('','','','','','');;
    ds_khoihanh:any[]=ds_tuyenduong//ds_diadiemkhoihanh;
    ds_diadiemkhoihanh:any[]=[];
    ds_diadiemden:any[]=[];
    thongtindatve:CHITIETDATVEXE=new CHITIETDATVEXE("","","","","","","","");
    ngayhientai:any="";
    flag:boolean=false;
    constructor()
    {
       
        this.ds_diadiemkhoihanh=this.LayDanhSachKhoiHanh();
        this.ds_diadiemden=this.LayDanhSachDenTheoDiaDiemDi( this.ds_diadiemkhoihanh[0].v);
   }
    
    diemden:any;
  data: CHITIETDATVEXE;
    laythongtindatve() {
        $("#thongbao").hide();
        $(".btnghe").removeAttr("disabled");
        this.flag=true;
        this.data= new CHITIETDATVEXE("",$("#diemdi")[0].value,$("#diemden")[0].value,$("#ngay")[0].value,$("#soluong")[0].value,"","","");
  
    }
    
    onChange(deviceValue) {
        this.flag=false;
        this.ds_diadiemden=this.LayDanhSachDenTheoDiaDiemDi(deviceValue);
      
    }

    LayDanhSachKhoiHanh()
    {
        let ds:any[]=[];
        let dsCode:any[]=[];
        for (var i = 0; i <this.ds_khoihanh.length; i++) {
            if(dsCode.indexOf(this.ds_khoihanh[i].OriginCode)===-1)
           {
            ds.push({v:this.ds_khoihanh[i].OriginCode,t:this.ds_khoihanh[i].bendi});
            dsCode.push(this.ds_khoihanh[i].OriginCode);
           } 
           
        }
    
       ds.sort(function(a,b){
        if (a.t < b.t)
        return -1;
        if (a.t > b.t)
            return 1;
        return 0;
       });

       return ds;
    
    }
    LayDanhSachDenTheoDiaDiemDi(diadiemdi)
    {
        let ds:any[]=[];
        let dsDestCode:any[]=[];
        for (var i = 0; i <this.ds_khoihanh.length; i++) {
            if(this.ds_khoihanh[i].OriginCode===diadiemdi)
           {
               if(dsDestCode.indexOf(this.ds_khoihanh[i].DestCode)===-1)
                {
                    ds.push({v:this.ds_khoihanh[i].DestCode,t:this.ds_khoihanh[i].benden});
                    dsDestCode.push(this.ds_khoihanh[i].DestCode);
                }
           } 
           
        }
    
       ds.sort(function(a,b){
        if (a.t < b.t)
        return -1;
        if (a.t > b.t)
            return 1;
        return 0;
       });

       return ds;
    }
    goi(){
        this.flag=false;this.data= new CHITIETDATVEXE("",$("#diemdi")[0].value,$("#diemden")[0].value,$("#ngay")[0].value,$("#soluong")[0].value,"","","");
    }
    ngOnInit(){ 
        let date=new Date();
        this.ngayhientai=(date.getMonth()+1)+"/"+date.getDate()+"/"+date.getFullYear();
        $( function() {
          $( "#ngay" ).datepicker({
            showOtherMonths: true,
            selectOtherMonths: true
          });
        } );
    }
 ngOnDestroy() {
     
 }
}