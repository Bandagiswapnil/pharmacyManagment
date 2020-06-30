import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { AddCustomerComponent } from 'app/customer/add-customer/add-customer.component';
import { AddSupplierComponent } from 'app/supplier/add-supplier/add-supplier.component';
import { AddInvoiceComponent } from 'app/invoice/add-invoice/add-invoice.component';
import { AddManufacturerComponent } from 'app/manufacturer/add-manufacturer/add-manufacturer.component';
import { AddPurcheseComponent } from 'app/purchese/add-purchese/add-purchese.component';
import { CustomerListComponent } from 'app/customer/customer-list/customer-list.component';
import { SupplierListComponent } from 'app/supplier/supplier-list/supplier-list.component';
import { AddBrandComponent } from 'app/brand/add-brand/add-brand.component';
import { BrandListComponent } from 'app/brand/brand-list/brand-list.component';
import { ManufacturerListComponent } from 'app/manufacturer/manufacturer-list/manufacturer-list.component';
import { PurcheseListComponent } from 'app/purchese/purchese-list/purchese-list.component';
import { AddProductComponent } from 'app/product/add-product/add-product.component';
import { ProductListComponent } from 'app/product/product-list/product-list.component';
import { AddSalesComponent } from 'app/sales/add-sales/add-sales.component';
import { SalesListComponent } from 'app/sales/sales-list/sales-list.component';
import { EditCustomerComponent } from 'app/customer/edit-customer/edit-customer.component';

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: '',      component: DashboardComponent },
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'addCustomer',   component: AddCustomerComponent },
    { path: 'editCustomer',   component: EditCustomerComponent },
    { path: 'customerList',   component: CustomerListComponent },
    { path: 'addSupplier',   component: AddSupplierComponent },
    { path: 'supplierList',   component: SupplierListComponent},
    { path: 'addInvoice',   component: AddInvoiceComponent },
    { path: 'addBrand',   component: AddBrandComponent },
    { path: 'brandList',   component: BrandListComponent },
    { path: 'addManufacturer',   component: AddManufacturerComponent },
    { path: 'addProduct',   component: AddProductComponent },
    { path: 'productList',   component: ProductListComponent },
    { path: 'manufacturerList',   component: ManufacturerListComponent },
    { path: 'addPurchese',   component: AddPurcheseComponent },
    { path: 'purcheseList',   component: PurcheseListComponent },
    { path: 'addSales',   component: AddSalesComponent },
    { path: 'salesList',   component: SalesListComponent },
];
