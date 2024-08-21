import { Observable } from "rxjs";
import { Payment } from "./payment";

export interface IPaymentService {

    checkout(id:string, formData:Payment): Observable<any>;
}
