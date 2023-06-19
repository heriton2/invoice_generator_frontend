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

  constructor(private http: HttpClient, private router: Router) {}

  importErrorMessage: string = '';
  importSuccessMessage: string = '';

  importData() {
    const file = this.fileInput.nativeElement.files[0];
    const formData = new FormData();
    formData.append('file', file);

    this.http.post('http://localhost:8080/import', formData).subscribe(
      response => {
        console.log('Importação concluída com sucesso.');
        this.router.navigate(['/wizard-importing-success']); // Redirecionar para a rota de sucesso
      },
      error => {
        console.error('Erro durante a importação:', error);
        this.importErrorMessage = error.message; // Atribuir a mensagem de erro à variável
        this.router.navigate(['/wizard-importing-error']); // Redirecionar para a rota de erro
      }
    );
  }

  protected readonly window = window;
}
