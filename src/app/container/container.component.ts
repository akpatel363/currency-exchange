import { Component, OnInit } from '@angular/core';
import { NoConnectionError } from '../commons/noconnection.error';
import { AppError } from '../commons/app.error';
import { CurrencyService } from '../currency.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent{
  sortNo = 0;
  currentData:Object;
  mainhold = []
  data = []
  constructor(private service:CurrencyService,private route:ActivatedRoute){
    this.parseRoute()
  }
  private parseRoute(){
    this.route.params.subscribe(params=>{
      this.mainhold.splice(0,this.mainhold.length)
      this.data.splice(0,this.data.length)
      if(params.code!=null){
        this.currentData = params
      }else{
        this.currentData = {
          name:"Indian Rupee",
          code:"INR"
        }
      }
      
    this.getCurrencyData()
    })
  }
  private getCurrencyData(){
    this.service.getdata(this.currentData['code']).subscribe(response=>{
      this.mainhold = response
      this.data = this.mainhold
      console.log(this.mainhold)
    },(error:AppError)=>{
      if(error instanceof NoConnectionError)
        alert("No Internet Connection\nPlease Refresh")
      else
        throw error  
    })
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
