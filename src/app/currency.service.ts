import { Injectable } from '@angular/core';
import { throwError } from 'rxjs'
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http'
import { NoConnectionError } from './commons/noconnection.error';
import { AppError } from './commons/app.error';
@Injectable({
  providedIn: 'root'
})
export class CurrencyService {    
  API_URL:string = 'https://www.floatrates.com/daily/inr.json'
  constructor(private client:HttpClient){}
  getdata(){
    return this.client.get(this.API_URL).pipe(catchError((error:Response)=>{
      if(error.status === 0)
        return throwError(new NoConnectionError())
      return throwError(new AppError(error))
    }))
  }
}
