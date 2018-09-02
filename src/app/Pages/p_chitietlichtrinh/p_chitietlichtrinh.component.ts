import { Component, OnInit } from '@angular/core';
import { ds_tuyenduong } from '../../model/mock_tuyenduong';

declare var $:any;
@Component({
    selector: 'p_chitietlichtrinh',
    templateUrl: './p_chitietlichtrinh.component.html'
})
export class CHITIETLICHTRINH implements OnInit {
    danhsachtuyen:any[] = ds_tuyenduong; //ds_ tuyen bua lay dau quen roi m
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
        let cl=".ct"+ID;
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