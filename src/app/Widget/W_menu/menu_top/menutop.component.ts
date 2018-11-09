import { Component, OnInit } from "@angular/core";
import { ds_menu } from '../../../model/mock_menu';

import { from } from "rxjs";
declare var $:any;


@Component({
    selector: 'menu_top',
    templateUrl: './menutop.component.html'
})
export class MENUTOP implements OnInit {
    loichao: string='';
    ds_menu: any[] = ds_menu;
    hienform:boolean=true;
    ngOnInit() {
       
        
    
    }
   
    constructor() {
        if(localStorage.getItem("hoten")!=null)
        {
            this.loichao="Chào,"+localStorage.getItem("hoten");
        }
    }
    dangXuat()
    {
        localStorage.removeItem("hoten");
        this.loichao='';
    }
    
}