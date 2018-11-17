import { Component, OnInit } from '@angular/core';
//import { ds_chinhanh } from '../../../model/mock_chinhanh';
import {ChiNhanhService } from '../../../service/chinhanh.service';
import { ChiNhanh } from '../../../model/chinhanh';

@Component({
    selector: 'p_chinhanh',
    templateUrl: './p_chinhanh.component.html'
})

export class CHINHANH implements OnInit {
    //chinhanhs:any[]=ds_chinhanh;
    chinhanhs:any[]=[];
    dsMN:any[]=[];
    dsMT:any[]=[];
    dsMB:any[]=[];
    tongsoMB:number;
    tongsoMT:number;
    tongsoMN:number;
    constructor(private service_chi_nhanh: ChiNhanhService){
        this.getListChiNhanh();
    //   this.dsMN=this.layDSTheoMien("MN");
    //   this.dsMT=this.layDSTheoMien("MT");
    //   this.dsMB=this.layDSTheoMien("MB");
    //   this.tongsoMB=this.dsMB.length;
    //   this.tongsoMN=this.dsMN.length;
    //   this.tongsoMT=this.dsMT.length;
    }
    
    getListChiNhanh()
    {
        return  this.service_chi_nhanh.getListChiNhanh()
        .subscribe((reponse:any[])=>{this.chinhanhs=reponse;
            console.log(this.chinhanhs);
            if(this.chinhanhs.length >0)
            {

               
                this.chinhanhs.forEach(element => {

                    element.id_chinhanh=element.id_chinhanh.S;
                    element.name_chinhanh=element.name_chinhanh.S;
                    element.diachi_chinhanh=element.diachi_chinhanh.S;
                    element.kinhdo_chinhanh=element.kinhdo_chinhanh.S;
                    element.vido_chinhanh=element.vido_chinhanh.S;
                    element.mien_chinhanh=element.mien_chinhanh.S;
                    element.sdt_chinhanh=element.sdt_chinhanh.S;
                });
                this.dsMN=this.layDSTheoMien("MN");
                this.dsMT=this.layDSTheoMien("MT");
                this.dsMB=this.layDSTheoMien("MB");
                this.tongsoMB=this.dsMB.length;
                this.tongsoMN=this.dsMN.length;
                this.tongsoMT=this.dsMT.length;
               
            }
            
            
        });
        
    }


   
    layDSTheoMien(mien:string){
        let dsMien:any[]=[];
        for (var i = 0; i <this.chinhanhs.length; i++) {
            if(this.chinhanhs[i].mien_chinhanh===mien)
           {
                dsMien.push(this.chinhanhs[i]);
           } 
        }
        return dsMien;
    }

    ngOnInit() {}

    toado: ChiNhanh = {
         "id_chinhanh": 1,
         "name_chinhanh": "Châu Đốc",
            "diachi_chinhanh":"89 Phan Văn Vàng, TP.Châu Đốc, An Giang",
           "sdt_chinhanh": "01212121",
            "kinhdo_chinhanh": "10.6878929",
            "vido_chinhanh": "105.019906",
             "mien_chinhanh":"MN"
    }

    //toados = ds_chinhanh;
    selectedItem: ChiNhanh;
    xembando(toado: ChiNhanh): void {
        this.selectedItem = toado;
        console.log(this.selectedItem )
    }
}
