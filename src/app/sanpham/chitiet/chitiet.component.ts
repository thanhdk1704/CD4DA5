import { Component, OnInit,NgModule,Injector } from '@angular/core';
import { BaseComponent } from '../../services/base.component';
import { Observable } from 'rxjs';
import {  combineLatest } from 'rxjs';
@Component({
  selector: 'app-chitiet',
  templateUrl: './chitiet.component.html',
  styleUrls: ['./chitiet.component.css']
})
export class ChitietComponent extends BaseComponent implements OnInit {
  constructor(injector: Injector) { 
    super(injector);
  }
  ngOnInit(): void {
    this.loadScripts();
  }

}
