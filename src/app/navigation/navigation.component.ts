import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.css"],
})
export class NavigationComponent {
  sortOrder = 0;
  @Output() sendSortOrder = new EventEmitter<number>();
  constructor(private router: Router) {}
  changeSortOrder(no: number) {
    if (no != 0) {
      this.sortOrder = no;
      this.sendSortOrder.emit(this.sortOrder);
    }
  }
}
