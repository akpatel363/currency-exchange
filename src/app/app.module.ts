import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from "@angular/core";
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { NavigationComponent } from './navigation/navigation.component';
import { CurrencyContainerComponent } from './currency-container/currency-container.component';
import { CurrencyDetailsComponent } from './currency-details/currency-details.component';
import { HttpClientModule } from "@angular/common/http";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { FilterPipe } from "./commons/filter.pipe";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "rates" },
  { path: "rates", component: CurrencyContainerComponent },
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    CurrencyContainerComponent,
    CurrencyDetailsComponent,
    PageNotFoundComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes, {
      useHash: true,
      scrollPositionRestoration: "top",
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}