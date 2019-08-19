import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { } from '@angular/platform-browser/animations'
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-currency-container',
  templateUrl: './currency-container.component.html',
  styleUrls: ['./currency-container.component.css'],
  animations:[trigger("FadeInOut",[
    state("void",style({opacity:0})),
    state("*",style({opacity:1})),
    transition("void => *",animate(800)),
    transition("* => void",animate(800))
  ])]
})
export class CurrencyContainerComponent implements OnInit {
  @Input() list=[]
  @Input() length:number
  @Output() resetEmitter:EventEmitter<string>
  @Output() chnRates:EventEmitter<Object>
  constructor() {
    this.chnRates = new EventEmitter<Object>()
    this.resetEmitter = new EventEmitter<string>()
  }
  ngOnInit() {}
  search(message){
    console.log(message)
  }
  changeRates(ob:Object){
    this.chnRates.emit(ob)
  }
  resetData(){
    this.resetEmitter.emit("///^^///")
  }
  trackData(index,currency){
    return currency ? currency.name:undefined;
  }
}
