import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Router} from "@angular/router";

interface InvoiceItem {
  id: string;
  status: string;
  cnpj: string;
  fantasyName: string;
  email: string;
  monthlyPrice: string;
  unitValueCard: string;
  dueDate: string;
}

@Component({
  selector: 'app-fatura-de-cobranca',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  invoiceItems: InvoiceItem[] = [];
  currentPage = 1;
  itemsPerPage = 10;
  selectedItem: InvoiceItem | null = null;

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
    this.selectedItem = this.invoiceItems.find(item => item.id === id) || null;

    if (this.selectedItem) {
      this.router.navigate(['/invoice', id]);
    } else {
      console.error(`Item with ID ${id} not found.`);
    }
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
    this.http.get<InvoiceItem[]>('https://invoicegenerator-heriton2.b4a.run/import')
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
    const totalPages = Math.ceil(this.invoiceItems.length / this.itemsPerPage);
    return totalPages < 1 ? 1 : totalPages;
  }
}
