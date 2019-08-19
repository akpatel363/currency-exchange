import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { CurrencyService } from './currency.service';
import { AppError } from './commons/app.error'
import { NoConnectionError } from './commons/noconnection.error';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'currency-exchange';
  sortNo = 0;
  currentData:Object;
  mainhold = []
  data = []
  constructor(private service:CurrencyService){
    this.currentData = {
      name:"Indian Rupee",
      code:"INR"
    }
  }
  private getCurrencyData(){
    this.service.getdata(this.currentData['code']).subscribe(response=>{
      this.mainhold = response
      this.data = this.mainhold
    },(error:AppError)=>{
      if(error instanceof NoConnectionError)
        alert("No Internet Connection\nPlease Refresh")
      else
        throw error  
    })
  }
  ngOnInit(){
    this.getCurrencyData();
  }
  changeRates(newCurr:Object){
    this.currentData = newCurr
    this.mainhold.splice(0,this.mainhold.length)
    this.data.splice(0,this.data.length)
    this.getCurrencyData()
  }
  searchStringReceieved(message:string){
    if(message=='///^^///'){
      this.populateData()
      return
    }
    this.data = this.mainhold.filter((value)=>{
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
