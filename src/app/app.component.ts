import { Component, Output, EventEmitter } from '@angular/core';
import { CurrencyService } from './CurrencyService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'currency-exchange';
  mainhold = []
  data = []
  constructor(private service:CurrencyService){
    this.mainhold = this.service.getdata()
    this.data  = this.mainhold;
    console.log(this.data)
  }
  searchStringReceieved(message:string){
    if(message=='///^^///'){
      this.data = this.mainhold
      return
    }
    this.data = this.mainhold.filter((value,index)=>{
      return value.name.toLowerCase().trim().includes(message.toLowerCase())
    })
  }
}
