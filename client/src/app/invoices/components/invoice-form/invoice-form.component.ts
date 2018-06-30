import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { InvoiceService } from '../../services/invoice.service';

@Component({
  selector: 'app-invoice-form',
  templateUrl: './invoice-form.component.html',
  styleUrls: ['./invoice-form.component.css']
})
export class InvoiceFormComponent implements OnInit {
  invoiceForm: FormGroup;
  constructor(private fb: FormBuilder, private invoiceService: InvoiceService) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.invoiceForm = this.fb.group({
      item: '',
      date: '',
      due: '',
      qty: '',
      rate: '',
      tax: ''
    });
  }

  addInvoice() {
    this.invoiceService.createInvoice(this.invoiceForm.value)
      .subscribe(invoice => {
        this.invoiceForm.reset();
        console.log(invoice);
      }, err => {
        console.log(err);
      });
   console.log(this.invoiceForm.value);
  }

}
