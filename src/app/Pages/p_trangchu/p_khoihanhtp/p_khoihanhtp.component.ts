import { Component,OnInit } from "@angular/core";
import { ds_diadiemthanhpholon} from '../../../model/mock_diadiemthanhpholon';
import { Diadiemthanhpholon } from "src/app/model/diadiemthanhpholon";
import { from } from "rxjs";

@Component({
    selector:'p_khoihanhtp',
    templateUrl:'./p_khoihanhtp.component.html',
    
})
export class KHOIHANHTP implements OnInit{

   

    ////
    //toado: any="";

    ///


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
    
    toado: Diadiemthanhpholon = {
        "id_diadiem":"1", "ten_diadiem":"Sài Gòn","sodienthoai_diadiem":"19006067",
        "kinhdo":"10.7553411","vido":"106.4150244",
        "diemden_diadiem":"Châu Đốc, Cần Thơ, Cà Mau, Đà Lạt, Mũi Né, Qui Nhơn, Nha Trang,...",
        "hinh_diadiem":"webfutabusline-01.png"
    }
    toados = ds_diadiemthanhpholon;

    selectedItem: Diadiemthanhpholon;
    xembando(toado: Diadiemthanhpholon): void {
      this.selectedItem = toado;
  }
    
    
}