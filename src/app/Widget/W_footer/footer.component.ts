import { Component, OnInit } from "@angular/core";
import { ds_menu } from "../../model/mock_menu";

@Component({
    selector:'Footer',
    templateUrl:"./footer.component.html"
})
export class FOOTER implements OnInit
{
    ds_menu:any[]=ds_menu;
    ngOnInit() {
       
    }
    constructor()
    {
        
    }
}