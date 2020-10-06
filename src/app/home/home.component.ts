import { Component, OnInit, AfterViewInit, Injector } from '@angular/core';
import { BaseComponent } from '../services/base.component';
import { Observable } from 'rxjs';
import {  combineLatest } from 'rxjs';
import 'rxjs/add/operator/takeUntil';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends BaseComponent implements OnInit {
  menus:any; 
  list_item:any;
  constructor(injector: Injector) { 
    super(injector);
  }
 
  ngOnInit(): void {
    this._api.get('api/Loai/all-with-children').takeUntil(this.unsubscribe).subscribe(res => {
      this.menus = res;
    }); 
    // Observable.combineLatest(
    //   this._api.get('/api/item/get-all'),
    // ).takeUntil(this.unsubscribe).subscribe(res => {
    //   this.list_item = res[0];
    //   setTimeout(() => {
        this.loadScripts();
  //     });
  //   }, err => { });
  // }
  
  // addToCart(it) { 
  //   this._cart.addToCart(it);
  //   alert('Thêm thành công!'); 
  // 
}
}