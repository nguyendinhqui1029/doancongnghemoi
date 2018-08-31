import { Component,OnInit } from "@angular/core";
import { ds_diadiemkhoihanh } from "../../model/mock_diadiemkhoihanh";

@Component({
    selector:'m_datve',
    templateUrl:'./m_datve.html'
})
export class DATVE implements OnInit{
    ds_khoihanh:any[]=ds_diadiemkhoihanh;
    ds_diadiemkhoihanh:any[]=[];
    ds_diadiemden:any[]=[];
    constructor()
    {
        this.ds_diadiemkhoihanh=this.LayDanhSachKhoiHanh();
        this.ds_diadiemden=this.LayDanhSachDenTheoDiaDiemDi( this.ds_diadiemkhoihanh[0].v);
    }
    
   
    onChange(deviceValue) {
        
        this.ds_diadiemden=this.LayDanhSachDenTheoDiaDiemDi(deviceValue.target.value);
    }

    LayDanhSachKhoiHanh()
    {
        let ds:any[]=[];
        let dsCode:any[]=[];
        for (var i = 0; i <this.ds_khoihanh.length; i++) {
            if(dsCode.indexOf(this.ds_khoihanh[i].OriginCode)===-1)
           {
            ds.push({v:this.ds_khoihanh[i].OriginCode,t:this.ds_khoihanh[i].OriginName});
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
                    ds.push({v:this.ds_khoihanh[i].DestCode,t:this.ds_khoihanh[i].DestName});
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
    ngOnInit(){

    }

}