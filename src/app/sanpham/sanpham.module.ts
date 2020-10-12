import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DanhsachComponent } from './danhsach/danhsach.component';
import { ChitietComponent } from './chitiet/chitiet.component';
import { SanphamRoutingModule} from '../sanpham/sanpham.routing-module';
import { SptheoloaiComponent } from './sptheoloai/sptheoloai.component';
import { SptheohangComponent } from './sptheohang/sptheohang.component';
import {  ReactiveFormsModule } from '@angular/forms';
import { Sanphamtheoloai2Component } from './sanphamtheoloai2/sanphamtheoloai2.component';



@NgModule({
  declarations: [
    DanhsachComponent,
    ChitietComponent,
     SptheoloaiComponent, 
     SptheohangComponent, Sanphamtheoloai2Component
  ],
  imports: [
    CommonModule,
SanphamRoutingModule,
ReactiveFormsModule
  ]
})
export class SanphamModule { }