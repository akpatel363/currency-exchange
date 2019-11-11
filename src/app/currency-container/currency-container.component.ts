import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { } from '@angular/platform-browser/animations'
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ActivatedRoute } from '@angular/router';
import { CurrencyService } from '../currency.service';
import { timingSafeEqual } from 'crypto';

@Component({
  selector: 'app-currency-container',
  templateUrl: './currency-container.component.html',
  styleUrls: ['./currency-container.component.css'],
  animations: [trigger("FadeInOut", [
    state("void", style({ opacity: 0 })),
    state("*", style({ opacity: 1 })),
    transition("void => *", animate(800)),
    transition("* => void", animate(800))
  ])]
})
export class CurrencyContainerComponent implements OnInit {
  mainhold = []
  currentData: Object
  sortNo: Number
  searchQuery:String
  error=0
  constructor(private service: CurrencyService, private route: ActivatedRoute) {
    this.parseRoute()
  }
  private parseRoute() {
    this.route.queryParamMap.subscribe(params => {
      this.mainhold = []
      if (params.get('code') != null && params.get('name') != null) {
        this.currentData = { code: params.get('code'), name: params.get('name') }
      } else {
        this.currentData = {
          name: "Indian Rupee",
          code: "INR"
        }
      }
      this.getCurrencyData()
    })
  }
  private getCurrencyData() {
    this.service.getdata(this.currentData['code']).subscribe(response => {
      this.mainhold = response
    },(error)=>{
      this.error=1
    })
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
  ngOnInit() { }
  search(ele:HTMLInputElement){
    if(ele.value){
       this.searchQuery = ele.value
    }else{
      this.searchQuery = null
    }
  }
  trackData(index, currency) {
    return currency ? currency.name : undefined;
  }
  sort() {
    switch (this.sortNo) {
      case 11: this.sortByName(); break;
      case 21: this.sortByRate(); break;
      case 31: this.sortByInverseRate(); break;
      case 12: this.sortByName(); this.mainhold.reverse(); break;
      case 22: this.sortByRate(); this.mainhold.reverse(); break;
      case 32: this.sortByInverseRate(); this.mainhold.reverse(); break;
    }
  }
  sortOrderReceived(no: number) {
    this.sortNo = no;
    this.sort()
  }
  sortByName() {
    this.mainhold.sort((a, b) => {
      return a.name.trim() > b.name.trim() ? 1 : -1;
    })
  }
  sortByRate() {
    this.mainhold.sort((a, b) => {
      return a.rate > b.rate ? 1 : -1
    })
  }
  sortByInverseRate() {
    this.mainhold.sort((a, b) => {
      return a.inverseRate > b.inverseRate ? 1 : -1
    })
  }
}