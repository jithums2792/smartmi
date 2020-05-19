import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { GeneralRoutingModule } from './general-routing.module';
import { GeneralComponent } from './general.component';
import { CompaniesComponent } from './companies/companies.component';
import { CreatecompanyComponent } from './createcompany/createcompany.component';
import { ProductsComponent } from './products/products.component';
import { UnitsComponent } from './products/units/units.component';
import { ManufaturesComponent } from './products/manufatures/manufatures.component';


@NgModule({
  declarations: [GeneralComponent, CompaniesComponent, CreatecompanyComponent, ProductsComponent, UnitsComponent, ManufaturesComponent],
  imports: [
    CommonModule,
    FormsModule,
    GeneralRoutingModule
  ]
})
export class GeneralModule { }
