import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Currency } from '../commons/Currency';
import { CurrencyService } from '../commons/currency.service';

@Component({
  selector: 'app-currency-container',
  templateUrl: './currency-container.component.html',
  styleUrls: ['./currency-container.component.css']
})
export class CurrencyContainerComponent implements OnInit, OnDestroy {
  currencies:Array<Currency>
  currentData: Object
  sortNo = 0;
  searchQuery = ""
  error:string
  sub = new Subscription()
  constructor(private service: CurrencyService, private route: ActivatedRoute) { }
  private parseRoute() {
    this.sub.add(this.route.queryParamMap.subscribe((params) => {
      this.searchQuery = this.error = null;
      this.currentData = {
        code: params.get("code") || "INR",
        name: params.get("name") || "Indian Rupee",
      };
      this.getCurrencyData();
    }));
  }

  private getCurrencyData() {
    this.currencies = null;
    this.service.getdata(this.currentData['code']).subscribe(response => {
      this.currencies = response
      this.sort()
    },(err)=>{this.error=err.message})
  }
  ngOnInit() { this.parseRoute() }
  ngOnDestroy() { this.sub.unsubscribe() }
  trackData = (index, currency) => currency ? currency.name : undefined
  sort() {
    switch (this.sortNo) {
      case 1: this.sortByName(); break;
      case 2: this.sortByRate(); break;
      case 3: this.sortByInverseRate(); break;
    }
    console.log(this.currencies)
  }
  sortOrderReceived(no: number) {
    this.sortNo = no;
    this.sort()
  }
  sortByName() {
    this.currencies.sort((a, b) => a.name.trim() > b.name.trim() ? 1 : -1)
  }
  sortByRate() {
    this.currencies.sort((a, b) => a.rate > b.rate ? 1 : -1)
  }
  sortByInverseRate() {
    this.currencies.sort((a, b) => a.inverseRate > b.inverseRate ? 1 : -1)
  }
}