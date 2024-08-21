import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';
import { LoggingService } from './logging.service';
import { Payment } from '../interface/payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private _http:HttpClient, private _token:TokenService, private _logging:LoggingService) { }

  chekout(id:string, formData:Payment):Observable<any> {
    this._logging.logInfo('payment service checkout init');
    return this._http.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${id}?url=http://localhost:4200`,{
      shippingAddress: formData
    } ,{
      headers:{
        token:this._token.getToken()!
      }
    })
  }
}
