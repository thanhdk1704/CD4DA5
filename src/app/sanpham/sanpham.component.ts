import { Component, OnInit,Injector,Output } from '@angular/core';
import { BaseComponent } from '../services/base.component';

@Component({
  selector: 'app-sanpham',
  templateUrl: './sanpham.component.html',
  styleUrls: ['./sanpham.component.css']
})
export class SanphamComponent extends BaseComponent implements OnInit {
  constructor(injector: Injector) { 
    super(injector);
  }
  ngOnInit(): void {
    this.loadScripts();
  }


}
