import { ErrorHandler } from '@angular/core';
import { NoConnectionError } from './noconnection.error';

export class AppErrorHandler implements ErrorHandler{
    handleError(error){
        if(error instanceof NoConnectionError){
            console.log('No Internet Connection.')
        }else{
            console.log('Unexpected Error Occurred.')
        }
        console.log(error)
    }
}