import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {  MENU } from './Widget/W_menu/menu.component';
import { TRANGCHU } from './Pages/p_trangchu/trangchu.component';
import { MENUTOP } from './Widget/W_menu/menu_top/menutop.component';
import { MENUBOTTOM } from './Widget/W_menu/menu_bottom/menubottom.component';
import { FOOTER } from './Widget/W_footer/footer.component';
import { MODALCONTENT } from './Modules/m_modalcontent/m_modalcontent.component';
import { DIEUKHOAN } from './Pages/p_dieu_khoan/p_dieukhoan.component';
import { KHUYENMAI } from './Pages/p_khuyenmai/p_khuyenmai.component';
import { RouterModule } from '@angular/router';
import { routing } from './app.routing';
import { HUONGDAN } from './Pages/p_huongdan/p_huongdan.component';
import { LIENHE } from './Pages/p_lienhe/p_lienhe.component';
import { LICHTRINH } from './Pages/p_lichtrinh/p_lichtrinh.component';
import { TUYENDUONG } from './Pages/p_lichtrinh/tuyenduong/tuyenduong.component';
import { CHITIETTUYENDUONG } from './Pages/p_lichtrinh/chitiettuyenduong/chitiettuyenduong.component';
import { KHOIHANHTP } from './Pages/p_trangchu/p_khoihanhtp/p_khoihanhtp.component';
import { FORMLH } from './Pages/p_lienhe/p_formLH/p_formLH.component';
import { CHINHANH } from './Pages/p_lienhe/p_chinhanh/p_chinhanh.component';
import { DANGNHAP } from './Pages/p_dangnhap/p_dangnhap.component';
import { DANGKY } from './Pages/p_dangky/p_dangky.component';
import { DATVE } from './Modules/m_datve/m_datve';
import { GIOITHIEU } from './Pages/p_gioithieu/p_gioithieu.component';
import { GIOITHIEUNEWS } from './Modules/m_gioithieunews/m_gioithieunews.component';
import { CHITIETLICHTRINH } from './Pages/p_chitietlichtrinh/p_chitietlichtrinh.component';
import { ChiNhanhService } from './service/chinhanh.service';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { USERService } from './service/user.service';
import { EqualValidator } from './validators/retype_pass';
import { CHITIETDATVE} from './Modules/m_chitietdatve/m_chitietdatve';
import { M_SLIDER } from './Modules/m_slider/m_slider';
import { from } from 'rxjs';
//google API Maps
import {AgmCoreModule} from '@agm/core';
import { M_BANDO } from './Modules/m_bando/m_bando';
import { M_HUYVE } from './Modules/m_huyve/m_huyve.component';
import { TuyenDuongService } from './service/tuyenduong.service';
import { ChiTietDatVeService } from './service/chitietdatve.service';
import { ThanhPhoLonService } from './service/thanhpholon.service';


@NgModule({
  declarations: [
    AppComponent,
    DANGNHAP,DANGKY,
    MODALCONTENT,
    DIEUKHOAN,
    KHUYENMAI,
    LIENHE,FORMLH,CHINHANH,
    LICHTRINH,TUYENDUONG,CHITIETTUYENDUONG,CHITIETLICHTRINH,
    HUONGDAN,
    MENUTOP,MENU,MENUBOTTOM,FOOTER,
    TRANGCHU,KHOIHANHTP,
    DATVE,GIOITHIEU,GIOITHIEUNEWS,EqualValidator,
    CHITIETDATVE, M_BANDO,
    M_SLIDER,M_HUYVE
  ],
  imports: [
    BrowserModule,
    RouterModule,routing,HttpModule,FormsModule,
    AgmCoreModule.forRoot({
      //apiKey:"AIzaSyAkQlc7xeWjrNBfF4OOsbBwcjYvC029WMs",
      apiKey:"AIzaSyAfJTVKnpLl0ULuuwDuix-9ANpyQhP6mfc",
      libraries:["places"]
    })
  ],
  providers: [ChiNhanhService,USERService,TuyenDuongService,ChiTietDatVeService,ThanhPhoLonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
