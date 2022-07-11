
import { Component, NgModule } from '@angular/core';
import {  OutletContext,  RouterModule,  RouterOutlet,Routes,
} from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './authentication/login/login.component';
import { ClientsComponent } from './clients/clients.component';
import { AddContactComponent } from './contact/add-contact/add-contact.component';
import { DeleteContactComponent } from './contact/delete-contact/delete-contact.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeListComponent } from './employe-list/employe-list.component';
import { LeadsGridComponent } from './leads/leads-listing/leads-grid/leads-grid.component';
import { LeadsListingComponent } from './leads/leads-listing/leads-listing.component';
import { LeadsToolsComponent } from './leads/leads-listing/leads-tools/leads-tools.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [

  {
    path: 'login',
    redirectTo: 'authen/login',
  },

  {
    path: 'authen/login',
    component: LoginComponent,
  },

  {
    path: 'clients',
    component: ClientsComponent,
    canActivate:[AuthGuard]
  },

  {
    path: 'leads',
    component: LeadsListingComponent,
    children: [
      {
        path: 'leads-grid',
        component: LeadsGridComponent,
      },
      {
        path: 'leads-tools',
        component: LeadsToolsComponent,
      },
    ],
  },

  {
    path: 'add-contact',
    component: AddContactComponent,
  },

  {
    path: 'delete-contact',
    component: DeleteContactComponent,
  },

  {
    path: 'orders',
    loadChildren: () =>
      import('./orders/orders.module').then((m) => m.OrdersModule),
  },

  {
    path: 'department',
    component: DepartmentListComponent,
  },

  {
    path: 'employe',
    component: EmployeListComponent,
  },
  {
    path: 'dispach',
    loadChildren: () =>
      import('./dispach/dispach.module').then((m) => m.DispachModule),
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule],
})
export class AppRoutingModule {}

export const routingComponents = [
  DepartmentListComponent,
  EmployeListComponent,
];
