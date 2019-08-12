import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CurrencyService } from '../CurrencyService';
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
  constructor() {
    this.resetEmitter = new EventEmitter<string>()
  }
  ngOnInit() {}
  search(message){
    console.log(message)
  }
  resetData(){
    this.resetEmitter.emit("///^^///")
  }
  trackData(index,currency){
    return currency ? currency.name:undefined;
  }
}
