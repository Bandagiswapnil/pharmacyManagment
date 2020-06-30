import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'app/service/customer/customer.service';
import { CustomToasterService } from 'app/service/toaster/custom-toaster.service';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {
  customerDetails:any={
    id:0,
    name:'',
    address:'',
    previouBalance:0,
    mobileNumber:0,
    emailId:''
  }
  constructor( private route: ActivatedRoute,
    private router: Router,private customerService:CustomerService,private customToaster:CustomToasterService) {
    this.getCustomerData()
     }

  ngOnInit(): void {
  }
  
getCustomerData(){
  this.customerService.getCustomerDetails().subscribe((data)=>{
    console.log('data',data)
    
    this.customerDetails=data,
    console.log('this.customerDetails',this.customerDetails)
    this.customerDetails.name="swapnil"
  })
}
onSubmit(){
  console.log('customerDetails',this.customerDetails)  
  this.customToaster.showNotification('','','Customer Updated Successfully');
  // this.router.navigate(['/customerList'])
  this.backToCustomerList()
}
backToCustomerList(){
  this.router.navigate(['/customerList'])
}
}
