import { Pipe, PipeTransform } from "@angular/core";
import { Currency } from "./Currency";

@Pipe({
  name: "filter",
})
export class FilterPipe implements PipeTransform {
  transform(
    currencies: Array<Currency>,
    search: string,
    sortNo: number
  ): Array<Currency> {
    if (!search) return currencies;
    search = search.toLowerCase();
    return currencies.filter((item) =>
      item.name.toLowerCase().includes(search)
    );
  }
}
