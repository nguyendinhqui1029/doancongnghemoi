import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';

import {DIEUKHOAN} from './Pages/p_dieu_khoan/p_dieukhoan.component';
import {KHUYENMAI} from './Pages/p_khuyenmai/p_khuyenmai.component';
import {TRANGCHU} from './Pages/p_trangchu/trangchu.component';
import { HUONGDAN } from './Pages/p_huongdan/p_huongdan.component';
import { LIENHE } from './Pages/p_lienhe/p_lienhe.component';
import { LICHTRINH } from './Pages/p_lichtrinh/p_lichtrinh.component';
import { DANGNHAP } from './Pages/p_dangnhap/p_dangnhap.component';
import { DANGKY } from './Pages/p_dangky/p_dangky.component';
import { GIOITHIEU } from './Pages/p_gioithieu/p_gioithieu.component';
import { CHITIETLICHTRINH } from './Pages/p_chitietlichtrinh/p_chitietlichtrinh.component';

const routes: Routes=[
    {path: '', component:TRANGCHU},
    {path: 'home', component:TRANGCHU},
    {path: 'khuyenmai', component:KHUYENMAI},
    {path: 'dieukhoan', component:DIEUKHOAN},
    {path: 'huongdan', component:HUONGDAN},
    {path: 'lienhe', component:LIENHE},
    {path: 'lichtrinh', component:LICHTRINH},
    {path: 'dangnhap', component:DANGNHAP},
    {path: 'dangky', component:DANGKY},
    {path: 'gioithieu', component:GIOITHIEU},
    {path: 'chitietlichtrinh/:g/:c', component:CHITIETLICHTRINH},

];
export const routing = RouterModule.forRoot(routes);
