import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  sortOrder=0
  sortMode=1
  @Output() sendSortOrder:EventEmitter<number>
  constructor(private formBuilder:FormBuilder,private router:Router) {
    this.sendSortOrder = new EventEmitter<number>()
  }
  ngOnInit() {}
  invalidPage(){
    return this.router.isActive('/rates',false)||this.router.isActive('/about',false)
  }
  isRatesActive(){
    return this.router.isActive('/rates',false)
  }
  changeSortOrder(no:number,mo:number){
    if(no!=0){
      this.sortMode = mo
      this.sortOrder = no
      this.sendSortOrder.emit(no+this.sortMode)
    }
  }
}
