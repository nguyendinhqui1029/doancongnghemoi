import { Component, OnInit } from '@angular/core';
import {USERService} from '../../service/user.service'
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'p_dangnhap',
  templateUrl: './p_dangnhap.component.html',
})
export class DANGNHAP implements OnInit  {
  taikhoan:string="";
  matkhau:string="";
  thongbao:string="";
  loichao: string = '';
  constructor(private user_service:USERService,private route: ActivatedRoute,private router: Router)
  {

    
  }
    ngOnInit() {
      }
    onDangNhap()
      {
        this.DangNhap();
      }
    DangNhap()
    {
        return  this.user_service.LayThongTinDangNhap(this.taikhoan,this.matkhau)
        .subscribe((reponse:any)=>{
          if(reponse.Count==0)
          {
            this.thongbao="Tài khoản hoặc mật khẩu không hợp lệ.";
          }else{
            if (typeof(Storage) !== 'undefined') {
              //hỗ trợ
              localStorage.setItem("hoten", reponse.Items[0].hoten);
              this.router.navigate(['/home']);
            } else {
              alert('Trình duyệt của bạn không hỗ trợ localStorage. Hãy nâng cấp trình duyệt để sử dụng!');
            }
           
          }
         

        });
        
    }
}