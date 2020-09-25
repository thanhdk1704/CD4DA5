import { Component, OnInit,Injector } from '@angular/core';
import { Observable } from 'rxjs';
import {  combineLatest } from 'rxjs';
import { BaseComponent } from '../services/base.component';
@Component({
  selector: 'app-dangnhapdangky',
  templateUrl: './dangnhapdangky.component.html',
  styleUrls: ['./dangnhapdangky.component.css']
})
export class DangnhapdangkyComponent extends BaseComponent implements OnInit {
  constructor(injector: Injector) { 
    super(injector);
  }
 
  ngOnInit(): void {
    this.loadScripts();
  }

}
