import { Component, Input } from "@angular/core";
import { Currency } from "../commons/Currency";

@Component({
  selector: "app-currency-details",
  templateUrl: "./currency-details.component.html",
  styleUrls: ["./currency-details.component.css"],
})
export class CurrencyDetailsComponent {
  @Input() ob: Currency;
  constructor() {}
}
