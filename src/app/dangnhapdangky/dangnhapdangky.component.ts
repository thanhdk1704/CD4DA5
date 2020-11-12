import { Component, OnInit,Injector } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {  combineLatest } from 'rxjs';
import { BaseComponent } from '../services/base.component';
declare var $:any;
@Component({
  selector: 'app-dangnhapdangky',
  templateUrl: './dangnhapdangky.component.html',
  styleUrls: ['./dangnhapdangky.component.css']
})
export class DangnhapdangkyComponent extends BaseComponent implements OnInit {
  formdata:any;taikhoan:any;
  public submitted:any;
  constructor(private router: Router,private fb:FormBuilder,injector: Injector) { 
    super(injector);
  }
  get f() { return this.formdata.controls; }
  ngOnInit(): void {
    this.submitted=false;
    this.formLogin();
    this.loadScripts();
  }
  dangNhap(value){
    this.submitted=true;
    let tmp={
      tk:value.tendangnhap,
      emk:value.matkhau,
      email:value.tendangnhap
    }
    this._api.post('api/QLKhachHang/login',tmp).takeUntil(this.unsubscribe).subscribe(res => {
    this.taikhoan=res;
    if(this.taikhoan) {
      this._login.login(this.taikhoan);
      console.log(this.taikhoan);
      this.router.navigate(['/']);
    }
    else
    {}
      }, err => { });       
  }
  formLogin(){
   
    this.formdata = this.fb.group({
      'tendangnhap': ['', Validators.required],
      'matkhau':['', Validators.required]
    });
   
  }

}
