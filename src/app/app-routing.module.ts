import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DangnhapdangkyComponent } from './dangnhapdangky/dangnhapdangky.component';
import { HomeComponent } from './home/home.component';
import { Page404Component } from './layouts/page404/page404.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  
  {path:'login',component:DangnhapdangkyComponent},
  {path:'shop',loadChildren:()=>import('./sanpham/sanpham.module').then(x=>x.SanphamModule)},
  {path:'taikhoan',loadChildren:()=>import('./khachhang/khachhang.module').then(x=>x.KhachhangModule)},
  {path:'cart',loadChildren:()=>import('./giohang/giohang.module').then(x=>x.GiohangModule)},
  {path:'**',component:Page404Component}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
