import { Component,OnInit, Output, EventEmitter } from "@angular/core";
import { ds_diadiemthanhpholon} from '../../../model/mock_diadiemthanhpholon';
import { Diadiemthanhpholon } from "src/app/model/diadiemthanhpholon";


@Component({
    selector:'p_khoihanhtp',
    templateUrl:'./p_khoihanhtp.component.html'
})
export class KHOIHANHTP implements OnInit{
/////
myName: number = 0;
/////

    ds_diadiemthanhpholon : Diadiemthanhpholon[] =  ds_diadiemthanhpholon;
    sodong: number=Math.round(this.ds_diadiemthanhpholon.length/3)+1;
    ds_phantu: any[]=[];
    ds_cacphantu:any[]=[];

    constructor(){
        /// Chia dòng trên trang chủ
        for(let i=1;i<ds_diadiemthanhpholon.length+1;i++)
        {
            this.ds_phantu.push(ds_diadiemthanhpholon[i-1]);
            if(i% 3 == 0)
            {
                this.ds_cacphantu.push(this.ds_phantu);
                this.ds_phantu=[];
            }
            
        }
        
    }
    ngOnInit(){

    }
    
    xembando(kinhdo,vido)
    {
        
        this.myName=kinhdo;
        console.log(kinhdo);
    }


    
}