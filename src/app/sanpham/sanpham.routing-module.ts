import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChitietComponent } from './chitiet/chitiet.component';
import { DanhsachComponent } from './danhsach/danhsach.component';
import { SanphamComponent } from './sanpham.component';
import { SptheohangComponent } from './sptheohang/sptheohang.component';


const routes: Routes = [
{path:'',component:SanphamComponent,children:[
  {path:'list',component:DanhsachComponent},
  {path:'chi-tiet',component:ChitietComponent}
]
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SanphamRoutingModule { }
