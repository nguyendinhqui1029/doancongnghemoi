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
    flag:boolean=true;
    chonghe()
    {
        if(this.flag==true)
        {
            $("#danhsachghe").slideDown() ;
            $("#muoiten").addClass("fas fa-angle-double-down");
            $("#muoiten").removeClass("fas fa-angle-double-up");
            this.flag=false;
        }else{
            $("#danhsachghe").slideUp() ;
            $("#muoiten").removeClass("fas fa-angle-double-down");
            $("#muoiten").addClass("fas fa-angle-double-up");
            this.flag=true;
        }
        
    }
    ngOnInit(){
        this.chitietdatve=new CHITIETDATVEXE("ww","ww","ww","ww","ww","","","");//this.chitietdatvexe;
       
        // console.log(this.chitietdatve);
    }

}