import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CurrencyService{
    API_URL:string = 'https://www.floatrates.com/daily/inr.json'
    constructor(private client:HttpClient){}
    getdata(){
        var data = []
        this.client.get(this.API_URL).subscribe(response=>{
            console.log(response)
            var keys = Object.getOwnPropertyNames(response)
            keys.forEach((value,index)=>{
                data.push(response[value])
            })
            return data
        })
        return data
    }
}