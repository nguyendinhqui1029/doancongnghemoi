import { Component,OnInit } from "@angular/core";
//import { ds_diadiemthanhpholon} from '../../../model/mock_diadiemthanhpholon';
import { Diadiemthanhpholon } from "src/app/model/diadiemthanhpholon";
import { from } from "rxjs";
import { ThanhPhoLonService } from "src/app/service/thanhpholon.service";

@Component({
    selector:'p_khoihanhtp',
    templateUrl:'./p_khoihanhtp.component.html',
    
})
export class KHOIHANHTP implements OnInit{

   



    //ds_diadiemthanhpholon : Diadiemthanhpholon[] =  ds_diadiemthanhpholon;
    ds_diadiemthanhpholon:any[]=[];
    sodong: number=Math.round(this.ds_diadiemthanhpholon.length/3)+1;
    ds_phantu: any[]=[];
    ds_cacphantu:any[]=[];

    constructor(private servivce_diadiemthanhpholon: ThanhPhoLonService){
        this.getListThanhPhoLon();
       
        
    }
    ngOnInit(){
       
    }

    getListThanhPhoLon()
    {
        return this.servivce_diadiemthanhpholon.laydanhsachthanhpholon()
        .subscribe((reponse:any[])=> {
            this.ds_diadiemthanhpholon = reponse;
            console.log(this.ds_diadiemthanhpholon);
            if(this.ds_diadiemthanhpholon.length>0)
            {
                this.ds_diadiemthanhpholon.forEach(element => {
                    element.diemden_diadiem =  element.diemden_diadiem.S;
                    element.hinh_diadiem =  element.hinh_diadiem.S;
                    element.id_diadiem =  element.id_diadiem.S;
                    element.kinhdo =  element.kinhdo.S;
                    element.vido =  element.vido.S;
                    element.sodienthoai_diadiem =  element.sodienthoai_diadiem.S;
                    element.ten_diadiem =  element.ten_diadiem.S;
                });
            }
             /// Chia dòng trên trang chủ
            for(let i=1;i<this.ds_diadiemthanhpholon.length+1;i++)
            {
                this.ds_phantu.push(this.ds_diadiemthanhpholon[i-1]);
                if(i% 3 == 0)
                {
                    this.ds_cacphantu.push(this.ds_phantu);
                    this.ds_phantu=[];
                }
                
            }
        });
    }
    
    toado: Diadiemthanhpholon = {
        "id_diadiem":"1", "ten_diadiem":"Sài Gòn","sodienthoai_diadiem":"19006067",
        "kinhdo":"10.7553411","vido":"106.4150244",
        "diemden_diadiem":"Châu Đốc, Cần Thơ, Cà Mau, Đà Lạt, Mũi Né, Qui Nhơn, Nha Trang,...",
        "hinh_diadiem":"webfutabusline-01.png"
    }
    toados = this.ds_diadiemthanhpholon;

    selectedItem: Diadiemthanhpholon;
    xembando(toado: Diadiemthanhpholon): void {
      this.selectedItem = toado;
  }
    
    
}