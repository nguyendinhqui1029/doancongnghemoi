import { Component, OnInit } from '@angular/core';
import { ChiNhanhService } from 'src/app/service/chinhanh.service';

declare var $: any;
@Component({
    selector: 'plienhe',
    templateUrl: './p_lienhe.component.html'
})


export class LIENHE implements OnInit {
    ds_timChiNhanh: any[] = [];
    constructor(private chiNhanhService: ChiNhanhService) {

    }

    ngOnInit() { }

    layChiNhanhService(chuoi) {
        this.ds_timChiNhanh = [];
        if (chuoi.target.value != "") {
            this.chiNhanhService.getTimChiNhanhLienHe(chuoi.target.value).subscribe(
                (reponse: any[]) => {
                    //console.log(this.ds_timChiNhanh);

                    if (reponse.length > 0) {
                        reponse.forEach(element => {
                            this.ds_timChiNhanh.push(element.fields);

                        });

                    } else {
                        $('#thongbaochinhanh').text('Không có chi nhánh bạn muốn tìm.');
                    }
                }

            );
        }
    }



}