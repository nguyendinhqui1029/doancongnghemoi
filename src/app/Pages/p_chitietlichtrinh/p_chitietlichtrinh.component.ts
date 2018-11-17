import { Component, OnInit,OnDestroy } from '@angular/core';
import { ds_tuyenduong } from '../../model/mock_tuyenduong';
import {Route,ActivatedRoute, Router} from '@angular/router';
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
    flag:boolean=false;
    data1: CHITIETDATVEXE;
    laythongtindatve1(id_tuyenduong:any,bendi:any, benden:any,giochay:any,giave:any) {
        $("#thongbao").hide();
        $(".btnghe").removeAttr("disabled");
        console.log(""+id_tuyenduong);
        console.log(""+bendi);
        console.log(""+benden);
        console.log(""+giochay);
        console.log(""+giave);
        this.data1= new CHITIETDATVEXE(id_tuyenduong,bendi,benden,"20:00",1,giochay,giave,"");
        this.flag=true;
    }
    constructor(private route:Router,private activateRoute:ActivatedRoute) { 
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