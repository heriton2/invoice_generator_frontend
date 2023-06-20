import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from '@angular/router';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

interface InvoiceItem {
  id: string;
  status: string;
  cnpj: string;
  fantasyName: string;
  email: string;
  monthlyPrice: string;
  unitValueCard: string;
  dueDate: string;
  createdDate: string;
  totalValue: string;
  totalValueToPay: string;
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

  generatePDF(): void {
    // Dados para o documento PDF
    const data = {
      content: [
        {
          text: `FATURA ${this.item?.fantasyName}`,
          style: 'titulo'
        },
        {
          text: `CNPJ: ${this.item?.cnpj}`,
          style: 'cnpj'
        },
        {
          columns: [
            {
              width: '50%',
              stack: [
                {
                  text: `Data de criação: ${this.item?.createdDate}`,
                  style: 'label'
                },
                {
                  text: `E-mail cobrança: ${this.item?.email}`,
                  style: 'label'
                },
                {
                  text: `Vencimento: ${this.item?.dueDate}`,
                  style: 'label'
                }
              ]
            },
            {
              width: '50%',
              text: ''
            }
          ]
        },
        {
          table: {
            headerRows: 1,
            widths: ['10%', '40%', '25%', '25%'],
            body: [
              [
                { text: 'QTDE', style: 'tableHeader' },
                { text: 'ITEM', style: 'tableHeader' },
                { text: 'VALOR R$ UNITÁRIO', style: 'tableHeader' },
                { text: 'VALOR TOTAL R$', style: 'tableHeader' }
              ],
              ...this.item?.rows?.map(row => [row.quantity, row.item, row.unitValue, row.totalValue]) || []
            ]
          }
        },
        {
          text: `Total da Fatura a Pagar: ${this.item?.totalValueToPay}`,
          style: 'toPay'
        }
      ],
      styles: {
        titulo: {
          fontSize: 20,
          bold: true,
          margin: [0, 0, 0, 10] // [top, right, bottom, left]
        },
        cnpj: {
          fontSize: 14,
          margin: [0, 0, 0, 10] // [top, right, bottom, left]
        },
        label: {
          fontSize: 10,
          margin: [0, 0, 0, 5] // [top, right, bottom, left]
        },
        tableHeader: {
          fontSize: 12,
          bold: true,
          margin: [0, 0, 0, 5]
        },
        toPay: {
          fontSize: 14,
          bold: true,
          margin: [0, 10, 0, 0]
        }
      }
    };

    // Gerar o PDF
    // @ts-ignore
    pdfMake.createPdf(data).download('fatura.pdf');
  }
}
