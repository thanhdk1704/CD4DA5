import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/services/base.component';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/takeUntil';
import {Observable, Subject, of, from} from 'rxjs'
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent extends BaseComponent implements OnInit {
  menus:any; 
  today:any;
  total_p:any;
  cart_items:any;
  constructor(injector: Injector) { 
    super(injector);
  }
  ngOnInit(): void {
    this.today=new DatePipe((Date()));
    console.log(this.today);
    this._api.get('api/Loai/all-with-children').takeUntil(this.unsubscribe).subscribe(dau => {
      this.menus = dau;
    }); 
    this._cart.items.subscribe((res) => {
      this.cart_items = res;
      this.total_p = 0;
      for(let x of this.cart_items){ 
        x.money = Number.parseInt(x.quantity) * Number.parseInt(x.giahientai.gia);
        this.total_p += x.quantity * x.giahientai.gia;
      } 
    });
  }
  deleteItem(item){
    this._cart.deleteItem(item.maSanPham);
  }
}