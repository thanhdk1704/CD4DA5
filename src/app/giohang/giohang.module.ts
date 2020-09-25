import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GiohangComponent } from './giohang.component';
import { CheckoutComponent } from './checkout/checkout.component';
import {  ReactiveFormsModule } from '@angular/forms';
import { GiohangRoutingModule } from './giohang-routing.module';



@NgModule({
  declarations: [
      GiohangComponent,
      CheckoutComponent
  ],
  imports: [
    CommonModule,
ReactiveFormsModule,GiohangRoutingModule
  ],
  providers:[
    
  ]
})
export class GiohangModule { }