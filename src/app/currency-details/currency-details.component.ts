import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-currency-details',
  templateUrl: './currency-details.component.html',
  styleUrls: ['./currency-details.component.css']
})
export class CurrencyDetailsComponent implements OnInit {
  @Input() ob:any
  constructor() {
    console.log(this.ob)
  }

  ngOnInit() {
  }

}
