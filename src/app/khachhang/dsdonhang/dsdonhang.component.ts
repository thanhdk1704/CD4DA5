import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/services/base.component';
import { KhachhangComponent } from '../khachhang.component';

@Component({
  selector: 'app-dsdonhang',
  templateUrl: './dsdonhang.component.html',
  styleUrls: ['./dsdonhang.component.css']
})
export class DsdonhangComponent extends BaseComponent  implements OnInit {
dhsbykh:any;index:any;size:any ;khach:any;
dsdonhang:any;
response:any;
totalItems:any;
  constructor(injector:Injector) {
    super(injector);
  }
// /api/qldonhang/get-by-kh
  ngOnInit(): void {
    this.index=1;this.size=12;
    this._login.items.subscribe((res) => {
      this.khach = res;
   
      
    });
       
    this.getDonHangByKhachHang();
    
  }
  taiKhoan(){
    this._login.items.subscribe((res) => {
      this.khach = res;
     
    });
  }
  getDonHangByKhachHang(){
    this._api.get('api/QLDonHang/get-by-kh/'+this.khach[0].maKhachHang+'/'+1+'/'+12).takeUntil(this.unsubscribe).subscribe(dau => {
      this.response = dau;
      this.dsdonhang=this.response.data;
      this.totalItems=this.response.totalItems;
      console.log(this.dsdonhang);
      
    }); 
  }
  huyDon(){

  }
  
}
