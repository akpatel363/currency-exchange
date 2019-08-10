import { Component } from '@angular/core';
import { CurrencyService } from './CurrencyService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'currency-exchange';
  constructor(private service:CurrencyService){
    var data = service.getdata()
    console.log(data)
    setTimeout(function(){
      console.log(data)
    },8000)
  }
}
