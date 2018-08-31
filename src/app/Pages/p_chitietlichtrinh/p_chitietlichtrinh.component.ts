import { Component, OnInit } from '@angular/core';

declare var $:any;
@Component({
    selector: 'p_chitietlichtrinh',
    templateUrl: './p_chitietlichtrinh.component.html'
})
export class CHITIETLICHTRINH implements OnInit {

    constructor() { }

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
   
    ngOnInit() { 
       
       
    }

}