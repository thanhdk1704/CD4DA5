import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KhachhangRoutingModule } from './khachhang.routing-module';
import { TaikhoanComponent } from './taikhoan/taikhoan.component';
import { KhachhangComponent } from './khachhang.component';
import { SuathongtinComponent } from './suathongtin/suathongtin.component';
import { DsdonhangComponent } from './dsdonhang/dsdonhang.component';
import { CtdonhangComponent } from './ctdonhang/ctdonhang.component';




@NgModule({
  declarations: [
    TaikhoanComponent,
    KhachhangComponent,
    SuathongtinComponent,
    DsdonhangComponent,
    CtdonhangComponent
  ],
  imports: [
    CommonModule,
KhachhangRoutingModule
  ]
})
export class KhachhangModule { }