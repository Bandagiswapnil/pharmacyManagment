import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'app/service/customer/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  constructor(private router:Router,private customerService:CustomerService) { }

  ngOnInit(): void {
  }
  settings = {
    attr: {
      class: 'table table table-striped table-bordered '
    },
    actions:{
      add:false,
      edit:false,
      delete: {
        deleteButtonContent: 'Delete',
        confirmDelete: true
      },
      position:'right',
      custom: [
        { name: 'edit', title: 'Edit &nbsp;&nbsp'}
      ]
  },
    columns: {
      id: {
        title: 'SL.'
      },
      name: {
        title: 'Customer Name'
      },
      address: {
        title: 'Address'
      },
      balance: {
        title: 'Balance'
      },
      emailId: {
        title: 'Email ID'
      },
      mobileNumber: {
        title: 'Mobile Number'
      }
    }
  };
  data = [
    {
      id: 1,
      name: "Leanne Graham",
      address: "Bret",
      balance: "0",
      emailId:'emailId@gmail.com',
      mobileNumber:'0125355534545'
    },
    {
      id: 2,
      name: "Ervin Howell",
      address: "Antonette",
      balance: "0",
      emailId:'emailId@gmail.com',
      mobileNumber:'0125355534545'
    },
    
    // ... list of items
    
    {
      id: 11,
      name: "Nicholas DuBuque",
      address: "Nicholas.Stanton",
      balance: "0",
      emailId:'emailId@gmail.com',
      mobileNumber:'0125355534545'
    },
    {
      id: 12,
      name: "Nicholas DuBuque",
      address: "Nicholas.Stanton",
      balance: "0",
      emailId:'emailId@gmail.com',
      mobileNumber:'0125355534545'
    },
    {
      id: 13,
      name: "Nicholas DuBuque",
      address: "Nicholas.Stanton",
      balance: "0",
      emailId:'emailId@gmail.com',
      mobileNumber:'0125355534545'
    },
    {
      id: 14,
      name: "Nicholas DuBuque",
      address: "Nicholas.Stanton",
      balance: "0",
      emailId:'emailId@gmail.com',
      mobileNumber:'0125355534545'
    },
    {
      id: 15,
      name: "Nicholas DuBuque",
      address: "Nicholas.Stanton",
      balance: "0",
      emailId:'emailId@gmail.com',
      mobileNumber:'0125355534545'
    }
  ];
  onCustomAction(event){
console.log('onCustomAction',event)
this.customerService.setCustomerDetails(event.data)
this.router.navigate(['/editCustomer'])

  }
onDeleteConfirm(event){
alert()
  }
}
