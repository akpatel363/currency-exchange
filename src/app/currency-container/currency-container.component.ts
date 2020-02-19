import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CurrencyService } from '../commons/currency.service';

@Component({
  selector: 'app-currency-container',
  templateUrl: './currency-container.component.html',
  styleUrls: ['./currency-container.component.css']
})
export class CurrencyContainerComponent implements OnInit {
  mainhold:Array<any>
  currentData: Object
  sortNo: Number
  searchQuery:String
  error:string
  constructor(private service: CurrencyService, private route: ActivatedRoute) { }
  private parseRoute() {
    this.route.queryParamMap.subscribe(params => {
      this.mainhold = []
      this.searchQuery = this.error =null
      if (params.get('code')&& params.get('name')) {
        this.currentData = { code: params.get('code'), name: params.get('name') }
      } else {
        this.currentData = { name: "Indian Rupee", code: "INR" }
      }
      this.getCurrencyData()
    })
  }
  private getCurrencyData() {
    const obs = this.service.getdata(this.currentData['code']).subscribe(response => {
      this.mainhold = response
    },(err)=>{this.error=err.message},()=>obs.unsubscribe())
  }
  getData(){
    if(this.searchQuery){
      return this.mainhold.filter((item)=>{
        if((item['name'] as String).toLowerCase().includes(this.searchQuery.toLowerCase())){
          return item
        }
      })
    }else{
      return this.mainhold
    }
  }
  ngOnInit() { this.parseRoute() }
  resetData(){ this.searchQuery = null }
  trackData = (index, currency) => currency ? currency.name : undefined
  sort() {
    switch (this.sortNo) {
      case 1: this.sortByName(); break;
      case 2: this.sortByRate(); break;
      case 3: this.sortByInverseRate(); break;
    }
  }
  sortOrderReceived(no: number) {
    this.sortNo = no;
    this.sort()
  }
  sortByName() {
    this.mainhold.sort((a, b) => a.name.trim() > b.name.trim() ? 1 : -1)
  }
  sortByRate() {
    this.mainhold.sort((a, b) => a.rate > b.rate ? 1 : -1)
  }
  sortByInverseRate() {
    this.mainhold.sort((a, b) => a.inverseRate > b.inverseRate ? 1 : -1)
  }
}