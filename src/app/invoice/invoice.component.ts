import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ActivatedRoute } from '@angular/router';

interface InvoiceItem {
  id: string;
  status: string;
  cnpj: string;
  fantasyName: string;
  email: string;
  monthlyPrice: number;
  unitValueCard: number;
  dueDate: string;
  createdDate: string;
  totalValue: number;
  totalValueToPay: number;
  rows: InvoiceItemRow[];
}

interface InvoiceItemRow {
  quantity: number;
  item: string;
  unitValue: number;
  totalValue: number;
}

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  item!: InvoiceItem;

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    const url = `http://localhost:8080/generate-invoice/${id}`;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    this.http.get<InvoiceItem>(url).subscribe(
      response => {
        this.item = response;
        console.log(`Fatura obtida com sucesso para o item com ID ${id}`);
      },
      error => {
        console.error(`Erro ao obter fatura para o item com ID ${id}:`, error);
      }
    );
  }
}
