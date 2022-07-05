import { NgModule } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';
import { AddContactComponent } from './contact/add-contact/add-contact.component';
import { ViewContactComponent } from './contact/view-contact/view-contact.component';

const routes : Routes =[
  {  path:'contact/:contactId/photo/:photoId', component:AddContactComponent   },
]



@NgModule({

  imports: [
    RouterModule.forRoot(routes)
  ],

  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
