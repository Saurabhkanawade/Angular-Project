import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteContactComponent } from './contact/delete-contact/delete-contact.component';
import { AddLoanComponent } from './loan/add-loan/add-loan.component';
import { LoanComponent } from './loan/loan.component';
import { ListProfileComponent } from './profile/list-profile/list-profile.component';

const routes: Routes = [
  
{
  path:'app/loan',
  component:LoanComponent
},
{
  path:'add-loan',
  component:AddLoanComponent,
  outlet:'outlet1'
},
{
  path:'loan/add-loan',
  component:AddLoanComponent
},
{
  path:'profile/list-profile',
  component:ListProfileComponent
},
{
  path:'contact/delete-contact',
  component:DeleteContactComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
