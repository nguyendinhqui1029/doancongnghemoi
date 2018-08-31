import { Component, OnInit } from '@angular/core';
import { ds_tuyenduong } from '../../../model/mock_tuyenduong';

@Component({
    selector: 'pagetuyenduong',
    templateUrl:'./tuyenduong.component.html'
})

export class TUYENDUONG implements OnInit {
    tuyenduongs:any[] = ds_tuyenduong;
    danhsachtuyenduong:any[]=[];
    constructor(){
       this.danhsachtuyenduong= this.layDSTuyenTheoTinh();
        
    }
    layDSTuyenTheoName_TuyenDuong(name:string)
    {
        let danhsachtinh:any[]=[];
        for(var i =0 ;i < this.tuyenduongs.length; i++)
        {
            if(this.tuyenduongs[i].name_tuyenduong === name)
            {
                danhsachtinh.push(this.tuyenduongs[i]);
               
            }
            
        }
        return danhsachtinh;
  
    }

    layDSTuyenTheoTinh()
    {
        let danhsachtuyen: any[]=[];
        let dstam:any[]=[];
        for(var i = 0; i<this.tuyenduongs.length;i++)
        {
            if(dstam.indexOf(this.tuyenduongs[i].name_tuyenduong)===-1)
            {
                danhsachtuyen.push({tentuyenduong:this.tuyenduongs[i].name_tuyenduong,thongtin:this.layDSTuyenTheoName_TuyenDuong(this.tuyenduongs[i].name_tuyenduong)});
                dstam.push(this.tuyenduongs[i].name_tuyenduong);
            }
        }
        console.log(danhsachtuyen);
        return danhsachtuyen;
    }
    ngOnInit() { }
}