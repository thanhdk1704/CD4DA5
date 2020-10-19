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
  constructor(injector:Injector) {
    super(injector);
   }

  ngOnInit(): void {
    this.sptheoloai=[];
    this._route.params.subscribe(params => {
      let idd = params['id'];
      this._api.get('api/QLSanPham/all-in-loai-2/'+idd).takeUntil(this.unsubscribe).subscribe(res => {
        this.sptheoloai = res;
      
      }); 
    }, err => { });

  }

}
