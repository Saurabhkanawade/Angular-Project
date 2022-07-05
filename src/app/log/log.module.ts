import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Log1Component } from './log1/log1.component';



@NgModule({
  declarations: [
    Log1Component
  ],
  imports: [
    CommonModule
  ],
  exports:[
    Log1Component
  ]
})
export class LogModule { }
