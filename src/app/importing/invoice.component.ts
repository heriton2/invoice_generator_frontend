import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Router} from "@angular/router";

interface InvoiceItem {
  id: string;
  status: string;
  cnpj: string;
  fantasyName: string;
  email: string;
  monthlyPrice: number;
  unitValueCard: number;
  dueDate: string;
}

@Component({
  selector: 'app-fatura-de-cobranca',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  invoiceItems: InvoiceItem[] = [];
  currentPage = 1;
  itemsPerPage = 10;

  constructor(private http: HttpClient,  private router: Router) {}

  ngOnInit() {
    this.fetchInvoiceItems();
  }

  openImportingPage() {
    this.router.navigate(['/importing-page']);
  }

  viewInvoice(id: string) {
    console.log(`View invoice for item with ID ${id}`);
  }

  generateInvoice(id: string) {
    console.log(`Generate invoice for item with ID ${id}`);
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  fetchInvoiceItems() {
    this.http.get<InvoiceItem[]>('http://localhost:8080/import')
      .subscribe(
        response => {
          this.invoiceItems = response;
        },
        error => {
          console.error('Erro ao obter os itens de fatura:', error);
        }
      );
  }

  get displayedItems(): InvoiceItem[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.invoiceItems.slice(startIndex, startIndex + this.itemsPerPage);
  }

  get totalPages() {
    return Math.ceil(this.invoiceItems.length / this.itemsPerPage);
  }
}
