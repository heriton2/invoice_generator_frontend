import { Component, ViewChild } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
  selector: 'app-importing',
  templateUrl: './importing.component.html',
  styleUrls: ['./importing.component.css']
})
export class ImportingComponent {
  @ViewChild('fileInput') fileInput: any;
  selectedFileName: string = '';
  constructor(private http: HttpClient, private router: Router) {}

  importErrorMessage: string = '';
  totalRegistros: number = 0;

  importData() {
    const file = this.fileInput.nativeElement.files[0];
    const formData = new FormData();
    formData.append('file', file);

    this.http.post('https://invoicegenerator-heriton2.b4a.run/import', formData,  { responseType: 'text', observe: "response" }).subscribe(
      response => {
        console.log('Importação concluída com sucesso.');
        this.totalRegistros = response.body !== null ? parseInt(response.body) : 0;
        console.log("totalregistros: ", this.totalRegistros)
        this.router.navigate(['/wizard-importing-success', { totalRegistros: this.totalRegistros }]);
      },
      error => {
        console.error('Erro durante a importação:', error);
        this.importErrorMessage = error.error; // Atribuir a mensagem de erro à variável
        this.router.navigate(['/wizard-importing-error', { importErrorMessage: this.importErrorMessage}]); // Redirecionar para a rota de erro
      }
    );
  }

  handleFileInputChange(event: any) {
    const file = event.target.files[0];
    this.selectedFileName = file ? file.name : '';
  }

  protected readonly window = window;
}
