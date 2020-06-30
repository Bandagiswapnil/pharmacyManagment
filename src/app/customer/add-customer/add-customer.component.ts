import { Component, OnInit } from '@angular/core';

import { CustomToasterService } from 'app/service/toaster/custom-toaster.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  constructor(private toasterService:CustomToasterService) { }

  ngOnInit(): void {
  }
  customerDetails={
    id:0,
    customerName:'',
    address:'',
    previouBalance:0,
    mobileNumber:0,
    emailId:''
  }
  onSubmit(){
console.log('onSubmit',this.customerDetails)
this.toasterService.showNotification('','','Customer Added Successfully.')
  }
  resetForm(){
    this.customerDetails={
      id:0,
      customerName:'',
      address:'',
      previouBalance:0,
      mobileNumber:0,
      emailId:''
    }
  }
}
