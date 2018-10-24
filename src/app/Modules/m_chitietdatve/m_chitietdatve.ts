import { Component,OnInit } from "@angular/core";
import { OBJECTDANGKI } from "src/app/model/dangki";
declare var $:any;
@Component({
    selector:'m_chitietdatve',
    templateUrl:'./m_chitietdatve.html'
})
export class CHITIETDATVE implements OnInit{
    objectDangKi:OBJECTDANGKI=new OBJECTDANGKI('','','','','','');;
    constructor()
    {
        
    }
    
    ngOnInit(){

    }

}