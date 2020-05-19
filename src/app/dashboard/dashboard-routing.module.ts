import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { LeadsComponent } from './leads/leads.component';
import { LeadcreateComponent } from './leadcreate/leadcreate.component';
import { QuotesComponent } from './quotes/quotes.component';
import { CreatequoteComponent } from './createquote/createquote.component';
import { ProductsComponent } from './products/products.component';


const routes: Routes = [
  {path: '', component: DashboardComponent, children: [
    {path: 'home', component: HomeComponent},
    {path: 'leads', component: LeadsComponent},
    {path: 'createlead', component: LeadcreateComponent},
    {path: 'quotes', component: QuotesComponent},
    {path: 'createquote', component: CreatequoteComponent},
    {path: 'products', component: ProductsComponent},
    {path: 'general', loadChildren: './general/general.module#GeneralModule'},
    {path: 'users', loadChildren: './users/users.module#UsersModule'},
        {path: '', redirectTo: 'home', pathMatch: 'full'},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
