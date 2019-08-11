import { Component, OnInit, Input } from '@angular/core';
import { CurrencyService } from '../CurrencyService';

@Component({
  selector: 'app-currency-container',
  templateUrl: './currency-container.component.html',
  styleUrls: ['./currency-container.component.css']
})
export class CurrencyContainerComponent implements OnInit {
  @Input() list=[]
  constructor() {
  }
  ngOnInit() {}
  search(message){
    console.log(message)
  }
  trackData(index,currency){
    return currency ? currency.name:undefined;
  }
}
