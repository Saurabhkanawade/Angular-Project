import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DispachComponent } from './dispach.component';

const routes: Routes = [{ path: '', component: DispachComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DispachRoutingModule { }
