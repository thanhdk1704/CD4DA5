import { Component, Injector, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BaseComponent } from 'src/app/services/base.component';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent extends BaseComponent implements OnInit {
  cartitems:any;
  totalamount:any;
  total:any;
  formdonhang:FormGroup;
  tinhs:any;
  huyens:any
  xas:any;
  summited=false;
  ab:any;
  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.gettinh();
    this.ab=1;
    this.formdonhang = new FormGroup({
      hoten: new FormControl('', Validators.required),
      tinh: new FormControl('',Validators.required), 
      huyen: new FormControl('',Validators.required), 
      xa: new FormControl('',Validators.required), 
      sdt : new FormControl(''),
      diachi:new FormControl(''),
      email: new FormControl('',[Validators.email,Validators.required]), 
    });
    this._cart.items.subscribe((res) => {
      this.cartitems = res;
      this.total = 0;
      this.totalamount=0;
      for(let x of this.cartitems){ 
        x.money = Number.parseInt(x.quantity) * Number.parseInt(x.giahientai.gia);
        this.totalamount+=x.quantity;
        this.total += x.quantity * x.giahientai.gia;
       
      }  
    });setTimeout(() => {
      this.loadScripts();
    },);
  }
  gettinh(){
    this._api.get('api/QLDonHang/get-all-tinh').takeUntil(this.unsubscribe).subscribe(dau => {
      this.tinhs = dau;
    }); 
    
  }
  gethuyenbytinh(matinh){
    this.huyens=[]
    if(matinh!="tinh"){
      this._api.get('api/QLDonHang/get-huyen-by-tinh/'+matinh).takeUntil(this.unsubscribe).subscribe(res => {
        this.huyens = res;
     
    });}
      
   }
   getxabyhuyen(mahuyen){
    this.xas=[];
    if(mahuyen!="huyen"){
      this._api.get('api/QLDonHang/get-xa-by-huyen/'+mahuyen).takeUntil(this.unsubscribe).subscribe(res => {
        this.xas = res;
   
    });}
    
  }
   themdonhang(){
    this.summited=true;
  }
  }
  


