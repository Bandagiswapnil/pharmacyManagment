import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
    subMenu:any[]
}
export const ROUTES: RouteInfo[] = [
    { path: '', title: 'Dashboard',  icon: 'fa fa-home', class: '' ,subMenu : [
      {
        path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' 
      }
    ]},
    { path: '', title: 'invoce',  icon:'person', class: '',
        subMenu : [
                   {path: '/addInvoice', title: 'Add Invoce',  icon:'person', class: ''},
                   {path: '/invoiceList', title: 'Invoce List',  icon:'person', class: ''}
              ] },
    { path: '', title: 'Supplier Management',  icon:'fa fa-users', class: '',
        subMenu : [
                    { path: '/addSupplier', title: ' Add Supplier ',  icon:'person', class: ''},
                    { path: '/supplierList', title: 'Supplier List',  icon:'person', class: ''}
                   ]  },
    { path: '', title: 'Product Management',  icon:'fa fa-th-large', class: '',
         subMenu : [
                      { path: '/addBrand', title: 'Add Brand',  icon:'content_paste', class: ''},
                      { path: '/brandList', title: 'Brand List',  icon:'content_paste', class: ''},
                      { path: '/addManufacturer', title: 'Add Manufacturer',  icon:'content_paste', class: ''},
                      { path: '/manufacturerList', title: 'Manufacturer List',  icon:'content_paste', class: ''},
                      { path: '/addProduct', title: 'Add Product',  icon:'content_paste', class: ''},
                      { path: '/productList', title: 'Product List',  icon:'content_paste', class: ''},
                      
                  ] 
        
        
        
        },
    
    { path: '', title: 'Purchase Management',  icon:'content_paste', class: '' ,
    
          subMenu : [
                {
                  path: '/addPurchese', title: 'Add Purchase ',  icon:'content_paste', class: '' ,
                },
                {
                  path: '/purcheseList', title: 'Purchase List ',  icon:'content_paste', class: '' ,
                }
          ] },
    
    { path: '', title: 'Customer Management',  icon:'fa fa-user', class: '' ,
         subMenu : [
                  {path: '/addCustomer', title:  'Add Customer ',  icon:'library_books', class: '' ,},
                  {path: '/customerList', title: 'Customer List',  icon:'library_books', class: '' ,}
                ] },
    // { path: '/customer-list', title: 'Customer List',  icon:'library_books', class: '' },
    { path: '', title: 'Sales Management',  icon:'bubble_chart', class: '' ,
            subMenu : [
                      {path: '/addSales', title: 'Add Sales ',  icon:'bubble_chart', class: '' ,},
                      {path: '/salesList', title: 'Sales List',  icon:'bubble_chart', class: '' ,}

                  ] }
            
            ,
    { path: '', title: 'Outstanding Manage..',  icon:'location_on', class: '' ,
          subMenu : [
                        {path: 'purchesOutstanding', title: 'Purches Outstanding ',  icon:'location_on', class: '' ,},
                        {path: 'saleOutstanding', title: 'Sale Outstanding ',  icon:'location_on', class: '' ,}
               ] },
    { path: '', title: 'Return Management',  icon:'notifications', class: '',
            subMenu : [

                      {
                        path: '/notifications', title: 'Add Purchase Return',  icon:'notifications', class: '',
                      },
                      {
                        path: '/notifications', title: 'Purchase Return List',  icon:'notifications', class: '',
                      },
                      {
                        path: '/addSaleReturn', title: 'Add Sales Return',  icon:'notifications', class: '',
                      },
                      {
                        path: '/SaleReturnList', title: 'Sales Return List',  icon:'notifications', class: '',
                      }
            ]  },
    { path: '', title: 'Warehouse Manage..',  icon:'notifications', class: '',
          subMenu : [
              {
                path: '/availableStock', title: 'Available Stock',  icon:'notifications', class: '',
              }
          ]  },
    { path: '', title: 'Report Management',  icon:'notifications', class: '' ,
          subMenu : [
              {path: '/purchaseReport', title: 'Purchase Report',  icon:'notifications', class: '' ,},
              {path: '/salesReport', title: 'Sales Report',  icon:'notifications', class: '' ,},
              {path: '/stockReport', title: 'Stock Report',  icon:'notifications', class: '' ,},
              {path: '/customerReport', title: 'Customer Report',  icon:'notifications', class: '' ,},
              {path: '/paymentReport', title: 'Payment Report',  icon:'notifications', class: '' ,},
              {path: '/StatementReport', title: 'Statement Report',  icon:'notifications', class: '' ,}

          ] },
    { path: '', title: 'Setting Management',  icon:'fa fa-cog', class: '' ,
          subMenu : [
                {path: 'applicationSetting', title: 'Application Setting',  icon:'notifications', class: ''}
        ] },

   
    // { path: '/user-profile', title: 'User Profile',  icon:'person', class: '' },
    // { path: '/table-list', title: 'Table List',  icon:'content_paste', class: '' },
    // { path: '/typography', title: 'Typography',  icon:'library_books', class: '' },
    // { path: '/icons', title: 'Icons',  icon:'bubble_chart', class: '' },
    // { path: '/maps', title: 'Maps',  icon:'location_on', class: '' },
    // { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' },
    // { path: '/upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
