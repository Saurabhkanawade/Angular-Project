import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { UserLoginComponent } from './user-login/user-login.component';



@NgModule({
  declarations: [
    LoginComponent,
    UserLoginComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AuthenticationModule { }
