import { Component, OnInit } from '@angular/core';
//import { ds_chinhanh } from '../../../model/mock_chinhanh';
import {ChiNhanhService } from '../../../service/chinhanh.service';
import { ChiNhanh } from '../../../model/chinhanh';
import {user} from "../../../model/user"
@Component({
    selector: 'p_chinhanh',
    templateUrl: './p_chinhanh.component.html'
})

export class CHINHANH implements OnInit {
    //chinhanhs:any[]=ds_chinhanh;
    chinhanhs:any[]=[];
    dsuser:user[]=[];
    dsMN:any[]=[];
    dsMT:any[]=[];
    dsMB:any[]=[];
    tongsoMB:number;
    tongsoMT:number;
    tongsoMN:number;
    constructor(private service_chi_nhanh: ChiNhanhService){
        this.getListChiNhanh();
        this.getListUser();
    }
    
    getListChiNhanh()
    {
        return  this.service_chi_nhanh.getListChiNhanh()
        .subscribe((reponse:any[])=>{this.chinhanhs=reponse;
            this.dsMN=this.layDSTheoMien("MN");
            this.dsMT=this.layDSTheoMien("MT");
            this.dsMB=this.layDSTheoMien("MB");
            this.tongsoMB=this.dsMB.length;
            this.tongsoMN=this.dsMN.length;
            this.tongsoMT=this.dsMT.length;

        });
        
    }
    hiendiachiemail(a:any)
    {
        this.dsuser=a;
    }
    getListUser()
    {
        return  this.service_chi_nhanh.getListUser()
        .subscribe((reponse:any[])=>{this.dsuser=reponse;
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
}
