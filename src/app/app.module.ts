import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfileModule } from './profile/profile.module';
import { FormsModule } from '@angular/forms';
import { MypipePipe } from './mypipe.pipe';
import { XpipePipe } from './xpipe.pipe';



@NgModule({
  declarations: [
    AppComponent,
    MypipePipe,
    XpipePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ProfileModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
