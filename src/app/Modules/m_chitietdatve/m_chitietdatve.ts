import { Component,OnInit, Input } from "@angular/core";
import { OBJECTDANGKI } from "src/app/model/dangki";
import { CHITIETDATVEXE } from "src/app/model/chitietdatve";
declare var $:any;
@Component({
    selector:'m_chitietdatve',
    templateUrl:'./m_chitietdatve.html'
})
export class CHITIETDATVE implements OnInit{
    objectDangKi:OBJECTDANGKI=new OBJECTDANGKI('','','','','','');;
    @Input() chitietdatvexe: CHITIETDATVEXE;
    chitietdatve:CHITIETDATVEXE= new CHITIETDATVEXE("","","","","","","","");
    constructor()
    {
        
    }
    
    ngOnInit(){
        this.chitietdatve=this.chitietdatvexe;
        console.log(this.chitietdatve);
    }

}