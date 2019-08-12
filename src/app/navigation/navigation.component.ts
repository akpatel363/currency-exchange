import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { send } from 'q';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  searchForm:FormGroup
  sortOrder=0
  @Output() sendSearchString:EventEmitter<string>
  @Output() sendSortOrder:EventEmitter<number>
  constructor(private formBuilder:FormBuilder) {
    this.sendSortOrder = new EventEmitter<number>()
    this.sendSearchString = new EventEmitter<string>()
    this.searchForm = this.formBuilder.group({
      'currencyname':[null,Validators.required]
    });
  }
  ngOnInit() {
  }
  reset(){
    this.sendSearchString.emit("///^^///")
  }
  getData(message){
    if(this.searchForm.valid){
      this.sendSearchString.emit(message.currencyname)
    }
  }
  changeSortOrder(no:number){
    this.sortOrder = no
    this.sendSortOrder.emit(no)
  }
}
