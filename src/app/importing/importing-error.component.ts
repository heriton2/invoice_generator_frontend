import { Component } from '@angular/core';

@Component({
  selector: 'app-importing-error',
  templateUrl: './importing-error.component.html',
  styleUrls: ['./importing-error.component.css']
})
export class ImportingErrorComponent {
  importErrorMessage: string = ''; // Defina a mensagem de erro correta com base na importação real

  // Outras propriedades ou métodos necessários para o componente
}