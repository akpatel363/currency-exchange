import { Injectable } from '@angular/core';
import { throwError } from 'rxjs'
import { catchError,map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http'
import { NoConnectionError } from './noconnection.error';
import { AppError } from './app.error';
@Injectable({
  providedIn: 'root'
})
export class CurrencyService {    
  API_URL:string = 'https://www.floatrates.com/daily/'
  constructor(private client:HttpClient){}
  getdata(name:string){
    return this.client.get(this.API_URL+`${name}.json`).pipe(catchError(this.handleError),map(response=>{
      var data = [] 
      Object.getOwnPropertyNames(response).forEach((value)=>data.push(response[value]))
      return data;
    }))
  }
  private handleError(error:Response){
    if(error.status === 0)
      return throwError(new NoConnectionError())
    return throwError(new AppError())
  }
}
