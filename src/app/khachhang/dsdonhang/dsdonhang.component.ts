import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/services/base.component';
import { KhachhangComponent } from '../khachhang.component';

@Component({
  selector: 'app-dsdonhang',
  templateUrl: './dsdonhang.component.html',
  styleUrls: ['./dsdonhang.component.css']
})
export class DsdonhangComponent extends BaseComponent  implements OnInit {
dhsbykh:any;index:any;size:any 
  constructor(private khach:KhachhangComponent,injector:Injector) {
    super(injector);
  }
// /api/qldonhang/get-by-kh
  ngOnInit(): void {
    this.index=1;this.size=12;
    this._login.items.subscribe((res) => {
      this.khach.acc = res;
   
      
    });
        
    
  }
  taiKhoan(){
    this._login.items.subscribe((res) => {
      this.khach.acc = res;
     
    });
  }
  
}
