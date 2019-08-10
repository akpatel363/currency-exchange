import { BrowserModule } from '@angular/platform-browser';
import { NgModule, } from '@angular/core';
import { CurrencyService } from '../app/CurrencyService';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CurrencyContainerComponent } from './currency-container/currency-container.component';
import { CurrencyDetailsComponent } from './currency-details/currency-details.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    CurrencyContainerComponent,
    CurrencyDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    CurrencyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
