import { Component, OnInit } from '@angular/core';
import { ds_chinhanh } from '../../../model/mock_chinhanh';

@Component({
    selector: 'p_chinhanh',
    templateUrl: './p_chinhanh.component.html'
})

export class CHINHANH implements OnInit {
    chinhanhs:any[]=ds_chinhanh;
    dsMN:any[]=[];
    dsMT:any[]=[];
    dsMB:any[]=[];
    tongsoMB:number;
    tongsoMT:number;
    tongsoMN:number;
    constructor(){
        this.dsMN=this.layDSTheoMien("MN");
        this.dsMT=this.layDSTheoMien("MT");
        this.dsMB=this.layDSTheoMien("MB");
        this.tongsoMB=this.dsMB.length;
        this.tongsoMN=this.dsMN.length;
        this.tongsoMT=this.dsMT.length;
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

    ngOnInit() { }
}
