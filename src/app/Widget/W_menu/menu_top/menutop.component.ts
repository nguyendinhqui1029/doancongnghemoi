import { Component, OnInit } from "@angular/core";
import { ds_menu } from '../../../model/mock_menu';

import { from } from "rxjs";
import { Router, ActivatedRoute } from "@angular/router";
declare var $:any;


@Component({
    selector: 'menu_top',
    templateUrl: './menutop.component.html'
})
export class MENUTOP implements OnInit {
    loichao: string='';
    ds_menu: any[] = ds_menu;
    hienform:boolean=true;
    role:Number;
    ngOnInit() {
       
        
    
    }
   
    constructor(private route: ActivatedRoute,private router: Router) {
        if(sessionStorage.getItem("hoten")!=null)
        {
            this.loichao="Chào,"+sessionStorage.getItem("hoten");
            this.role=Number.parseInt(sessionStorage.getItem("role"));
        }
    }
    dangXuat()
    {
        
        sessionStorage.removeItem("hoten");
        sessionStorage.removeItem("role");
        sessionStorage.removeItem("sodienthoai");
        console.log(sessionStorage.getItem("role"));
        
        
        this.loichao='';
        $("#soluong").click();
        this.router.navigate(['/home']);
        
    }
    
}

