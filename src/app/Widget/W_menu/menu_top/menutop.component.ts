import { Component, OnInit } from "@angular/core";
import { ds_menu } from '../../../model/mock_menu';
@Component({
    selector: 'menu_top',
    templateUrl: './menutop.component.html'
})
export class MENUTOP implements OnInit {
    ds_menu: any[] = ds_menu;
    ngOnInit() {
    }
    constructor() {
    }
}