import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private itemsSubject = new BehaviorSubject<any[]>([]);
  items = this.itemsSubject.asObservable();
  constructor() {
    let local_storage = JSON.parse(localStorage.getItem('account'));
    if (!local_storage) {
      local_storage = [];
    }
    this.itemsSubject.next(local_storage); 
  }
  
  login(account){
    let local_storage=[];
    if(account) local_storage.push(account);
  }
logOut(){
  localStorage.clear();
  this.itemsSubject.next(null);
}
  getAccount() {
    if (localStorage.getItem('account') == null) {
      return [];
    } else {
      return JSON.parse(localStorage.getItem('account'));
    }
  }
}