import { Component, OnInit } from '@angular/core';
import {USERService} from '../../service/user.service'
import { ActivatedRoute, Router } from '@angular/router';
import { OBJECTDANGKI } from 'src/app/model/dangki';
@Component({
  selector: 'p_dangnhap',
  templateUrl: './p_dangnhap.component.html',
})
export class DANGNHAP implements OnInit  {
  objectDangKi:OBJECTDANGKI=new OBJECTDANGKI('','','','','','');;
  taikhoan:string="";
  matkhau:string="";
  thongbao:string="";
  loichao: string = '';
  constructor(private user_service:USERService,private route: ActivatedRoute,private router: Router)
  {
    if(sessionStorage.getItem("taikhoan")!="")
    {
      this.taikhoan=sessionStorage.getItem("taikhoan");
    }
    
  }
    ngOnInit() {
      }
    onDangNhap(form_dang_nhap: any)
      {
        if(form_dang_nhap.form.valid){
        this.DangNhap();
        }
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
              sessionStorage.setItem("hoten", reponse.Items[0].hoten.S);
              sessionStorage.setItem("role",reponse.Items[0].role.N);
              console.log(sessionStorage.getItem("role"));
              sessionStorage.setItem("sodienthoai",reponse.Items[0].sodienthoai.S);
              this.router.navigate(['/home']);
            } else {
              alert('Trình duyệt của bạn không hỗ trợ localStorage. Hãy nâng cấp trình duyệt để sử dụng!');
            }
           
          }
        }); 
    }
}