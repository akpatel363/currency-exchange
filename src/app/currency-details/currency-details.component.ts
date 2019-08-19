import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-currency-details',
  templateUrl: './currency-details.component.html',
  styleUrls: ['./currency-details.component.css']
})
export class CurrencyDetailsComponent implements OnInit {
  @Input() ob:Object
  @Output() changeRates:EventEmitter<Object>
  constructor() {
    this.changeRates = new EventEmitter<Object>()
  }
  ngOnInit() {}
  change(){
    this.changeRates.emit(this.ob)
  }
}
