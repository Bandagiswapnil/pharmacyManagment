import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-supplier-list',
  templateUrl: './supplier-list.component.html',
  styleUrls: ['./supplier-list.component.css']
})
export class SupplierListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  settings = {
    attr: {
      class: 'table table-bordered'
    },
    actions:{add:false,position:'right'},
    columns: {
      id: {
        title: 'Supplier Id'
      },
      name: {
        title: 'Supplier Name'
      },
      address: {
        title: 'Address'
      },
      
      mobileNumber: {
          title:'Mobile Number'
      },
      details:{
        title:'Details'
      }
    }
  };
  data = [
    {
      id: 1,
      name: "Leanne Graham",
      address: "Bret",
      mobileNumber: "0",
      details:'details'
    },
    {
      id: 2,
      name: "Ervin Howell",
      address: "Antonette",
      mobileNumber: "0",
      details:'details'
    },
    
    // ... list of items
    
    {
      id: 11,
      name: "Nicholas DuBuque",
      address: "Nicholas.Stanton",
      mobileNumber: "0",
      details:'details'
    }
  ];
}
