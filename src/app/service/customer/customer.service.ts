import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() { }
   editCustomerDetails= new Subject()
   getCustomerDetails(){
 return this.editCustomerDetails.asObservable()
   }
   setCustomerDetails(data){
     this.editCustomerDetails.next(data)

   }
}
