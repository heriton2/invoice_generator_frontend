import {Component} from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-importing-success',
  templateUrl: './importing-success.component.html',
  styleUrls: ['./importing-success.component.css']
})
export class ImportingSuccessComponent {
  constructor(private router: Router) {}

  importedRecordsCount: number = 0; // Defina o valor correto com base na importação real

  closePage() {
    this.router.navigate(['/']); // Navegar para a rota inicial
  }
}
