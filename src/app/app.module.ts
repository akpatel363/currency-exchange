import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler, } from '@angular/core';
import { CurrencyService } from './currency.service';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms'
import { NavigationComponent } from './navigation/navigation.component';
import { CurrencyContainerComponent } from './currency-container/currency-container.component';
import { CurrencyDetailsComponent } from './currency-details/currency-details.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppErrorHandler } from './commons/app-error.handler';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutComponent } from './about/about.component';

const routes:Routes=[
  {path:'',pathMatch:'full',redirectTo:'rates'},
  {path:'rates',component:CurrencyContainerComponent},
  {path:'about',component:AboutComponent},
  {path:'**',component:PageNotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    CurrencyContainerComponent,
    CurrencyDetailsComponent,
    FooterComponent,
    PageNotFoundComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes,{useHash:true,scrollPositionRestoration:'top'})
  ],
  providers: [
    CurrencyService,
    { provide:ErrorHandler, useClass:AppErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
