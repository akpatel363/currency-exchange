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
  @Output() sendSearchString:EventEmitter<string>
  constructor(private formBuilder:FormBuilder) {
    this.sendSearchString = new EventEmitter<string>()
    this.searchForm = this.formBuilder.group({
      'name':[null,Validators.required]
    });
  }
  ngOnInit() {
  }
  reset(){
    this.sendSearchString.emit("///^^///")
  }
  getData(message){
    if(this.searchForm.valid){
      this.sendSearchString.emit(message.name)
    }
  }
}
