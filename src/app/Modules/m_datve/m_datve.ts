import { Component,OnInit } from "@angular/core";
//import { ds_diadiemkhoihanh } from "../../model/mock_diadiemkhoihanh";
//import {ds_tuyenduong} from'../../model/mock_tuyenduong';
import { OBJECTDANGKI } from "src/app/model/dangki";
import {CHITIETDATVEXE} from '../../model/chitietdatve';
import { TuyenDuongService } from "src/app/service/tuyenduong.service";
import { ChiTietTuyenDuong } from "src/app/model/chitiettuyenduong";
declare var $:any;
@Component({
    selector:'m_datve',
    templateUrl:'./m_datve.html'
})
export class DATVE implements OnInit{
    objectDangKi:OBJECTDANGKI=new OBJECTDANGKI('','','','','','');;
    ds_khoihanh:any[]=[]//ds_tuyenduong;
    ds_diadiemkhoihanh:any[]=[];
    ds_diadiemden:any[]=[];
    thongtindatve:CHITIETDATVEXE=new CHITIETDATVEXE("","","","","","","","","",0);
    ngayhientai:any="";
    flag:boolean=false;
    constructor(private tuyenduongService:TuyenDuongService)
    {
        this.laydanhsachtuyenduong();
        
   }
    
   laydanhsachtuyenduong()
   {
    this.tuyenduongService.getListTuyenDuong()
    .subscribe( 
        reponse => {
          if(reponse!=null)
               {
                    this.ds_khoihanh=reponse;
                    this.ds_khoihanh.forEach(element => {
                       
                      let mangtam:ChiTietTuyenDuong[]=[];
                        if(element.chitiet.L!=undefined)
                        {
                            for(let i =0;i<element.chitiet.L.length;i++){
                               // console.log(element.chitiet.L[i]);
                               if(element.chitiet.L[i].M!=undefined){
                                
                                let chitietM:ChiTietTuyenDuong = new ChiTietTuyenDuong(
                                    element.chitiet.L[i].M.diemdi.S,
                                    element.chitiet.L[i].M.diemden.S,
                                    element.chitiet.L[i].M.thoigiandi.S,
                                    element.chitiet.L[i].M.thoigianden.S,
                                    element.chitiet.L[i].M.hotlinedi.S,
                                    element.chitiet.L[i].M.hotlineden.S,
                                    element.chitiet.L[i].M.diachidi.S,
                                    element.chitiet.L[i].M.diachiden.S
                    
                                );

                                    mangtam.push(chitietM);
                                    //console.log(mangtam)
                               }
                                
                            }
                        
                         
                        }

                       element.chitiet=mangtam;
                       element.benden=element.benden.S;
                       element.bendi=element.bendi.S;
                       element.giave=element.giave.S;
                       element.giochay=element.giochay.S;
                       element.loaixe=element.loaixe.S;
                       element.quangduong=element.quangduong.S;
                       element.id_tuyenduong=element.id_tuyenduong.N;
                       element.name_tuyenduong=element.name_tuyenduong.S;
                       element.thoigian=element.thoigian.S;
                       element.sochuyen=element.sochuyen.S;
                       element.OriginCode=element.OriginCode.S;
                       element.DestCode=element.DestCode.S;

                     
                    });
    
               }
              this.ds_diadiemkhoihanh=this.LayDanhSachKhoiHanh();
              this.ds_diadiemden=this.LayDanhSachDenTheoDiaDiemDi( this.ds_diadiemkhoihanh[0].v);
             // console.log(this.ds_diadiemden);
             // console.log( this.ds_diadiemkhoihanh);
      }				   
     )
   }
    diemden:any;
  data: CHITIETDATVEXE;
    laythongtindatve() {
        $("#thongbao").hide();
        $(".btnghe").removeAttr("disabled");
        this.flag=true;
        this.data= new CHITIETDATVEXE("",$("#diemdi")[0].value,$("#diemden")[0].value,$("#ngay")[0].value,$("#soluong")[0].value,"","","","",1);
    // console.log(this.data);
        
    }
    soluongclick()
    {
        this.flag=false;
        this.data= new CHITIETDATVEXE("",$("#diemdi")[0].value,$("#diemden")[0].value,$("#ngay")[0].value,$("#soluong")[0].value,"","","","",1); 
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
        this.flag=false;
        this.data= new CHITIETDATVEXE("",$("#diemdi")[0].value,$("#diemden")[0].value,$("#ngay")[0].value,$("#soluong")[0].value,"","","","",1);
    }
    ngOnInit(){ 
        let date=new Date();
        let ngay="";
        if(date.getDate()<10)
        {
            ngay="0"+date.getDate();
        }else{
            ngay=date.getDate()+"";
        }
        this.ngayhientai=(date.getMonth()+1)+"/"+ngay+"/"+date.getFullYear();
        
        $( function() {
          $( "#ngay" ).datepicker({
            showOtherMonths: true,
            selectOtherMonths: true,
            ///
			minDate:0,
            maxDate:"+1M"
        } );
    })
}
}