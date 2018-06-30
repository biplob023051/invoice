import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoiceListingComponent } from './components/invoice-listing/invoice-listing.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';
import { HttpClientModule } from '@angular/common/http';
import { InvoiceService } from './services/invoice.service';
import { InvoiceFormComponent } from './components/invoice-form/invoice-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  declarations: [InvoiceListingComponent, InvoiceFormComponent],
  exports: [InvoiceListingComponent, InvoiceFormComponent],
  providers: [InvoiceService]
})
export class InvoicesModule { }
