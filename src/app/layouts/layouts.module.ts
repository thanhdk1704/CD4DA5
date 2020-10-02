import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import  {SanphamModule} from '../sanpham/sanpham.module';
import { KhachhangModule } from '../khachhang/khachhang.module';
import { GiohangModule } from '../giohang/giohang.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SanphamModule,
    KhachhangModule,
    GiohangModule
  ]
})
export class LayoutsModule { }
