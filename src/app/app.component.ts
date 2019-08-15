import { Component, Output, EventEmitter } from '@angular/core';
import { CurrencyService } from './CurrencyService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'currency-exchange';
  sortNo = 0;
  mainhold = []
  data = []
  constructor(private service:CurrencyService){
    this.service.getdata().then(value=>{
      this.mainhold = value;
      this.data= this.mainhold
    })
    console.log(this.data)
  }
  searchStringReceieved(message:string){
    if(message=='///^^///'){
      this.populateData()
      return
    }
    this.data = this.mainhold.filter((value,index)=>{
      return value.name.toLowerCase().trim().includes(message.toLowerCase())
    })
    this.sort()
  }
  populateData(){
    this.data = this.mainhold;
    this.sort()
  }
  sortByName(){
    this.data.sort((a,b)=>{
      return a.name.trim()>b.name.trim()?1:-1;
    })
  }
  sortByRate(){
    this.data.sort((a,b)=>{
      return a.rate>b.rate?1:-1
    })
  }
  sortByInverseRate(){
    this.data.sort((a,b)=>{
      return a.inverseRate>b.inverseRate?1:-1
    })
  }
  sort(){
    switch(this.sortNo){
      case 11:this.sortByName();break;
      case 21:this.sortByRate();break;
      case 31:this.sortByInverseRate();break;
      case 12:this.sortByName();this.data.reverse();break;
      case 22:this.sortByRate();this.data.reverse();break;
      case 32:this.sortByInverseRate();this.data.reverse();break;
    }
  }
  sortOrderReceieved(no:number){
    this.sortNo = no;
    this.sort()
  }
}
