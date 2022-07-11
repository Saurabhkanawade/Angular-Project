import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeadsListingComponent } from './leads-listing/leads-listing.component';
import { LeadsGridComponent } from './leads-listing/leads-grid/leads-grid.component';
import { LeadsToolsComponent } from './leads-listing/leads-tools/leads-tools.component';
import { DownloadOexcelComponent } from './leads-listing/leads-tools/download-oexcel/download-oexcel.component';
import { DownloadPdfComponent } from './leads-listing/leads-tools/download-pdf/download-pdf.component';



@NgModule({
  declarations: [
    LeadsListingComponent,
    LeadsGridComponent,
    LeadsToolsComponent,
    DownloadOexcelComponent,
    DownloadPdfComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LeadsModule {

  constructor(){
    console.log('lead get loaded')
  }

 }
