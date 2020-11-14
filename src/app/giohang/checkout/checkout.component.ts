import { Component, Injector, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  constructor(private fb:FormBuilder,injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.gettinh();
    this.ab=1;
  
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
    this.FormTTDonHang();
  }
  FormTTDonHang(){
    this.formdonhang = this.fb.group({
      hoten:['', Validators.required],
      tinh:['', Validators.required], 
      huyen: ['', Validators.required], 
      xa: ['', Validators.required], 
      sdt : ['', Validators.required],
      diachi:[''],
      email: ['', Validators.required]
    });
  }
  get f() { return this.formdonhang.controls; }
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
   themdonhang(value){
    this.summited=true;
    let tg=[];
    this.cartitems.forEach(element => {
      let singleitem={
        "maSanPham":element.maSanPham,
        "tenSanPham":element.tenSanPham,
        "anh":element.anh,
        "link":element.link,
        "quantity":Number.parseInt(element.quantity),
        "donGia":Number.parseInt(element.giahientai.gia)
    };
    tg.push(singleitem);
    });
      let hoadon = {
       maKH:null,
       maShop:'S0001',
       thanhToan:1,
       maDiaChi:null,
       chitiet:tg,
         tenKH:value.hoten,
         email:value.email,
        soDienThoai:value.sdt,
        xa:Number.parseInt(value.xa),
        huyen:Number.parseInt(value.huyen),
        tinh:Number.parseInt(value.tinh),
        dcChitiet:value.diachi,
       };debugger; console.log(hoadon);
       
      this._api.post('api/QLDonHang/them', hoadon).takeUntil(this.unsubscribe).subscribe(res => {
        
        alert('Đặt hàng thành công');
         }, err => { });      
   
    
  }
  }
  


