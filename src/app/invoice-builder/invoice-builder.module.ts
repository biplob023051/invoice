import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoiceBuilderRoutingModule } from './invoice-builder-routing.module';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { InvoiceBuilderComponent } from './invoice-builder.component';
import { MaterialModule } from '../shared/material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    InvoiceBuilderRoutingModule
  ],
  declarations: [InvoiceBuilderComponent, MainContentComponent, SideNavComponent, ToolbarComponent]
})
export class InvoiceBuilderModule { }
