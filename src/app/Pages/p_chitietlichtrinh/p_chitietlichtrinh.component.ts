import { Component, OnInit } from '@angular/core';
import { ds_tuyenduong } from '../../model/mock_tuyenduong';

declare var $:any;
@Component({
    selector: 'p_chitietlichtrinh',
    templateUrl: './p_chitietlichtrinh.component.html'
})
export class CHITIETLICHTRINH implements OnInit {
    danhsachtuyen:any[] = ds_tuyenduong; 
    danhsachtheotuyen:any[]=[];
    constructor() { 
        for(var i=0; i<this.danhsachtuyen.length;i++)
        { 
            this.danhsachtheotuyen = this.layDSchitiettheoTuyenDuong(this.danhsachtuyen[i].name_tuyenduong);
        }
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
       
       
    }

}