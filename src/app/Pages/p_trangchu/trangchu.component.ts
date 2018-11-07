import { NgModule,Component,OnInit } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule } from '@agm/core';


@Component({
    selector:'trang_chu',
    styles: [`
    agm-map {
      height: 300px;
    }
  `],
    templateUrl:'./trangchu.component.html'
})
export class TRANGCHU implements OnInit{
    

    constructor(){

    }
    ngOnInit(){

    }

    
}

