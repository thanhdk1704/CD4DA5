import { Component, Injector, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import {  combineLatest } from 'rxjs';
import 'rxjs/add/operator/takeUntil';
import { BaseComponent } from 'src/app/services/base.component';
@Component({
  selector: 'app-sptheoloai',
  templateUrl: './sptheoloai.component.html',
  styleUrls: ['./sptheoloai.component.css']
})
export class SptheoloaiComponent extends BaseComponent implements OnInit {
sptheoloai:any;
index:any;
size:any;
tongsl:any

  constructor(injector:Injector) {
    super(injector);
   }

  ngOnInit(): void {
    this.index=1;this.size=4;
    this.sptheoloai=[];
    this._route.params.subscribe(params => {
      let idd = params['id'];
      this._api.get('api/QLSanPham/all-in-loai-2/'+this.index+'/'+this.size+'/'+idd).takeUntil(this.unsubscribe).subscribe(res => {
        this.sptheoloai = res;
        this.tongsl=res[0].total;
      }); 
    }, err => { });

  }
  loadPage(page) { 
    this._route.params.subscribe(params => {
      let id = params['id'];
      this._api.get('api/QLSanPham/all-in-loai-2/'+page+'/'+this.size+'/'+id).takeUntil(this.unsubscribe).subscribe(res => {
        this.sptheoloai = res.data;
       
        }, err => { });       
   });   
  }
  addToCart(it) { 
    this._cart.addToCart(it);
    alert('Thêm thành công!'); 
  }
}
