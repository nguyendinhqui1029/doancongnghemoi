import { Component, OnInit } from '@angular/core';
import { OBJECTDANGKI } from '../../model/dangki';
import { USERService } from '../../service/user.service';

@Component({
  selector: 'p_dangky',
  templateUrl: './p_dangky.component.html',
})
export class DANGKY implements OnInit  {
  objectDangKi:OBJECTDANGKI;
  thongbao:string="";
  constructor(private service_user:USERService)
  {
    this.objectDangKi=new OBJECTDANGKI('','','','','','');
    
  }
    ngOnInit() {
      }

     onSubmit()
      {
        this.addBook();

      }
       
      addBook(): void {

        this.service_user.addObjectDangKiWithObservable(this.objectDangKi)
          .subscribe( 
            data => {
              this.thongbao="Đăng kí thành công.";
            },
            // Errors will call this callback instead:
            err => {
              this.thongbao="Đăng kí không thành công.";
            }					   
           )
      }
}