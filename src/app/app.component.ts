import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

interface InvoiceItem {
  id: string;
  status: string;
  cnpj: string;
  nomeFantasia: string;
  email: string;
  valorMensalidade: number;
  valorUnitarioCartao: number;
  vencimento: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  invoiceItems: InvoiceItem[] = [
    // Sample data for demonstration
    {
      id: '1',
      status: 'PENDENTE',
      cnpj: '123456789',
      nomeFantasia: 'Empresa A',
      email: 'empresaA@example.com',
      valorMensalidade: 100,
      valorUnitarioCartao: 10,
      vencimento: '2023-06-30'
    },
    {
      id: '2',
      status: 'CONCLUÍDO',
      cnpj: '987654321',
      nomeFantasia: 'Empresa B',
      email: 'empresaB@example.com',
      valorMensalidade: 150,
      valorUnitarioCartao: 15,
      vencimento: '2023-07-15'
    }
  ];

  currentPage = 1;
  itemsPerPage = 10;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Verifica se a rota é a inicial e atualiza a exibição da tabela
        this.isInitialRoute();
      }
    });
  }

  openImportingPage() {
    window.open('http://localhost:4200/importing-page', '_blank');
  }

  isInitialRoute(): boolean {
    return this.router.routerState.snapshot.root.firstChild?.routeConfig?.path === '';
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

  get displayedItems(): InvoiceItem[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.invoiceItems.slice(startIndex, startIndex + this.itemsPerPage);
  }

  get totalPages() {
    return Math.ceil(this.invoiceItems.length / this.itemsPerPage);
  }  
}
