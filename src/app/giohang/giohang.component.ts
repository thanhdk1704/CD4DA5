import { Component, OnInit,Injector } from '@angular/core';
import { BaseComponent } from '../services/base.component';
import { Observable } from 'rxjs';
import {  combineLatest } from 'rxjs';
@Component({
  selector: 'app-giohang',
  templateUrl: './giohang.component.html',
  styleUrls: ['./giohang.component.css']
})
export class GiohangComponent extends BaseComponent implements  OnInit {
  constructor(injector: Injector) { 
    super(injector);
  }

  ngOnInit(): void {
    this.loadScripts;
  }

}
