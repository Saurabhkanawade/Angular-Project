import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfileModule } from './profile/profile.module';
import { FormsModule } from '@angular/forms';
import { MypipePipe } from './mypipe.pipe';
import { XpipePipe } from './xpipe.pipe';
import { LoanComponent } from './loan/loan.component';
import { AddLoanComponent } from './loan/add-loan/add-loan.component';
import { DemoComponent } from './demo/demo.component';
import { ContactModule } from './contact/contact.module';
import { HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    MypipePipe,
    XpipePipe,
    LoanComponent,
    AddLoanComponent,
    DemoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ProfileModule,
    FormsModule,
    ContactModule
  ],
  providers: [
    {provide:LocationStrategy , useClass:PathLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
