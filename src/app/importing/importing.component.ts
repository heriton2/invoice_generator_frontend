import { Component } from '@angular/core';

@Component({
  selector: 'app-importing',
  templateUrl: './importing.component.html',
  styleUrls: ['./importing.component.css']
})
export class ImportingComponent {

    importData() {

        // Aqui você deve fazer a chamada para o endpoint de importação
        // e atualizar as variáveis de acordo com a resposta do endpoint

        // Exemplo de chamada fictícia para demonstração:
        setTimeout(() => {
            const success = true; // Indica se a importação foi bem-sucedida
            if (success) {
            window.open('http://localhost:4200/wizard-importing-sucess', '_blank');
            } else {
            window.open('http://localhost:4200/wizard-importing-error', '_blank');
            }
        }, 2000); // Simula um tempo de resposta do endpoint
    }
}