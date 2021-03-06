import { Component, OnInit } from '@angular/core';
import { OBJECTDANGKI } from '../../model/dangki';
import { USERService } from '../../service/user.service';

@Component({
  selector: 'p_dangky',
  templateUrl: './p_dangky.component.html',
})
export class DANGKY implements OnInit  {
  objectDangKi:OBJECTDANGKI=new OBJECTDANGKI('','','','','','');;
  thongbao:string="";
  nhap_lai_mat_khau: string = "";
  constructor(private service_user:USERService)
  {
    
  }
    ngOnInit() {
      }

      gui_form(form_dang_ky: any){
        if(form_dang_ky.form.valid){
          if(Number.parseInt(sessionStorage.getItem("role"))!=1)
         {
           this.objectDangKi.role=2;
           
         } else if(Number.parseInt(sessionStorage.getItem("role"))==1){
          this.objectDangKi.role=1;
         }
         this.service_user.addObjectDangKiWithObservable(this.objectDangKi)
         .subscribe( 
           data => {
             this.thongbao="Đăng kí thành công.";
             sessionStorage.setItem("taikhoan",this.objectDangKi.email);
           },
           // Errors will call this callback instead:
           err => {
             this.thongbao="Đăng kí không thành công.";
           }					   
          )
        }
    }
       
}