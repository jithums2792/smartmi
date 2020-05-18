import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { GeneralRoutingModule } from './general-routing.module';
import { GeneralComponent } from './general.component';
import { CompaniesComponent } from './companies/companies.component';
import { CreatecompanyComponent } from './createcompany/createcompany.component';


@NgModule({
  declarations: [GeneralComponent, CompaniesComponent, CreatecompanyComponent],
  imports: [
    CommonModule,
    FormsModule,
    GeneralRoutingModule
  ]
})
export class GeneralModule { }
