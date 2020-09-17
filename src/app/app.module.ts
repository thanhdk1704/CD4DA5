import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { Page404Component } from './layouts/page404/page404.component';
import { SanphamComponent } from './sanpham/sanpham.component';
import { DanhsachComponent } from './sanpham/danhsach/danhsach.component';
import { ChitietComponent } from './sanpham/chitiet/chitiet.component';
import { GiohangComponent } from './giohang/giohang.component';
import { CheckoutComponent } from './giohang/checkout/checkout.component';
import { KhachhangComponent } from './khachhang/khachhang.component';
import { TaikhoanComponent } from './khachhang/taikhoan/taikhoan.component';
import { SuathongtinComponent } from './khachhang/suathongtin/suathongtin.component';
// import { TaikhoanComponent } from './taikhoan/taikhoan.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    Page404Component,
    SanphamComponent,
    DanhsachComponent,
    ChitietComponent,
    GiohangComponent,
    CheckoutComponent,
    KhachhangComponent,
    TaikhoanComponent,
    SuathongtinComponent,
    // TaikhoanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
