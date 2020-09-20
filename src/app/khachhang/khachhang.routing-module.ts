import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaikhoanComponent } from './taikhoan/taikhoan.component';


const routes: Routes = [
  {path:'',component:TaikhoanComponent},
 
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KhachhangRoutingModule { }
