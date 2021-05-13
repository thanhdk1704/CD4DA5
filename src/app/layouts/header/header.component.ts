import { Component, Injector, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { BaseComponent } from 'src/app/services/base.component';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/takeUntil';
import { Observable, Subject, of, from } from 'rxjs'
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent extends BaseComponent implements OnInit {
  @Output() searchKeys = new EventEmitter();
  menus: any;
  today: any;
  total_p: any;
  total_w: any;
  cart_items: any;
  account: any;
  tf: any;
  constructor(injector: Injector, private router: Router) {
    super(injector);
  }
  ngOnInit(): void {


    this.tf = true;
    this.today = new DatePipe((Date()));
    console.log(this.today);
    this._api.get('api/Loai/all-with-children').takeUntil(this.unsubscribe).subscribe(dau => {
      this.menus = dau;
    });
    this._cart.items.subscribe((res) => {
      this.cart_items = res;
      this.total_p = 0;
      for (let x of this.cart_items) {
        x.money = Number.parseInt(x.quantity) * Number.parseInt(x.giahientai.gia);
        this.total_p += x.quantity * x.giahientai.gia;
      }
    }); console.log(this.tf);
    this._wishlist.items.subscribe((res) => {
      let wishlist = res;
      this.total_w = wishlist.length;

    });
    this.taiKhoan();
  }

  search() {
    let x = this._api.get("url").takeUntil(this.unsubscribe).subscribe(
      result => {
        this.searchKeys.emit(result);
        this.router.navigate['/search/result'];
      }
    )

  }

  taiKhoan() {
    this._login.items.subscribe((res) => {
      this.account = res;

    });
  }
  logout() {
    this._login.logOut();
    alert('đã đăng xuất');
    window.location.replace('');
  }
  deleteItem(item) {
    this._cart.deleteItem(item.maSanPham);
  }
}