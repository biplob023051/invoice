import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../../services/invoice.service';
import { Invoice } from '../../models/invoice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invoice-listing',
  templateUrl: './invoice-listing.component.html',
  styleUrls: ['./invoice-listing.component.css']
})
export class InvoiceListingComponent implements OnInit {

  constructor(private invoiceService: InvoiceService, private router: Router) { }
  displayedColumns: string[] = ['item', 'date', 'due', 'qty', 'rate', 'tax', 'action'];
  dataSource: Invoice[] = [];
  ngOnInit() {
    this.invoiceService.getInvoices()
    .subscribe(data => {
      this.dataSource = data;
      console.log(data);
    }, error => {
      console.log(error);
    });
  }

  addInvoice() {
    this.router.navigate(['dashboard', 'invoices', 'new']);
  }

}
