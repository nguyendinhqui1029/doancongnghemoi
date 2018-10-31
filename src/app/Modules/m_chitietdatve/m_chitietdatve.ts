import { Component,OnInit, Input } from "@angular/core";
import { OBJECTDANGKI } from "src/app/model/dangki";
declare var $:any;
@Component({
    selector:'m_chitietdatve',
    templateUrl:'./m_chitietdatve.html'
})
export class CHITIETDATVE implements OnInit{
    objectDangKi:OBJECTDANGKI=new OBJECTDANGKI('','','','','','');;
    //@Input() toado: Diadiemthanhpholon;
    constructor()
    {
        
    }
    
    ngOnInit(){

    }

}