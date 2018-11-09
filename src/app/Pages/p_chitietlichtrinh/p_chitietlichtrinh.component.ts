import { Component, OnInit,OnDestroy } from '@angular/core';
import { ds_tuyenduong } from '../../model/mock_tuyenduong';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import { TuyenDuong } from 'src/app/model/tuyenduong';
import { CHITIETDATVEXE } from 'src/app/model/chitietdatve';
declare var $:any;
@Component({
    selector: 'p_chitietlichtrinh',
    templateUrl: './p_chitietlichtrinh.component.html'
})
export class CHITIETLICHTRINH implements OnInit,OnDestroy {
    
    danhsachtuyen:any[] = ds_tuyenduong; 
    danhsachtheotuyen:any[]=[];
    ngayhientai:any="";
    diemdi:any="";
    diemden:any="";
    subscription:Subscription;
    thongtindatve:CHITIETDATVEXE;
    constructor(private route:Router,private activateRoute:ActivatedRoute) { 
       
    }

    muavechitiet(chitiet)
    {
        this.thongtindatve=new CHITIETDATVEXE(chitiet.id_tuyenduong,chitiet.OriginCode,chitiet.DestCode,this.ngayhientai,1,chitiet.giochay,"","","");
            
       // console.log(this.thongtindatve);
       
    }

    laychitietlichtrinhtheodiemdidiemden(diemdi,diemden)
    {
        let ds:TuyenDuong[]=[];
        for(var i=0; i<this.danhsachtuyen.length;i++)
        { 
            if(this.danhsachtuyen[i].OriginCode==diemdi&&this.danhsachtuyen[i].DestCode==diemden)
            {
                ds.push(this.danhsachtuyen[i]);
            }
        }
        return ds;
    }
    batsukienclick(event:any)
    {
        let ID =event.target.attributes.id.value;
        let cl="."+ID;
        if(event.target.innerText!="Đóng >>")
        {
            for(let i=0;i<this.danhsachtuyen.length;i++)
            {
                let ct=".ct"+i;
                let id="#ct"+i;
                if(!$(ct).hasClass("hidden"))
               {
                $(id)[0].innerText="Xem chi tiết >>";
                $(ct).addClass('hidden');
               }
            }
        }
        
       
       if($(cl).hasClass("hidden"))
       {
            event.target.innerText="Đóng >>";
            $(cl).removeClass('hidden');
       }else{
            event.target.innerText="Xem chi tiết >>";
            $(cl).addClass('hidden');
       }
    }

    layDSchitiettheoTuyenDuong(name: string)
    {
        let dschitiet:any[]=[];
        for(var i =0; i< this.danhsachtuyen.length; i++)
        {
            if(this.danhsachtuyen[i].name_tuyenduong === name)
            {
                dschitiet.push(this.danhsachtuyen[i]);
            }
        }
        return dschitiet;
    }
   
    ngOnInit() { 
        //lay diem di diem den tren url
        this.subscription =this.activateRoute.params.subscribe(params=>{
            this.diemdi=params["g"];
            this.diemden=params["c"];
        });

        this.danhsachtuyen=this.laychitietlichtrinhtheodiemdidiemden(this.diemdi,this.diemden);
       
        //lây ngày hiện tại
       let date=new Date();
       let ngay="";
       if(date.getDate()<10)
       {
           ngay="0"+date.getDate();
       }else{
           ngay=date.getDate()+"";
       }
       this.ngayhientai=(date.getMonth()+1)+"/"+ngay+"/"+date.getFullYear();   
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}