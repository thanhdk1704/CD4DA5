import { Component, OnInit, Input, Output, EventEmitter, Injector} from '@angular/core';
import { BaseComponent } from '../services/base.component';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent extends BaseComponent implements OnInit {

  @Input() searchMember:any;
  constructor(private injector:Injector) {
    super(injector);
  }

  ngOnInit(): void {
  }
  
  renderSearchResult(){
        
  }
}
