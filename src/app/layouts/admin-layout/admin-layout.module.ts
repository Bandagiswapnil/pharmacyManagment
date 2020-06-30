import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import { AddSupplierComponent } from 'app/supplier/add-supplier/add-supplier.component';
import { AddCustomerComponent } from 'app/customer/add-customer/add-customer.component';
import { AddManufacturerComponent } from 'app/manufacturer/add-manufacturer/add-manufacturer.component';
import { AddPurcheseComponent } from 'app/purchese/add-purchese/add-purchese.component';
import { CustomerListComponent } from 'app/customer/customer-list/customer-list.component';
import{Ng2SmartTableModule} from 'ng2-smart-table'
import { AddBrandComponent } from 'app/brand/add-brand/add-brand.component';
import { BrandListComponent } from 'app/brand/brand-list/brand-list.component';
import { AddProductComponent } from 'app/product/add-product/add-product.component';
import { ProductListComponent } from 'app/product/product-list/product-list.component';
import { AddSalesComponent } from 'app/sales/add-sales/add-sales.component';
import { SalesListComponent } from 'app/sales/sales-list/sales-list.component';
import { CustomerService } from 'app/service/customer/customer.service';
import { EditCustomerComponent } from 'app/customer/edit-customer/edit-customer.component';

import { CustomToasterService } from 'app/service/toaster/custom-toaster.service';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    Ng2SmartTableModule
    
    
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    AddSupplierComponent,
    AddCustomerComponent,
    AddManufacturerComponent,
    AddPurcheseComponent,
    CustomerListComponent,
    AddBrandComponent,
    BrandListComponent,
    AddProductComponent,
    ProductListComponent,
    AddSalesComponent,
    SalesListComponent,
    EditCustomerComponent
  ],
  providers:[CustomerService,CustomToasterService]
})

export class AdminLayoutModule {}
