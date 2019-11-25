import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { CurrencyService } from './commons/currency.service';
import { AppError } from './commons/app.error'
import { NoConnectionError } from './commons/noconnection.error';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'currency-exchange';
  constructor(){}
}
