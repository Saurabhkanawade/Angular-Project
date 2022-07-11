import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DispachRoutingModule } from './dispach-routing.module';
import { DispachComponent } from './dispach.component';


@NgModule({
  declarations: [
    DispachComponent
  ],
  imports: [
    CommonModule,
    DispachRoutingModule
  ]
})
export class DispachModule { 

  constructor(){
    console.log('displached module is load');
    }
}
