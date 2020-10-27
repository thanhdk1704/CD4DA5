import { Component, Injector, OnInit } from '@angular/core';
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
  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this._cart.items.subscribe((res) => {
      this.cartitems = res;
      this.total = 0;
      this.totalamount=0
      for(let x of this.cartitems){ 
        x.money = Number.parseInt(x.quantity) * Number.parseInt(x.giahientai.gia);
        this.totalamount+=x.quantity;
        this.total += x.quantity * x.giahientai.gia;
       
      }  
    });setTimeout(() => {
      this.loadScripts();
    },);
  }

}
